import React from "react";
import moment from 'moment';

const PostTimestamp = ({ date }) => {
  let timestamp = "";
  if (date) {
    timestamp = moment(date).format('MMMM Do YYYY');
  }
  return (
    <span title={timestamp}>
      &nbsp;<i>{timestamp}</i>
    </span>
  );
};

export default PostTimestamp;
