import React, { useEffect, useState,useContext } from "react";
import { AiOutlineArrowLeft, AiOutlineHeart } from "react-icons/ai";
import { BiUserCircle } from "react-icons/bi";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import { FavouritesContext } from "./fabcontext";

const FullPost = () => {
  const [post, setPost] = useState(null);
  const [aut, setAut] = useState({});
  const [comm, setComm] = useState([]);
  const { id } = useParams();

  const { addToFavourites } = useContext(FavouritesContext);
  
  useEffect(() => {
    fetchData();
    fetchAuthor();
    fetchComments();
  });

  const fetchData = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/posts/${id}`
      );
      const jsonData = await response.json();
      setPost(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  const fetchAuthor = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/users?id=${id}`
      );
      const jsonData = await response.json();
      setAut(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };

  const fetchComments = async () => {
    try {
      const response = await fetch(
        `https://jsonplaceholder.typicode.com/comments?postId=${id}`
      );
      const jsonData = await response.json();
      setComm(jsonData);
    } catch (error) {
      console.log("Error:", error);
    }
  };
  // console.log(aut[0].name)
  // console.log(fab);

  if (!post) {
    return <p>Loading post...</p>;
  }
  const handleFavourite = () => {
    addToFavourites(post);
  };

  return (
    <div className="all">
      <div className="but">
        <Link to="/" className="link">
          <button className="b1">
            <AiOutlineArrowLeft />
            Home
          </button>
          {/* sending the fab to fab component */}
        </Link>

        <button className="b2" onClick={handleFavourite}>
          Favourite
          <AiOutlineHeart id="heart" />
        </button>
      </div>
      <div className="det1">
        <h1>{post.title}</h1>
        <div className="det">
          <h2 id="aut">Author:-{aut[0]?.name}</h2>
          <h2 id="mail">Email:-{aut[0]?.email}</h2>
        </div>

        <p>{post.body}</p>
      </div>
      <div className="comments">
        <h3>{comm.length} Comments</h3>
        {comm.map((data) => {
          return (
            <div key={data.id}>
              <div className="A">
                <BiUserCircle id="ava" />
                <span>
                  <h3>{data.name.split(" ").slice(0, 2).join(" ")}</h3>
                  <p>{data.email}</p>
                </span>
              </div>
              <p id="co">{data.body}</p>
              <hr></hr>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FullPost;


