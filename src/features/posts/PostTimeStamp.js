import React from "react";
import moment from 'moment';

const PostTimestamp = ({ date }) => {
  let timestamp = "";
  if (date) {
    timestamp = moment(date).format('MMMM Do YYYY');
  }
  return (
    <i>{timestamp}</i>
  );
};

export default PostTimestamp;
