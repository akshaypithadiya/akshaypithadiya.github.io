import React from 'react';
import './post-container.scss';

const Post01 = () => {
  return (
    <div className="post-container">
      <h1>How to create Custom Hooks in React</h1>
      <span>
        <a href="/">
          <u>Akshay Pithadiya</u>
        </a>{' '}
        &middot; <i style={{ color: '#8b949e' }}>3 April, 2021</i>
      </span>
      <br />
      <br />
      <img
        src="/posts/01/custom_hooks.png"
        width="100%"
        className="code-snippet"
      />
      <br />
      <h2>What are Hooks in React?</h2>
      <p>
        So before starting with what are custom hooks, I would like to explain
        what are hooks in react and how are they useful.{' '}
        <i>
          Hooks are functions that let you “hook into” React state and lifecycle
          features from function components. Hooks don’t work inside classes -
          they let you use React without classes.
        </i>{' '}
        So with hooks what you can do is extract stateful logic from a component
        so it can be tested independently and reused.
      </p>
      <br />
      <h2>What are Custom Hooks in React?</h2>
      <p>
        Now coming to what are custom hooks, as name suggests we can create our
        own hooks. React provides us with hooks like useState, useEffect,
        useContext, etc. But these hooks aren't enough. Most of the time we need
        to write custom hooks which we can reuse in our application.
      </p>
      <br />
      <h2>Why do we need to write Custom Hooks?</h2>
      <p>
        <i>
          Hooks allow you to reuse stateful logic without changing your
          component hierarchy. This makes it easy to share Hooks among
          components.
        </i>{' '}
        If you have two components sharing same logic, instead of writing the
        same logic in both the components what you can do is create a custom
        hook and use it in both the components.
      </p>
      <h2>Building Cusom Hooks with example</h2>
      <p>
        Lets say we have to built a component which makes a api call to github
        users api and fetches list of users, for this what we can do is create a
        useFetchUsers hook which takes api url as input and returns three
        things:
        <br />- users => list of user objects
        <br />- loading => returns loading state while data is getting fetched
        <br />- error => returns error if there was any error during api call{' '}
        <br />
        We can use useFetchUsers hooks in our App component
      </p>
      <span className="file-name">App.js</span>
      <a href="/posts/01/1.png" alt="App">
        <img src="/posts/01/1.png" width="100%" className="code-snippet" />
      </a>
      <br />
      <br />
      <span className="file-name">useFetchUsers.js</span>
      <a href="/posts/01/2.png" alt="useFetchUsers">
        <img src="/posts/01/2.png" width="100%" className="code-snippet" />
      </a>
      <h2>Conclusion</h2>
    </div>
  );
};

export default Post01;
