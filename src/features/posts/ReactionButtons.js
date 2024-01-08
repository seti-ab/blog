import React from "react";
import { useDispatch } from "react-redux";
import { addReaction } from "./postSlice";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmojis = {
    thumbsUp: "👍",
    wow: "😮",
    heart: "❤️",
    coffee: "☕️",
    rocket: "🚀",
  };
  return (
    <div className="flex gap-3">
      {Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button type="button" key={name} onClick={() => dispatch(addReaction({ postId: post.id, reaction: name }))}>
          {emoji}{post.reactions[name]}
        </button>
      ))
      }
    </div >
  )
};

export default ReactionButtons;
