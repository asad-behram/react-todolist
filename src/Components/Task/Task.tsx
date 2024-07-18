import React from 'react'
import styles from "./task.module.css"
import IconButton from '@mui/material/IconButton';
import DeleteIcon from '@mui/icons-material/Delete';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import axios from 'axios';
import { AppURL } from '../../enums/AppURL';

function Task({todo}) {

  const deleteTask = () => {
    axios.delete(`${AppURL.url}/delete/${todo.id}`)
    .then((res) => {
      alert(res.data.msg)
      window.location.reload();
    })
  }

  const completeTask = () => {
    const body = {
      isCompleted: !todo.isCompleted
     }
     const headers = {
      headers: {'Content-Type': 'application/json'}
     }
  
     axios.put(`${AppURL.url}/update/${todo.id}`, body, {...headers})
     .then(() => {
      window.location.reload()
     })
     .catch((error) => console.log(error))
    }

  return (
    <div className={styles.list}>
      <div className="row">
        <div className="col-md-10">
          {todo.title}
        </div>
        <div className="col-md-2">
          <IconButton aria-label="delete" onClick={deleteTask}>
            <DeleteIcon />
          </IconButton>
          <IconButton aria-label="check" onClick={completeTask}>
            {todo.isCompleted ? (
              <CheckCircleIcon/>
            ) : (
              <CheckCircleOutlineIcon/>
            )}
          </IconButton>
        </div>
      </div>
    </div>
  )
}

export default Task