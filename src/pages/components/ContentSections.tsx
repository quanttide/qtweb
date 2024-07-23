import './assets/CSS/ContentSections.css';
import React, { useState } from 'react';

interface Section {
  title: string;
  description: string;
  imgSrc: string;
  link: string;
  DetailComponent: React.FC;
}

interface ContentSectionProps {
  maintitle: string;
  sections: Section[];
}
/**
 * 一个分章节的文字显示组件
 * 
 * @param maintitle - 整个组件的标题
 * @param sections - 章节数组
 * @param sections.title - 本章节标题
 * @param section.description - 本章内容描述
 * @param section.imgSrc - 本章的展示图
 * @param section.link - 决定详细按钮作用，link不为空，则点击后跳转至链接，否则展开详细
 * @param section.DetailComponent - 被展开的详细内容，一个组件
 */
export default function ContentSections({ maintitle, sections }: ContentSectionProps) {
  //记录详细按钮展开状态
  const [expandedSections, setExpandedSections] = useState<boolean[]>(Array(sections.length).fill(false));

  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

  //决定详细按钮的动作
  const handleButtonClick = (index: number, link: string) => {
    if (link) {
      window.open(link, '_blank');
    } else {
      toggleSection(index);
    }
  };

  return (
    <div className="content-section">
      <h1>{maintitle}</h1>
      {sections.map((section, index) => (
        <div key={index} className="section">
          <img src={require(`${section.imgSrc}`)} alt={section.title} className="section-image" />
          <div className="section-content">
            <h2>{section.title}</h2>
            <p>{section.description}</p>
            {expandedSections[index] && (
              <section.DetailComponent />
            )}
          </div>
          <button onClick={() => handleButtonClick(index, section.link)} className="section-link">
            {expandedSections[index] ? '↓' : '→'}
          </button>
        </div>
      ))}
    </div>
  );
};
