import React from 'react';
import { Admin, Resource, ListGuesser } from 'react-admin';

import './App.css';

import { UserList } from './components/users';
import { PostList } from './components/posts';

import jsonServerProvider from 'ra-data-json-server';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
        <Resource name="posts" list={PostList} />
      </Admin>
    </div>
  );
}

export default App;
