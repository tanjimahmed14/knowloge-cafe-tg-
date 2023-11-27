import { useState } from 'react'
import './App.css'
import Blogs from './componints/Blogs/Blogs'
import Bookmarks from './componints/Bookmarks/Bookmarks'
import Header from './componints/Header'

function App() {
  const [bookmark, setBookmark] =useState([]);
  const [readingTime , setTime ] = useState(0);

  const handelClickBk = (blog) =>{
    const newBookmarks = [...bookmark, blog];
    setBookmark(newBookmarks);
  }

  const handelClickTime = (id, time) => {
    const newSetTime = readingTime + time;
    setTime(newSetTime)
    // console.log('Click by read time more time', time)
    // console.log('remove time', id)
    const newArryBk = bookmark.filter(bookmark => bookmark.id !== id);
    setBookmark(newArryBk)
  }

  return (
    <div className='max-w-5xl mx-auto'>
      <Header></Header>
      <div className='md:flex gap-5 p-5'>
      <Blogs handelClickBk={handelClickBk}
      handelClickTime={handelClickTime}></Blogs>
      <Bookmarks bookmark={bookmark} readingTime={readingTime} ></Bookmarks>
      </div>
      
    </div>
  )
}

export default App
