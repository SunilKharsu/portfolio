import React, { useState } from 'react';
import aboutTabs, { aboutSummary } from '../data/aboutData.js';

function About() {
  const [activeTab, setActiveTab] = useState('skills');

  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="about-col-1">
            <img src="/images/sunilPic2.png" alt="Sunil" />
          </div>
          <div className="about-col-2">
            <h1 className="sub-title">About Me</h1>
            <p>{aboutSummary}</p>

            <div className="tab-titles">
              {aboutTabs.map((tab) => (
                <p
                  key={tab.id}
                  className={`tab-links ${activeTab === tab.id ? 'active-links' : ''}`}
                  onClick={() => setActiveTab(tab.id)}
                >
                  {tab.label}
                </p>
              ))}
            </div>

            {aboutTabs.map((tab) => (
              <div
                key={tab.id}
                className={`tab-contents ${activeTab === tab.id ? 'active-tab' : ''}`}
              >
                <ul>
                  {tab.items.map((item) => (
                    <li key={`${tab.id}-${item.title}`}>
                      <span>{item.title}</span>
                      <br />
                      {item.detail}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
