import {v4} from 'node-uuid'
/*
 * action types
 */

export const ADD_TODO = 'ADD_TODO'
export const TOGGLE_TODO = 'TOGGLE_TODO'
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER'
export const SET_IMPORTANCE_FILTER = 'SET_IMPORTANCE_FILTER'
export const CHOOSE_IMPORTANCE = 'CHOOSE_IMPORTANCE'

/*
 * other constants
 */
export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

export const ImportanceFilters = {
	ALL: 'ALL',
	NORMAL: 'NORMAL',
	IMPORTANT: 'IMPORTANT',
	VERY_IMPORTANT: 'VERY_IMPORTANT'
}

export const addTodo = (text, textarea='', importance=ImportanceFilters.NORMAL, date=null) => ({
  type: 'ADD_TODO',
  id: v4(),
  text,
  textarea,
  importance,
  date
})

export const toggleTodo = index => ({
	type: 'TOGGLE_TODO', 
	index
})


export const deleteTodo = index => ({
	type: 'DELETE_TODO', 
	index
})

export const editTodo = (index, text, textarea, importance,date=null) => ({
	type: 'EDIT_TODO', 
	index,
	text,
  	textarea,
  	importance,
  	date
})

export const setVisibilityFilter = filter => ({
	type: SET_VISIBILITY_FILTER, 
	filter
})

export const setImportanceFilter = filter => ({
	type: SET_IMPORTANCE_FILTER, 
	filter
})

export const chooseImportance = filter => ({
	type: CHOOSE_IMPORTANCE, 
	filter
})
