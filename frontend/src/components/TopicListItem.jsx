import React from "react";

import "../styles/TopicListItem.scss";

const TopicListItem = (props) => {
  return (
    <div className="topic-list__item" >
      {/* Insert React */}
      <span> {props.title} </span>
    </div>
  );
};

export default TopicListItem;
