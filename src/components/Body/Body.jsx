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
        setPosts(data.data.children
          .slice((currentPage - 1) * 12, currentPage * 12)
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
    if (currentPage < 12) {
      setCurrentPage(currentPage + 1);
    }
  };

  const handlePrevClick = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const truncateTitle = (title) => {
    if (title.length > 120) {
      return title.slice(0, 120) + '...';
    } else {
      return title;
    }
  };

  return (
    <>
      <div className='header'>
        <div className='avatar-container'>
          <img src={Avatar} width="88" alt="" />
        </div>
        <div className='title'>
          <h1>r/data</h1>
        </div>
        <p>Welcome to the Protegrity page that features a collection of posts from r/data, a subreddit dedicated to discussing and sharing data and datasets.</p>
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
                </div>
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="button-container">
        <button className="global-button" onClick={handlePrevClick}><h4>Prev</h4></button>
        <h4>{currentPage}-12 of {Math.min(currentPage+11, 8)}</h4>
        <button className="global-button" onClick={handleNextClick}><h4>Next</h4></button>
      </div>
    </>
  );
};

export default Body;
