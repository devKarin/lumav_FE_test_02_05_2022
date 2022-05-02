import React from 'react';
import './App.css';

import Layout from './components/layouts/Layout';

function App() {
  return (
    <div className='app'>
      <header className='mainheader'>
        This is my main header
      </header>
      <div className='layout'>
        <Layout />
      </div>

    </div>
  );
}

export default App;
