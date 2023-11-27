import PropTypes from 'prop-types';
import Bookmark from '../Bookmark/Bookmark';


const Bookmarks = ({bookmark, readingTime}) => {
    return (
        <div className="md:w-1/3  rounded-lg ">
            <div className='bg-slate-100 mb-5 rounded-lg p-5'>
                <h3 className='text-[#6047EC] text-2xl'>Read time : <span>{readingTime}</span> min</h3>
            </div>
            <div className='p-10 bg-slate-100 rounded-lg'>
            <h1 className="text-2xl text-center">Bookmarked Blogs : {bookmark.length}</h1>
            </div>

           <div className='p-4 bg-slate-100 rounded-lg'>
           {
                bookmark.map((bookmark, idx) => <Bookmark key={idx} bookmark={bookmark}></Bookmark>)
            }
           </div>

        </div>
    );
};

Bookmarks.propTypes = {
    Bookmark: PropTypes.array.isRequired,
    readingTime: PropTypes.func.isRequired
}

export default Bookmarks;