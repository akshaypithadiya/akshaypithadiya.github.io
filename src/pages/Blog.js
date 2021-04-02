import React from 'react';
import Post from '../components/post/Post';

const Home = () => {
  const posts = [
    {
      id: 1,
      title: 'How to build Custom Hooks in React',
      date: 'April 3, 2021',
      link: '/blog/01-how-to-build-custom-hooks-in-react',
    },
  ];
  return (
    <div className="Blog">
      <center>
        <h2>Blog</h2>
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

export default Home;
