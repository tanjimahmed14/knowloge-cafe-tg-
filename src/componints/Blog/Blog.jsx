import { FaBookmark } from 'react-icons/fa';

import PropTypes from 'prop-types';

const Blog = ({blog, handelClickBk, handelClickTime}) => {
    // console.log(blog)
    const {id, title, cover, author, author_img, reading_time, posted_date,hashtag} = blog;
    return (
        <div className='space-y-4 mb-10'>
            <img className='w-full rounded-lg ' src={cover} alt={`Cover photo ${title}`} />
            <div className='flex justify-between items-center mx-2'>
                <div className='flex items-center '>
                    <img className='w-14 rounded-full h-14' src={author_img} alt="author" />
                    <div className='ml-8'>
                        <h3 className='text-[#11111199] font-semibold'>{author}</h3>
                        <h3 className='text-[#11111199] font-semibold'>{posted_date}</h3>
                    </div>
                </div>
                <div className='flex'>
                    <h3 className='text-[#11111199] font-semibold mr-2'><span>{reading_time}</span> min read</h3>
                    <button onClick={() => handelClickBk(blog)}><FaBookmark></FaBookmark></button>
                </div>
            </div>
            <h1 className='text-4xl font-semibold mb-4'>{title}</h1>
            {
                hashtag.map((hash, idx) => <span key={idx} className='text-[#11111199] font-semibold mr-3'><a href="">{hash}</a> </span>)
            } <br />
            <button onClick={ () => handelClickTime(id ,reading_time)}
            className='text-blue-800 underline font-semibold'
            >Mark as read</button>
            
        </div>
    );
};

Blog.propTypes = {
    blog: PropTypes.object.isRequired,
    handelClickBk: PropTypes.func.isRequired,
    handelClickTime: PropTypes.func.isRequired
}

export default Blog;