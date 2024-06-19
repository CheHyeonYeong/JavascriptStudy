import React from 'react';
import {useAsync} from './useAsync';
import { usePostsDispatch, usePostsState} from './PostsContext';

// contextAPI를 활용해서 동작하게 만들어주세요
// createContext를 사용하여 PostsStateContext, PostsDispatchContext
// 1. reducer 생성
// 2. 초기값 설정
// 3. Context API 생성
// 4. Provider 생성 및 설정
// 5. useContext 사용하여 불러오기

const Posts = () => {
    const { loading, data: posts, error } = usePostsState();
    const fetchPosts = usePostsDispatch();


  if (error) {
    return (
      <div>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  if (loading) {
    return <h1>로딩중입니다..</h1>;
  }

  return (
    <div>
      <button onClick={fetchPosts}>다시 불러오기</button>
      {posts && posts.map(post => (
        <div key={post.id}>
          <p>[{post.id}] [{post.title}] [{post.userId}]</p>
        </div>
      ))}
    </div>
  );
};

export default Posts;