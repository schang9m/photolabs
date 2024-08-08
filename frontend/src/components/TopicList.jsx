import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";

import topics from "mocks/topics";

const TopicList = () => {
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}     
        {topics.map((topic) => {
          return <TopicListItem key={topic.id} title={topic.title}/>
        }
        )}
    </div>
  );
};

export default TopicList;
