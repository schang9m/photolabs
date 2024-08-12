import React from "react";

import "../styles/TopicList.scss";
import TopicListItem from "./TopicListItem";


const TopicList = (props) => {
  const {topics, fetchPhotosByTopic} = props.topic;
  
  return (
    <div className="top-nav-bar__topic-list">
      {/* Insert React */}     
        {topics.map((topics) => {
          return <TopicListItem key={topics.id} title={topics.title} id={topics.id} fetchPhotosByTopic={fetchPhotosByTopic} />
        }
        )}
    </div>
  );
};

export default TopicList;
