import React, { useState, useEffect } from 'react';
import './assets/CSS/HeaderSelect.css';

interface Props {
    mainTitle: string;
    contents: {
        subtitle: string;
        content: React.ReactNode;
    }[];
}
/**
 * 一个横向的内容选择器
 * @param mainTitle - 标题，空时不显示
 * @param contents - 被选择的页面，列表
 * @param contents.subtitle - 这个被选择页面的标题
 * @param contents.content - 被选择的页面显示的内容，一个组件
 */
export default function HeaderSelect({ mainTitle, contents }: Props) {

    const [selectedContent, setSelectedContent] = useState<number | null>(null);

    useEffect(() => {
        // 首次显示第一个页面
        if (contents.length > 0) {
            setSelectedContent(0);
        }
    }, [contents]);

    const handleClick = (index: number) => {
        setSelectedContent(index);
    };

    return (
        <div className="content-frame">
            {/* mainTitle为空就不显示它 */}
            {mainTitle && <h1>{mainTitle}</h1>}
            <div className="buttons">
                {contents.map((item, index) => (
                    <button
                        key={index}
                        className={`button ${selectedContent === index ? 'selected' : ''}`}
                        onClick={() => handleClick(index)}
                    >
                        {item.subtitle}
                    </button>
                ))}
            </div>
            <div className="content-display">
                {selectedContent !== null ? (
                    <div>{contents[selectedContent].content}</div>
                ) : (
                    <p>Click on a button to see content</p>
                )}
            </div>
        </div>
    );
}
