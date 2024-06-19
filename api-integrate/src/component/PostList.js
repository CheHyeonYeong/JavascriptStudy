import React, { useEffect, useState } from 'react';

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  const fetchPosts = () => {
    setLoading(false);
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        // Limit the posts to the first 20
        const limitedPosts = data.slice(0, 20);
        setPosts(limitedPosts);
        setLoading(true);
      })
      .catch(error => {
        setError(error.message);
      });
  };

  useEffect(() => {
    // Fetch data from the API when the component mounts
    fetchPosts();
  }, []);

  const handleReload = () => {
    fetchPosts();
  };

  if (error) {
    return (
      <div>
        <p>Error: {error}</p>
      </div>
    );
  }

  if (!loading) return <h1>로딩중입니다..</h1>;

  return (
    <div>
      <button onClick={handleReload}>다시 불러오기</button>
      {posts.map(post => (
        <div key={post.id}>
          <p>[{post.id}] [{post.title}] [{post.userId}]</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;