import React from 'react';
import Timestamp from "./Timestamp";
import ReactionButtons from "./ReactionButtons";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { selectPostById } from './postSlice';
import Card from '../../components/Card';
import CardImage from "../../assets/images/placeholder.jpeg";

const PostExcerpt = ({ postId }) => {
    const post = useSelector(state => selectPostById(state, postId));
    return (
        <Link to={`/posts/${post.id}`} className="flex sm:basis-80 h-90 justify-center px-6 sm:p-0 hover:opacity-90">
            <Card
                image={post.categoryId ? require(`../../assets/images/posts/${post.categoryId}.jpg`) : CardImage}
                title={post.title.substring(0, 95)}
                content={`${post.body.substring(0, 90)}...`}
                tag={post.categoryId}
            >
                <div className='flex justify-end mt-4'>
                    <Timestamp date={post.date} />
                </div>
                <div onClick={e => e.preventDefault()}>
                    <ReactionButtons post={post} />
                </div>
            </Card>
        </Link>
    )
}

export default PostExcerpt;