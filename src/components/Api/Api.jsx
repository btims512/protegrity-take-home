// import { useState, useEffect } from "react";

// function RedditData() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetch("https://www.reddit.com/r/data.json")
//       .then((response) => response.json())
//       .then((data) => {
//         setPosts(data.data.children
//           .slice(0, 12)
//           .map((post) => ({
//             title: post.data.title,
//             num_comments: post.data.num_comments,
//             author_fullname: post.data.author_fullname
//           }))
//         );
//       });
//   }, []);

//   return (
//     <div>
//       {posts.map((post, index) => (
//         <div key={index}>
//           <h2>{post.title}</h2>
//           <p>Number of Comments: {post.num_comments}</p>
//           <p>Author Fullname: {post.author_fullname}</p>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RedditData;
