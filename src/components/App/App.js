/* eslint-disable react/jsx-no-comment-textnodes */
import {React,useState} from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";


function App() {
  // массив целей
const [purpose, setPrupose] = useState([]);
// удаление задачи
const deleteTask =()=> {

}

//добавление задачи
const addTask =(input)=> {
if(input) {
  const newItem = {
    id: Math.random().toString(36).substring(2,9),
    task: input,
    complate: false
  }
  setPrupose([...purpose, newItem])
  console.log(purpose.length)
}
}

const toggle = () => {

}

  return (
    <div className="App">
      <Routes> // гарантирует, что одновременно отображается только один маршрут
      <Route path='/' element={<Main addTask={addTask}/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
