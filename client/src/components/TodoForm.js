import React, { Component } from 'react';

class TodoForm extends Component {

  state = { title: '', complete: false }

  handleChange = (e) => {
    const { name, value } = e.target
    this.setState({ [name]: value })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addTodo(this.state)
    this.setState({ title: '' })
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input 
          name='title'
          value={this.state.title}
          onChange={this.handleChange}
          required
          placeholder='Add your todo here'
        />
        <input
          type='submit'
        />
      </form>
    )
  }
}

export default TodoForm;