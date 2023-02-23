import React, { useState } from 'react'
import { useHistory } from 'react-router-dom';

const Create = () => {

  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');
  const [author, setAuthor] = useState('snk');
  const [isPending, setIsPending] = useState(false);
  // useHistory is a hook used for moving backward and forward through the history (paages visited)
  const history = useHistory();

  const handleSubmit = (e) => {
      e.preventDefault();
      const blog = { title, body, author };
      // console.log(blog);

      setIsPending(true);

      fetch('http://localhost:8000/blogs', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(blog)
      }).then(() => {
        console.log("new blog added");
        setIsPending(false);
         // -1 value means going one page back the history
      // history.go(-1);
      //push means going to a particular page here '/' means home
      history.push('/');
      })

     
  }

  return (
    <div className="create">
        <h2>Add a New Blog</h2>
        <form onSubmit={handleSubmit}>
          <label>Blog title:</label>
          <input
          type="text"
          required
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          />
          <label>Blog body:</label>
          <textarea
          required
          value={body}
          onChange={(e) => setBody(e.target.value)}
          ></textarea>
          <label>Blog author:</label>
          <select
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
          >
            <option value="snk">snk</option>
            <option value="messi">messi</option>
          </select>
          { !isPending && <button>Add Blog</button>}
          { isPending && <button disabled>Adding Blog...</button>}
          {/* <p>{ title }</p>
          <p>{ body }</p>
          <p>{ author }</p> */}
        </form>
    </div>
  )
}

export default Create