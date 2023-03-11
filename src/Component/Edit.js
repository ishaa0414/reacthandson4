import React, { useContext }from 'react'
import { useLocation , useNavigate } from 'react-router-dom';
import ContextData from '../ContextData';
import Nav from './Nav';
import'./Style.css'

export default function Edit() {
  const DataContext=useContext(ContextData);
  const index=useLocation().state.data;
  const nav=useNavigate();
  const updateObj={
    name:DataContext.entries[index].name,
    age:DataContext.entries[index].age,
    course:DataContext.entries[index].course,
    batch:DataContext.entries[index].batch
  }
  const handleChange=(e)=>{
updateObj[e.target.name]=e.target.value;
  }
  const  handleUpdate=()=>{
    DataContext.entries[index]=updateObj
    nav(-1)
  }
  const Cancel=()=>{
    nav(-1)
  }
  return (
    <>
    <Nav/>
    <div className='Flexbox'>
      <div>
        <label>Name:</label>
<input className='newInput'placeholder={DataContext.entries[index].name}name='name' onChange={handleChange}></input>
<label>Age:</label>
<input className='newInput' placeholder={DataContext.entries[index].age} name='age' onChange={handleChange}></input>
</div>
<div>
  <label>Course:</label>
<input className='newInput' placeholder={DataContext.entries[index].course} name='course' onChange={handleChange}></input>
<label>Batch:</label>
<input className='newInput' placeholder={DataContext.entries[index].batch} name='batch' onChange={handleChange}></input>
</div>
</div>
<div className='newButton'>
   <button  className='buttonDesign'onClick={handleUpdate}>Update</button>
   <button  className='buttonDesign cancel'onClick={Cancel}>Cancel</button>
   </div>
    </>
  )
}
