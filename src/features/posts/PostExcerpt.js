import React from 'react'
import PostCategoryTag from "./PostCategoryTag";
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
        <Link to={`/posts/${post.id}`} className="flex hover:bg-gray-100 sm:basis-80 h-90 justify-center px-6 sm:p-0 hover:opacity-90">
            <Card
                image={post.imageURl ? require(`../../assets/images/posts/${post.imageURl}`) : CardImage}
                title={post.title.substring(0, 95)}
                content={`${post.body.substring(0, 90)}...`}
            >
                <div className='flex items-center justify-between mt-6'>
                    <PostCategoryTag categoryId={post.categoryId} />
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