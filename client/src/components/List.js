import React from 'react';
import Todo from './Todo';
const List = ({ todos }) => (
  <>  
  { todos.map( todo => 
    <Todo
      key={todo.id}
      {...todo}
    />
  )}
  </>
)
export default List;