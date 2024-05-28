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

export default function ContentsWithList({ list, sections }: Props) {
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
            console.log(fixedTopRef.current);  // 移动 console.log 到 useEffect 中
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
                            {section.paragraph.map((text, idx) => (
                                <p key={idx}>{text}</p>
                            ))}
                            {section.imageUrl && <img src={section.imageUrl} alt={section.title} />}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
