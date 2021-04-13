import React from 'react';
import Post from '../components/post/Post';

const Posts = () => {
  const posts = [
    {
      id: 1,
      title: 'How to build Custom Hooks in React',
      date: 'April 3, 2021',
      link: '/posts/01-how-to-build-custom-hooks-in-react',
    },
  ];
  return (
    <div className="Posts">
      <center>
        <h2>Posts</h2>
      </center>
      {posts.map((post) => {
        return (
          <Post
            key={post.id}
            title={post.title}
            date={post.date}
            link={post.link}
          />
        );
      })}
    </div>
  );
};

export default Posts;
