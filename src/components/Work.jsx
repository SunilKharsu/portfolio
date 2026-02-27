import React, { useState } from 'react';
import workData from '../data/workData.js';

function Work() {
  const INITIAL_VISIBLE_CARDS = 3;
  const CARDS_PER_CLICK = 3;
  const [visibleCards, setVisibleCards] = useState(INITIAL_VISIBLE_CARDS);

  const handleSeeMore = () => {
    setVisibleCards((prevVisibleCards) =>
      Math.min(prevVisibleCards + CARDS_PER_CLICK, workData.length)
    );
  };

  const visibleWorkItems = workData.slice(0, visibleCards);
  const hasMoreCards = visibleCards < workData.length;

  return (
    <div id="portfolio">
      <div className="container">
        <h1 className="sub-title">My Work</h1>
        <div className="work-list">
          {visibleWorkItems.map((work) => (
            <div key={work.id} className="work">
              <img src={work.image} alt={work.imageAlt} />
              <div className="layer">
                <h3>{work.title}</h3>
                <p>{work.description}</p>
                <a href={work.link}>
                  <i className="fa-solid fa-arrow-up-right-from-square" />
                </a>
              </div>
            </div>
          ))}
        </div>
        {hasMoreCards && (
          <button type="button" className="btn" onClick={handleSeeMore}>
            See more
          </button>
        )}
      </div>
    </div>
  );
}

export default Work;
