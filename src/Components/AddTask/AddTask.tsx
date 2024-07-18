import React, { useState } from 'react'
import "./AddTask.module.css"
import { AppURL } from '../../enums/AppURL';
import axios from 'axios';

function AddTask() {
  const [inputTask, setTask] = useState()

  const handleInputChange = (event) => {
    setTask(event.target.value);
  };
  const addTask = () => {
   const body = [{
    title: inputTask,
    isCompleted: false
   }]
   const headers = {
    headers: {'Content-Type': 'application/json'}
   }

   axios.post(`${AppURL.url}/create`, body, {...headers})
   .then(() => {
    window.location.reload();
   })
   .catch((error) => console.log(error))
  }

  return (
    <div className='container'>
      <div className="row">
        <div className="col-md-10">
          <input 
            type='text' 
            placeholder='Add Task'
            value={inputTask}
            onChange={handleInputChange}
          />
        </div>
        <div className="col-md-2">
        <button type="button" className="btn btn-dark" onClick={addTask}>Add</button>
        </div>
      </div>
    </div>
  )
}

export default AddTask