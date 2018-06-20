import { combineReducers } from 'redux'
import { VisibilityFilters } from '../actions/index.js'
import { ImportanceFilters } from '../actions/index.js'


const importanceFilter = (state = ImportanceFilters.ALL, action) => {
  switch (action.type) {
    case 'SET_IMPORTANCE_FILTER':
      return action.filter
    default:
      return state
  }
}

const visibilityFilter = (state = VisibilityFilters.SHOW_ALL, action) => {
  switch (action.type) {
    case 'SET_VISIBILITY_FILTER':
      return action.filter
    default:
      return state
  }
}

const todos = (state=[], action)=>{
	switch(action.type){
		case 'ADD_TODO':
			return [
				...state,
				{
					id: action.id,
					text: action.text,
					textarea: action.textarea,
					completed:false,
					importance: action.importance,
					date: action.date
				}
			]
		case 'TOGGLE_TODO':
			return state.map( (todo) => {
				if (todo.id === action.index){
					return Object.assign({}, todo, {
			            completed: !todo.completed
			          })
				}
				return todo
			})
		case 'DELETE_TODO':
			return state.filter(todo =>
				todo.id !== action.index
		    )
		case 'EDIT_TODO':
			return state.map(todo =>
		        todo.id === action.index ?
		          { ...todo, text: action.text, textarea: action.textarea, importance:action.importance, date:action.date} :
		          todo
		      )		    
		default:
			return state
	}
}

const todoApp = combineReducers({
	todos,
	visibilityFilter,
	importanceFilter
})

export default todoApp