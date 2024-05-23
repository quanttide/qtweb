import React, { useState, useEffect } from 'react';
import './assets/CSS/HeaderSelect.css';

interface Props {
    mainTitle: string;
    contents: {
        subtitle: string;
        content: React.ReactNode;
    }[];
}

export default function HeaderSelect({ mainTitle, contents }: Props) {
    /* 
    置于上方的内容选择器
    */
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
            <hr className="divider" />
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
