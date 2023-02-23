import React from 'react'
import { Link } from 'react-router-dom'

// const Bloglist = (props) => {
 // const blogs = props.blogs;
    // const title = props.title;

//another better way than above to use props    
// const Bloglist = ({ blogs, title, handleDelete }) => {
const Bloglist = ({ blogs, title }) => {
    // here the blogs and title can be directly used without storing them in variables

  return (
    <div className="blog-list">
        <h2>{title}</h2>
         {blogs.map((blog) => (
          <div className="blog-preview" key={blog.id}>
            <Link to={`/blogs/${blog.id}`}>
            <h2>{ blog.title }</h2>
            <p>Written by { blog.author }</p>
            </Link>
            

            
            {/* <button onClick={ () => handleDelete(blog.id) }>delete  blog</button> */}

          </div>
      ))}
    </div>
  )
}

export default Bloglist