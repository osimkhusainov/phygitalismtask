import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("./data.json")
      .then(response => response.json())
      .then(item => {
        console.log(item);
        setData(item.data);
      })
      .catch(error => console.error(error));
  }, []);

  return (
    <div className="App ml-5 mt-5">
      {data.map((item, index) => (
        <ul class="list-group list-group-horizontal mb-2" style={{width: "25rem"}}>
          <li key={index} className="list-group-item">{item.name}</li>
          <li key={index} className="list-group-item">{item.type}</li>
          <li key={index} className="list-group-item">{item.time}</li>
        </ul>
      ))}
    </div>
  );
}

export default App;
