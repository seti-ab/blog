import React from "react";
import { useDispatch } from "react-redux";
import { toggleReaction } from "./postSlice";
import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon } from "@heroicons/react/20/solid";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmojis = {
    thumbsUp: <HandThumbUpIcon />,
    thumbsDown: <HandThumbDownIcon />,
    heart: <HeartIcon />,
  };
  return (
    <div className="flex gap-6 justify-between mt-4 py-2 px-3 rounded w-[100%]">
      {Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button
          type="button"
          className="w-6 h-6"
          key={name} onClick={() => dispatch(toggleReaction({ postId: post?.id, reaction: name }))}>
          <div className={`w-5 h-5 hover:opacity-80 ${(post?.reactions[name] ? "text-primary stroke-primary" : "stroke-primary text-white")}`}>{emoji}</div>
        </button>
      ))
      }
    </div >
  )
};

export default ReactionButtons;
