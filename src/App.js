import React from 'react';
import { Admin, Resource } from 'react-admin';
import { UserList } from './users';

import jsonServerProvider from 'ra-data-json-server';

import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div>
      <Admin dataProvider={dataProvider}>
        <Resource name="users" list={UserList} />
      </Admin>
    </div>
  );
}

export default App;
