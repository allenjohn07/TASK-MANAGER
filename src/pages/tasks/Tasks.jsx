import React, { useState } from 'react';
import { useAddTasks } from '../../hooks/useAddTasks';
import { useGetUserInfo } from '../../hooks/useGetUserInfo';
import { useGetTasks } from '../../hooks/useGetTasks';
import { useDeleteTasks } from '../../hooks/useDeleteTasks';
import { useEditTasks } from '../../hooks/useEditTasks';
import './Tasks.css'

function Tasks() {
  const [task, setTask] = useState('');
  const [editedTask, setEditedTask] = useState(''); // State to hold edited task text
  const [editingTaskIndex, setEditingTaskIndex] = useState(null); // State to track the index of the task being edited
  const { addTask } = useAddTasks();
  const { isAuth, name } = useGetUserInfo();
  const { tasks } = useGetTasks();
  const { deleteTask } = useDeleteTasks();
  const { editTask } = useEditTasks();

  const handleAddTask = () => {
    if (isAuth) {
      if (task.length !== 0) {
        addTask({
          task,
        });
        setTask('');
      } else {
        alert('No task added');
      }
    } else {
      alert('Sign in to add task');
      setTask("")
    }
  };

  const handleEditClick = (index, currentTask) => {
    setEditingTaskIndex(index); // Set the index of the task being edited
    setEditedTask(currentTask); // Set the edited task text to current task text
  };

  const handleSaveEdit = (taskId) => {
    if (editedTask.trim() !== '') {
      editTask(taskId, editedTask); // Call editTask function with taskId and updated task text
      setEditingTaskIndex(null); // Clear editing task index
      setEditedTask(''); // Clear edited task text
    } else {
      alert('Task cannot be empty');
    }
  };

  return (
    <div className='task-container'>
      <h1 className='task-heading'>Tasks of {name}</h1>
      <div className='input-container gap-2'>
        <input
          value={task}
          onChange={(e) => setTask(e.target.value)}
          type="text"
          placeholder="Add Task"
        />
        <button className='add-button' onClick={handleAddTask}>Add Task</button>
      </div>
      <div className='tasks-manager'>
        {tasks.map((tsk, index) => (
          <div className='each-task' key={index}>
            {index === editingTaskIndex ? (
              <>
                <input
                  type="text"
                  value={editedTask}
                  onChange={(e) => setEditedTask(e.target.value)}
                />
                <button className='save-button' onClick={() => handleSaveEdit(tsk.id)}>Save</button>
              </>
            ) : (
              <>
                <span className='task'>{tsk.task}</span>
                <div style={{display:'flex',alignItems:'center',justifyContent:'space-between'}} className='w-100 mt-2'>
                  <button className='edit-button' onClick={() => handleEditClick(index, tsk.task)}>Edit</button>
                  <button className='delete-button' onClick={() => deleteTask(tsk.id)}>Delete</button>
                </div>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Tasks;
