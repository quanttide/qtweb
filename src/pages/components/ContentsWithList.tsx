import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import './assets/CSS/ContentsWithList.css';

interface Props {
    list: string[];
    sections: {
        title: string;
        paragraph: string[];
        imageUrl: string;
    }[];
}
/**
 * 一个左侧带有目录侧边栏的分章节阅读器，不支持详细等
 * 
 * @param list - 侧边栏展示的目录，和章节顺序一一对应
 * @param sections - 具体章节内容，一个数组
 * @param section.title - 章节标题
 * @param section.paragraph - 章节的具体内容，一个数组，数组中的每个元素为字符串没对应一个段落p，通过格式 ![描述](link) 插入网页链接
 * @param section.imageUrl - 这一章节有无插图，空为留空
 */
export default function ContentsWithList({ list, sections }: Props) {
    //
    const sectionRefs = useMemo(() => sections.map(() => React.createRef<HTMLDivElement>()), [sections]);
    const [activeIndex, setActiveIndex] = useState<number>(0);
    const [delayedActiveIndex, setDelayedActiveIndex] = useState<number>(0);

    const [needFixed, setNeedFixed] = useState(false);
    const fixedTopRef = useRef(0);

    const handleScrollToSection = (index: number) => {
        sectionRefs[index].current?.scrollIntoView({ behavior: 'smooth' });
        setActiveIndex(index);
    };

    const handleScroll = useCallback(() => {
        sectionRefs.forEach((ref, index) => {
            if (ref.current) {
                const rect = ref.current.getBoundingClientRect();
                if (rect.top >= 0 && rect.top < window.innerHeight / 2) {
                    setActiveIndex(index);
                }
            }
        });
    }, [sectionRefs]);

    useEffect(() => {
        const handleScroll = () => {
            fixedTopRef.current = (document.getElementById('fixed-menu') as HTMLElement).offsetTop;
            console.log(fixedTopRef.current);  
            const scrollTop = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
            if (scrollTop >= fixedTopRef.current) {
                setNeedFixed(true);
            } else {
                setNeedFixed(false);
            }
        };

        window.onscroll = handleScroll;
        return () => {
            window.onscroll = null;
        };
    }, []);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [handleScroll]);

    useEffect(() => {
        const timer = setTimeout(() => {
            setDelayedActiveIndex(activeIndex);
        }, 100); // 延迟100毫秒切换

        return () => clearTimeout(timer);
    }, [activeIndex]);

    return (
        <div id='fixed-menu' className='outer-container'>
            <div className="container">
                <div className={`siderbar-${needFixed ? 'placeholders' : ''}`}>
                    {/* 空占位符，当侧边栏固定时，保证内容位置不变 */}
                </div>
                <div className={`sidebar ${needFixed ? 'fixed' : ''}`} >
                    <ul>
                        {list.map((item, index) => (
                            <li
                                key={index}
                                onClick={() => handleScrollToSection(index)}
                                className={delayedActiveIndex === index ? 'active' : ''}
                            >
                                {item}
                            </li>
                        ))}
                    </ul>
                </div>
                <div className="content">
                    {sections.map((section, index) => (
                        <div key={index} className='content-section-list' ref={sectionRefs[index]}>
                            <h2>{section.title}</h2>
                            {section.paragraph.map((text, idx) => {
                                // 检测特定格式的字符串
                                const linkPattern = /!\[(.*?)\]\((.*?)\)/;
                                const match = text.match(linkPattern);

                                if (match) {
                                    const [, altText, url] = match;
                                    return <a className='text-link' target='blank' key={idx} href={url}>{altText}</a>;
                                }

                                return <p key={idx}>{text}</p>;
                            })}
                            {section.imageUrl && <img src={section.imageUrl} alt={section.title} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
