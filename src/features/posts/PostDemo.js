import React from 'react'
import Card from '../../components/Card'
import ImageCard from '../../components/ImageCard'
import { selectPostById } from './postSlice';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const PostDemo = ({ postId, className }) => {
    const post = useSelector(state => selectPostById(state, postId));
    return (
        <Link
            to={`/posts/${post.id}`}
            className={`flex justify-center flex-wrap md:flex-nowrap md:justify-between mx-auto md:h-[60vh] gap-7 max-w-7xl px-2 sm:px-6 lg:px-8 ${className}`}>
            <Card className="!px-10 !py-8 md:basis-5/12 !rounded-2xl shadow-xl"  >
                <div>
                    <p className='font-bold mb-2 text-lg'>
                        {post.title}
                    </p>
                    <p className='text-lg leading-7'>
                        {`${post.body.substring(0, 400)}...`}
                    </p>
                </div>
            </Card>
            <ImageCard
                imageSrc={require(`../../assets/images/posts/${post.categoryId}.jpg`)}
                className="md:basis-7/12 !shadow-xl " />
        </Link>
    )
}

export default PostDemo