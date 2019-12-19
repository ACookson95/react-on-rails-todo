import React from 'react';
const Todo = ({ id, title, complete }) => (
  <>
    <h1>{title}</h1>
    <p>
      complete:
      { complete ? 'Yes' : 'No' }
    </p>
  </>
)
export default Todo;