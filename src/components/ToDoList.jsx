import React, { useState } from 'react';
import Form from './Form';
import {v4 as uuidv4 } from 'uuid';
import ToDo from './ToDo';
import Edit from './Edit';
import DateTime from './DateTime';
uuidv4()

const ToDoList = () => {
    const [todoValue, setTodo] = useState([]);

    const createTodo = todo => {
        setTodo([...todoValue, { id: uuidv4(), task: todo, isEditing: false }]);
    }
 
    const deleteTodo = id => {
        setTodo(todoValue.filter(todo => todo.id !== id))
    }

    const editTodo = id => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo, isEditing:!todo.isEditing}: todo))
    }

    const editTask = (task, id) => {
        setTodo(todoValue.map(todo => todo.id === id ? {...todo, task, isEditing: !todo.isEditing} : todo))
    }

    return (
      <div className='bg-gray-700 p-8 h-screen'>
        <DateTime />
        <header className='text-white text-5xl text-center'>ToDo List</header>
        <div className="mt-8 flex flex-col items-center justify-center">
          <Form createTodo={createTodo} />
          {todoValue.map((todo, idx) =>
            todo.isEditing ? (
              <Edit key={idx} editTodo={editTask} task={todo} />
            ) : (
              <ToDo
                task={todo}
                key={idx}
                deleteTodo={deleteTodo}
                editTodo={editTodo}
              />
            )
          )}
        </div>
      </div>
    );
}

export default ToDoList;
