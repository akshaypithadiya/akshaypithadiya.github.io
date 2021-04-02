import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Post01 from './Post01';
import NotFound from '../../components/error/NotFound';

const Posts = () => {
  return (
    <>
      <Switch>
        <Route
          exact
          path="/blog/01-how-to-build-custom-hooks-in-react"
          component={Post01}
        />
        <Route component={NotFound} status={404} />
      </Switch>
    </>
  );
};
export default Posts;
