import React from 'react';

import Hi from './Hi';

const names = ['jon', 'batmah'];

const App = () => (
  <div>
    {
      names.map((item, index) => (
        <Hi key={index} name={item}/>
      ))
    }
  </div>
);

export default App;