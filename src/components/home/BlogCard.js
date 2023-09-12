import React from 'react';
import { Link } from 'react-router-dom'

const BlogCard = () => {
  return (
        <div className='col-3 px-3'>
    <div className='blog-card card-wrapper '>
        <div className='blog-image'>
            <img className='img-fluid' src='images/blog-1.jpg' alt='blog' />
        </div>
        <div className='blog-content'>
            <p className='date'>12 March 2023</p>
            <h5 className='sub-title'>This is Blog Title</h5>
            <p>lorem ispum  lorem ispum lorem ispum lorem ispumlorem ispum lorem ispum</p>
            <Link className='link-btn' to='/'>Read More</Link>
        </div>
    </div>
</div>
  )
}

export default BlogCard