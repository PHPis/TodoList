import React from 'react';
import PropTypes from 'prop-types'
import Todo from './Todo.js'

const ToDoList = ({ todos, actions }) => (
		<ul style={{padding:'0'}}>
			{
				todos.map(todo => 
		      	<Todo key={todo.id} todo={todo} {...actions}/>
		    )}
		</ul>
	)

ToDoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired,
      textarea: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  actions: PropTypes.object.isRequired
  // toggleTodo: PropTypes.func.isRequired,
  // deleteTodo: PropTypes.func.isRequired
}
export default ToDoList