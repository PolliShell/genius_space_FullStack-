import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [item, setItem]=useState([]);

  const onClickHandler=()=>{
    const newElement = "new element";
    const updatedElement=[...item, newElement];
    setItem(updatedElement);
  }

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <ul>
         {item.map((element,index)=><li>{element}{index}</li>)}
       </ul>
        <button onClick={onClickHandler}>Add new element</button>
      </header>
    </div>
  );
}

export default App;
