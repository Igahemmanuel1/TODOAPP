import React from 'react'
import { AiFillEdit } from 'react-icons/ai'
import { BsFillTrashFill } from 'react-icons/bs'

const ToDo = ({task, deleteTodo, editTodo}) => {
  return (
    <div className='flex justify-between items-center bg-gray-800 text-white py-3 px-4 rounded-md mb-1 cursor-pointer'>
        <p classname='font-primary'>{task.task}</p>
        <div className='ml-3 flex items-center gap-x-4'>
          <AiFillEdit className='text-xl' onClick={() => editTodo(task.id)}/>
          <BsFillTrashFill className='text-xl' onClick={() => deleteTodo(task.id)}/>
        </div>
    </div>
  )
}

export default ToDo
