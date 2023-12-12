import React from "react";
import { useDispatch } from "react-redux";
import { toggleReaction } from "./postSlice";
import { HandThumbDownIcon, HandThumbUpIcon, HeartIcon } from "@heroicons/react/20/solid";

const ReactionButtons = ({ post }) => {
  const dispatch = useDispatch();
  const reactionEmojis = {
    thumbsUp: <HandThumbUpIcon />,
    heart: <HeartIcon />,
    thumbsDown: <HandThumbDownIcon />,
  };
  return (
    <div className="flex gap-4 justify-evenly mt-4 border-primary border-[1px] py-2 px-3 rounded w-[100%]">
      {Object.entries(reactionEmojis).map(([name, emoji]) => (
        <button
          type="button"
          key={name} onClick={() => dispatch(toggleReaction({ postId: post.id, reaction: name }))}>
          <div className={`w-5 h-5 hover:opacity-80 ${(post.reactions[name] ? "text-indigo-400" : "text-primary")}`}>{emoji}</div>
        </button>
      ))
      }
    </div >
  )
};

export default ReactionButtons;
