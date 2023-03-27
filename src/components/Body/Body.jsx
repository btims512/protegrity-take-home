import { useState, useEffect } from "react";
import './Body.css';
import Avatar from '../../assets/images/snoo.png'
import Spinner from '../../assets/images/spinner.gif'

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(`https://www.reddit.com/r/data.json?count=${(currentPage - 1) * 12}&limit=96`)
      .then((response) => response.json())
      .then((data) => {
        setPosts(data.data.children.slice((currentPage - 1) * 12, currentPage * 12)
          .map((post) => ({
            title: post.data.title,
            num_comments: post.data.num_comments,
            author: post.data.author,
            url: post.data.url
          }))
        );
        setIsLoading(false);
      });
  }, [currentPage]);

  const handleNextClick = () => {
  if (currentPage < 8) {
    setCurrentPage(currentPage + 1);
    if (window.innerWidth <= 767) {
      window.scrollTo(0, 0);
    }
  }
};

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  return (
  <>
    <div className='header'>
      <div className='avatar-container'>
        <img src={Avatar} width="88" alt="" />
      </div>
      <div className="flex-grid-header">
        <div className="title-container">
          <div className='title'>
            <h1>r/data</h1>
          </div>
          <p>Welcome to the Protegrity page that features a collection of posts from r/data, a subreddit dedicated to discussing and sharing data and datasets.</p>
        </div>
      </div>
    </div>
    {isLoading ? (
      <div>
        <div className="loading">
          <img src={Spinner} alt="loading..." />
        </div>
      </div>
    ) : (
      <div className="flex-grid">
        <div className="grid-container">
          {posts.map((post, index) => (
            <div className="grid-item" key={index}>
              <div className="row-top">
                <h3>{(post.title)}</h3>
                <p>u/{post.author}</p>
              </div>
              <div className="row-bottom">
                <p>{post.num_comments} Comments</p>
                <a href={post.url}><button className="global-button"><h4>View Post</h4></button></a>
              </div>
            </div>
          ))}
        </div>
      </div>
    )}
    <div>
      <div className="flex-grid-bottom">
        <div className="button-container">
          <button className="global-button prev-button" onClick={handlePrevClick} style={currentPage === 1 ? {background: "#2B3037", opacity: 0.3, cursor: "not-allowed"} : null}>
            <h4 style={currentPage === 1 ? {color: "white"} : null}>Prev</h4>
          </button>
          <h4>page {currentPage} of {Math.min(currentPage+11, 8)}</h4>
          <button className="global-button next-button" style={currentPage === 8 ? {background: "#2B3037", opacity: 0.3, cursor: "not-allowed"} : null} onClick={handleNextClick}>
            <h4>Next</h4>
          </button>
        </div>
      </div>
    </div>
  </>
  );
};

export default Body;
