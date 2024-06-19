import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        return response.json();
      })
      .then(data => {
        // Limit the posts to the first 20
        const limitedPosts = data.slice(0, 20);
        setPosts(limitedPosts);
      })
      .catch(error => {
        setError(error.message);
      });
  }, []);

  if (error) {
    return <p>Error: {error}</p>;
  }

  if (error) return <div>에러가 발생했습니다.</div>;

  return (
    <div>
      {posts.map(post => (
        <div key={post.id}>
          <p>[{post.id}] [{post.title}] [{post.userId}]</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;
