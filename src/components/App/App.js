/* eslint-disable react/jsx-no-comment-textnodes */
import React from "react";
import "./App.css";
import { Route, Routes} from "react-router-dom";
import Main from "../Main/Main";


function App() {
  return (
    <div className="App">
      <Routes> // гарантирует, что одновременно отображается только один маршрут
      <Route path='/' element={<Main/>} />
      </Routes>
      
      
    </div>
  );
}

export default App;
