import { connect } from 'react-redux'
import * as TodoActions from '../actions/index.js'
// import {deleteTodo} from '../actions/index.js'
import { bindActionCreators } from 'redux'
import ToDoList from '../components/ToDoList.js'
import { VisibilityFilters } from '../actions/index.js'
import {ImportanceFilters} from '../actions/index.js'

const getVisibleTodos=(todos, filter) => {
	switch(filter) {
		case VisibilityFilters.SHOW_ALL:
			return todos
		case VisibilityFilters.SHOW_COMPLETED:
			return todos.filter(t=>t.completed)
		case VisibilityFilters.SHOW_ACTIVE:
			return todos.filter(t=>!t.completed)
		default:
			throw new Error('Unknown filter: ' + filter)
	}
}

const getImportanceTodos=(todos, importantFilter) => {
	switch(importantFilter) {
		case ImportanceFilters.ALL:
			return todos
		case ImportanceFilters.NORMAL:
			return todos.filter(t=>t.importance===ImportanceFilters.NORMAL)
		case ImportanceFilters.IMPORTANT:
			return todos.filter(t=>t.importance===ImportanceFilters.IMPORTANT)
		case ImportanceFilters.VERY_IMPORTANT:
			return todos.filter(t=>!t.importance===ImportanceFilters.VERY_IMPORTANT)
		default:
			throw new Error('Unknown filter: ' + importantFilter)
	}
}

const mapStateToProps = state => ({
		todos: getImportanceTodos(getVisibleTodos(state.todos, state.visibilityFilter), state.importanceFilter)
})

const mapDispatchToProps = dispatch => ({
		 actions: bindActionCreators(TodoActions, dispatch)

		// deleteTodo: id=> dispatch(deleteTodo(id)),
		// toggleTodo: id=> dispatch(toggleTodo(id))
		
} )

 export default connect(mapStateToProps, mapDispatchToProps)(ToDoList)
