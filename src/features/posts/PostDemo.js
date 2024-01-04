import React from 'react'
import Card from '../../components/Card'
import ImageCard from '../../components/ImageCard'
import { selectPostById } from './postSlice';
import { useSelector } from 'react-redux';

const PostDemo = ({ postId, className }) => {
    const post = useSelector(state => selectPostById(state, postId));
    return (
        <div className={`flex justify-center flex-wrap md:flex-nowrap md:justify-between mx-auto md:h-[60vh] gap-7 mt-16 max-w-7xl px-2 sm:px-6 lg:px-8 ${className}`}>
            <Card className="!px-10 !py-8 md:basis-5/12 rounded-2xl shadow-xl"  >
                <div>
                    <p className='font-bold mb-2 text-lg'>
                        {post.title}
                    </p>
                    <p className='text-lg leading-7'>
                        A demo project of a blog powered by Tailwind CSS and created with React JS is essentially a miniature version of a real blog website, built to showcase the core functionalities and learning potential of these two powerful tools. Think of it as a training ground for aspiring blog builders, where they can experiment and get comfortable with the key elements before tackling a full-fledged project.</p>
                </div>
            </Card>
            <ImageCard imageSrc={require(`../../assets/images/posts/${post.categoryId}.jpg`)} className="md:basis-7/12 !shadow-xl " />
        </div>
    )
}

export default PostDemo