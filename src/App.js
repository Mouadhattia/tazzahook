import React from 'react';

import './App.css';
import Addtask from './Components/Addtask';
import ListTask from './Components/ListTask';

function App() {
  return (
    <div className="App">
      <div className="container">
       
          
          <ListTask />
          
     <Addtask/>
    
    </div>
    </div>
  );
}

export default App;
