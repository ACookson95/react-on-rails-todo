import React, { Component} from 'react';
import axios from 'axios';
import TodoForm from './components/TodoForm';
import List from './components/List';

class App extends Component {

  state = { todos: [] }

  componentDidMount() {
    // make api call to the rails side to get all the todos
    axios.get('/api/todos')
      .then( res => {
        this.setState({ todos: res.data })
      })
      .catch( err => {
        console.log(err)
      })
  }

  addTodo = (todo) => {
    // make api call to add a todo into the rails side 
    axios.post('/api/todos', todo)
      .then( res => {
        // add the todo into the state
        const { todos } = this.state
        this.setState({ todos: [ ...todos, res.data ]})
      })
      .catch( err => {
        console.log(err)
      })
  }

  updateTodo = () => {
    // make api call to update a todo in the rails side
    // update todo in the state
  }

  deleteTodo = () => {
    // make api call to delete a todo on the rails side
    // delete the todo from our state
  }

  render() {
    return(
      <>
        <TodoForm addTodo={this.addTodo} />
        <List todos={this.state.todos} />
      </>
    )
  }
}

export default App;