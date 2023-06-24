import React, { useState, useEffect } from "react";
import blog from "./img/blog.jpg";
import { Link } from "react-router-dom";

const MorePost = () => {
  const [post, setPost] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [postsPerPage] = useState(6);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await fetch("https://jsonplaceholder.typicode.com/posts");
      const jsonData = await response.json();
      setPost(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  // Pagination logic
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = post.slice(indexOfFirstPost, indexOfLastPost);

  // Change page
//   const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () => setCurrentPage(currentPage + 1);
  const prevPage = () => setCurrentPage(currentPage - 1);

  return (
    <div className="post">
      <div className="left">
        <div className="mypost">
          {currentPosts.map((data) => {
            return (
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
            );
          })}
        </div>

        {/* Pagination */}
        <div className="pagination">
          <button className="abtn" onClick={prevPage} disabled={currentPage === 1}>
            Previous
          </button>
          <button className="abtn"
            onClick={nextPage}
            disabled={currentPage === Math.ceil(post.length / postsPerPage)}
          >
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default MorePost;
