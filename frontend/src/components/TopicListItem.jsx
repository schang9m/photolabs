import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  const {id, title, fetchPhotosByTopic} = props
  const handleClick = (topicID) => {
    fetchPhotosByTopic(topicID);
  }
  return (
    <div className="topic-list__item" onClick={() => handleClick(id)}>
      {/* Insert React */}
      <span> {title} </span>
    </div>
  );
};

export default TopicListItem;
