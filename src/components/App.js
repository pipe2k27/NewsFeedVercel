import React, { useEffect } from 'react';
import Search from '../containers/Search';
import News from '../containers/News';

function App() {
  return (
    <div>
      <div className="navbar">
        <h2 className="center">NewsCenter</h2>
      </div>
      <Search user="home" />
      <News />
    </div>
  );
}

export default App;
