import { useState, useEffect } from "react";

import './Body.css';
import Avatar from '../../assets/images/snoo.png'

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch("https://www.reddit.com/r/data.json")
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.children
          .slice(0, 12)
          .map((post) => ({
            title: post.data.title,
            num_comments: post.data.num_comments,
            author_fullname: post.data.author_fullname,
            url: post.data.url
          }))
        );
      });
  }, []);

const handleNextClick = () => {
  if (currentPage < 12) {
    setCurrentPage(currentPage + 1);
  }
};

const handlePrevClick = () => {
  if (currentPage > 1) {
    setCurrentPage(currentPage - 1);
  }
};

  return (
    <div className='container'>
    <div className='header'>
    <div className='avatar-container'>
      <img src={Avatar} width="88" alt="" />
      </div>
      <div className='title'>
      <h1>r/data</h1>
      </div>
      <p>Welcome to the Protegrity page that features a collection of posts from r/data, a subreddit dedicated to discussing and sharing data and datasets.</p>
    </div>
      <div className="grid-container">
      {posts.map((post, index) => (
        <div key={index}>
          <div className="card">
        <div className="top-row"><h3>{post.title}</h3></div>
        <div className="middle-row"><p>{post.author_fullname}</p></div>
        <div className="bottom-row"><p>{post.num_comments} Comments</p>
          <a href={post.url}><button className="global-button"><h4>View Post</h4></button></a>
        </div>
        </div>
        </div>
      ))}

        <div className="button-container">
          <button className="global-button" onClick={handlePrevClick}><h4>Prev</h4></button>
          <h4>{currentPage} - {Math.min(currentPage+11, 12)}</h4>
          <button className="global-button" onClick={handleNextClick}><h4>Next</h4></button>
        </div>
      </div>
    </div>
  );
};

export default Body;
