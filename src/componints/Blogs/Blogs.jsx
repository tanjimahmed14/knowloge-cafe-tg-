import { useEffect } from "react";
import { useState } from "react";
import Blog from "../Blog/Blog";
import { data } from "autoprefixer";
import PropTypes from 'prop-types';



const Blogs = ({handelClickBk, handelClickTime}) => {
    const [blogs, setBlogs] = useState([])

    useEffect(() => {
        fetch('blog.json')
        .then(res => res.json())
        .then(data => setBlogs(data))
        
    },[])
    return (
        <div className="md:w-2/3">
            {/* <h1 className="text-5xl">Blogs: {blogs.length}</h1> */}
            
            {
                blogs.map(blog => <Blog key={data.id} blog={blog} handelClickBk={handelClickBk}
                    handelClickTime={handelClickTime}></Blog>)
            }
        </div>
    );
};


Blogs.propTypes = {
    handelClickBk: PropTypes.func.isRequired,
    handelClickTime: PropTypes.func.isRequired
}
export default Blogs;