import React from 'react';
import { Admin } from 'react-admin';
import jsonServerProvider from 'ra-data-json-server';

import './App.css';

const dataProvider = jsonServerProvider('https://jsonplaceholder.typicode.com');

function App() {
  return (
    <div>
      <Admin dataProvider={dataProvider} />
    </div>
  );
}

export default App;
