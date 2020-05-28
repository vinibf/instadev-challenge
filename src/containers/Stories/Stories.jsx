import React, { useState } from "react";

import Story from '../../components/Story';

import './Stories.scss';

const Stories = ({ stories, getUserHandler }) => {
  return (
    <div data-testid="stories">
      <section className="stories">
        <div className="container">
        </div>
      </section>
    
      {/* showStory && (<Story />) */}
      <Story />
    </div>
  );
};

export default Stories;
