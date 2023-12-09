import React from 'react'
import PostAuthor from "./PostAuthor";
import PostTimestamp from "./PostTimestamp";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import Card from '../../components/Card';
import CardImage from "../../assets/images/placeholder.jpeg";

const PostExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId));
    return (
        <Link to={`posts/${post.id}`} className="flex hover:bg-gray-100 basis-[30%] h-90 justify-center">
            <Card
                image={CardImage}
                title={post.title}
                content={`${post.body.substring(0, 50)}...`}>
                <PostAuthor userId={post.userId} />
                <PostTimestamp date={post.date} />
                <ReactionButtons post={post} />
            </Card>
        </Link>
    )
}

export default PostExcerpt;