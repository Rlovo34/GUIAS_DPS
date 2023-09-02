import React from 'react'
const Todo = ({todo,index, deleteTodo}) => {
return (
    <>

      <dic className="list">
        <h3>{todo}</h3><button className="btn-delete" onClick={()=> deleteTodo(index)}>x</button>
      </dic>

    </>

)
}
export default Todo
