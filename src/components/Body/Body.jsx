import { useState, useEffect } from "react";

import "./Body.css";
import Avatar from "../../images/snoo.png";
import Spinner from "../../images/spinner.gif";

const Body = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      `https://www.reddit.com/r/data.json?count=${
        (currentPage - 1) * 12
      }&limit=96`
    )
      .then((response) => response.json())
      .then((data) => {
        setPosts(
          data.data.children
            .slice((currentPage - 1) * 12, currentPage * 12)
            .map((post) => ({
              title: post.data.title,
              num_comments: post.data.num_comments,
              author: post.data.author,
              url: post.data.url,
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
      if (window.innerWidth <= 767) {
        window.scrollTo(0, 0);
      }
    }
  };

  return (
    <>
<div className="header">
  <div className="avatar-container">
    <img
      src={Avatar}
      width="95"
      alt="Reddit Mascot with green eyes"
      aria-label="Reddit mascot"
    />
  </div>
</div>
{isLoading ? (
  <div>
  <div className="flex-grid-header">
    <div className="title-container">
      <div className="title">
        <h1>r/data</h1>
        </div>
          <p>
          Welcome to the Protegrity page that features a collection of posts
          from r/data, a subreddit dedicated to discussing and sharing data
          and datasets.
          </p>
    </div>
  </div>
    <div className="loading">
      <img src={Spinner} alt="loading..." />
    </div>
  </div>
  
) : (
  <div className="flex-grid">
    <div className="flex-container"></div>
    <div className="alignment">
      <div className="grid-container-mobile">
        {isLoading ? (
          <div>
            <div className="loading">
              <img src={Spinner} alt="loading..." />
            </div>
          </div>
        ) : (
          posts.map((post, index) => (
            // mobile cards //


            <div className="cad-container">

            <div className="card" key={index}>
              <div>
                <div className="middle-row">
                  <p>u/{post.author}</p>
                </div>
                <div className="top-row">
                  <h3>{post.title}</h3>
                </div>
              </div>
              <div className="bottom-row">
                <p>
                  {post.num_comments}{" "}
                  {post.num_comments === 1 ? "Comment" : "Comments"}
                </p>
                <a href={post.url} target="_blank" rel="noreferrer">
                  <button
                    className="global-button"
                    aria-label="View post on Reddit"
                  >
                    <h4>View Post</h4>
                  </button>
                </a>
              </div>
            </div>
            </div>
            
          ))
        )}
      </div>
      <div className="container-alignment">
        <div className="title-container">
          <div className="title">
            <h1>r/data</h1>
          </div>
          <p>
            Welcome to the Protegrity page that features a collection of posts
            from r/data, a subreddit dedicated to discussing and sharing data
            and datasets.
          </p>
        </div>
      </div>
      <div className="grid-container">
        {posts.map((post, index) => (
          // desktop cards //
          <div className="grid-item" key={index}>
            <div className="row-top">
              <h3>{post.title}</h3>
              <p aria-label="username">u/{post.author}</p>
            </div>
            <div className="row-bottom">
              <p>
                {post.num_comments}{" "}
                {post.num_comments === 1 ? "Comment" : "Comments"}
              </p>
              <a href={post.url} target="_blank" rel="noreferrer">
                <button
                  className="global-button"
                  aria-label="View this post on Reddit"
                >
                  <h4>View Post</h4>
                </button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
)}
<div>
  <div className="flex-grid-bottom">
    <div className="button-container">
      <button
        className="global-button prev-button"
        aria-label="Previous page button"
        onClick={handlePrevClick}
        style={
          currentPage === 1
            ? { background: "#2B3037", opacity: 0.3, cursor: "not-allowed" }
            : null
        }
        disabled={currentPage === 1}
      >
              <h4 style={currentPage === 1 ? { color: "white" } : null}>
                Prev
              </h4>
            </button>
            <h4>
              page {currentPage} of {Math.min(currentPage + 11, 8)}
            </h4>
            <button
              className="global-button next-button"
              aria-label="Next page button"
              style={
                currentPage === 8
                  ? {
                      background: "#2B3037",
                      opacity: 0.3,
                      cursor: "not-allowed",
                    }
                  : null
              }
              onClick={handleNextClick}
            >
              <h4>Next</h4>
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Body;
