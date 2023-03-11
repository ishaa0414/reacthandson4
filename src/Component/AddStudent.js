import React, { useContext } from 'react'
import ContextData from '../ContextData'
import { useNavigate } from 'react-router-dom'
import Nav from './Nav';
import './Style.css'
export default function AddStudent() {
    const DataContext=useContext(ContextData);
    const nav=useNavigate();
    const addObj={
        name:" ",
        age:0,
        course:" ",
        batch:" "
    }
    const handleChange=(e)=>{
        addObj[e.target.name] = e.target.value;
    }
    const handleAdd=()=>{
        DataContext.entries.push(addObj);
        nav('/student')
    }
    const Cancel=()=>{
nav('/student')
    }
  return (
    <>
    <Nav/>
    <div className='Flexbox'>
        <div>
    <label>Name:</label>
 <input className='newInput' placeholder='Name' name='name' onChange={handleChange}/>
 <label>Age:</label>
 <input className='newInput' placeholder='Age' name='age' onChange={handleChange}/>
 </div>
 <div>
 <label>Course:</label>
 <input className='newInput' placeholder='Course' name='course' onChange={handleChange}/>
 <label>Batch:</label>
 <input className='newInput' placeholder='Batch' name='batch' onChange={handleChange}/>
 </div>
 </div>
 <div className='newButton'>
 <button className='buttonDesign'onClick={handleAdd}>Add Student</button>
 <button className='buttonDesign cancel'  onClick={Cancel}>Cancel</button>
 </div>
    </>
  )
}
