import Contact from "./Component/Contact";
import Home from "./Component/Home";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Table from "./Component/Table";
import { useState } from "react";
import ContextData from "./ContextData";
import Edit from "./Component/Edit";
import AddStudent from "./Component/AddStudent";
function App() {
  const[data,setData]=useState([{name :"John",age:23,course:"MERN",batch:"November"},{name :"Stacy",age:25,course:"MERN",batch:"November"},{name :"Sofia",age:23,course:"MERN",batch:"December"},{name :"Stephen",age:22,course:"MERN",batch:"October"},{name :"Lily",age:23,course:"MERN",batch:"November"},{name :"Harry",age:26,course:"MERN",batch:"September"},{name :"Ron",age:23,course:"MERN",batch:"November"}]);
  
  return (
    <>
  <BrowserRouter>
  <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/contact' element={<Contact/>}/>
    <Route path='/student' element={
      <ContextData.Provider value={{entries:data,updateFunction: setData}}>
     <Table />
      </ContextData.Provider>
    }/>
    <Route path='/editStudent' element={
      <ContextData.Provider value={{entries:data,updateFunction:setData}}>
      <Edit />
      </ContextData.Provider>
    }/>
    <Route path='/newstudent' element={
    <ContextData.Provider value={{entries:data,updateFunction:setData}}>
      <AddStudent />
    </ContextData.Provider>
  }/>
  </Routes>
  
  </BrowserRouter>
    </>
  );
}

export default App;
