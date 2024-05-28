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

export default function ContentSections({maintitle, sections}:ContentSectionProps){
  const [expandedSections, setExpandedSections] = useState<boolean[]>(Array(sections.length).fill(false));

  const toggleSection = (index: number) => {
    setExpandedSections(prev => {
      const newState = [...prev];
      newState[index] = !newState[index];
      return newState;
    });
  };

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
