import React, { useState, useEffect } from 'react';
import blog from './img/blog.jpg';
import { Link } from 'react-router-dom';

const Post = () => {
  const [post, setPost] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch('https://jsonplaceholder.typicode.com/posts');
      const jsonData = await response.json();
      setPost(jsonData);
    } catch (error) {
      console.log('Error:', error);
    }
  };

  return (
    <div className="post" id='main'>
      <div className="left">
        <h3>LATEST POSTS</h3>
        <div className="mypost">
          {post.slice(0, 9).map((data) => (
            <Link key={data.id} to={`/post/${data.id}`} className='link'>
              <div id="postimg" className="data">
                <img src={blog} alt="blog" />
                <h3>{data.title.split(' ').slice(0, 5).join(' ')}</h3>
                <p>
                  {data.body.split(' ').slice(0, 7).join(' ')}
                  <span>...</span>
                </p>
              </div>
            </Link>
          ))}
        </div>
        <Link to="/MorePost" className='link'>
          <button className="btn">View More</button>
        </Link>
      </div>
      <div className="right">
        <h3>POPULAR POSTS</h3>
        <div className="fav">
          {post.slice(0, 3).map((data) => ( 
            <Link key={data.id} to={`/post/${data.id}`} className='link'>
              <div key={data.id} className="random">
              <h3 className='t'>{data.title}</h3>
              <p className='pp'>{data.body}</p>
            </div>
            </Link>
            
          ))}
        </div>
      </div>
    </div>
  );
};

export default Post;
