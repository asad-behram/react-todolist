import React, { useEffect, useState } from 'react'
import { AppURL } from '../../enums/AppURL';
import axios from 'axios';
import Task from '../Task/Task';

function TaskList() {
  const [todolists, setTodolist] = useState([]);

  useEffect(() => {
    axios.get(`${AppURL.url}/gets`).then((res) => {
      setTodolist(res.data)
    }).catch(err => {
      console.log(err)
    })
  },[])

  return (
    <div className='container'>
      {todolists.map((todo) => (
        <Task todo = {todo}/>
      ))}
    </div>
  )
}

export default TaskList