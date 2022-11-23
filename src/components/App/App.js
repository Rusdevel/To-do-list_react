/* eslint-disable react/jsx-no-comment-textnodes */
import {React,useState} from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";


function App() {
  // массив целей
const [purposes, setPruposes] = useState([]);
// удаление задачи
const deleteTask =(id)=> {
setPruposes([...purposes.filter((pupose) => pupose.id !== id)]);
}

//добавление задачи
const addTask =(input)=> {
if(input) {
  const newItem = {
    id: Math.random().toString(36).substring(2,9),
    task: input,
    complete: false
  }
  setPruposes([...purposes, newItem])
  console.log(purposes.length)
}
}

const toggleTask = (id) => {
setPruposes([
  ...purposes.map((prupose)=>
  purposes.id ===id ? {...prupose, complete: !prupose.complete} : {...prupose})
])
}

  return (
    <div className="App">
      <Routes> // гарантирует, что одновременно отображается только один маршрут
      <Route path='/' element={<Main addTask={addTask}
      toggleTask={toggleTask}
      deleteTask={deleteTask}
      purposes={purposes}
      
      />} />
      </Routes>
      
      
    </div>
  );
}

export default App;
