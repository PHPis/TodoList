import React, {Component} from 'react';
import PropTypes from 'prop-types'
import TodoDate from '../components/TodoDate.js'
import Months from '../components/Months.js'

export default class Todo extends Component{
	static propTypes = {
		todo: PropTypes.object.isRequired,
		toggleTodo: PropTypes.func.isRequired,
		deleteTodo: PropTypes.func.isRequired,
		editTodo: PropTypes.func.isRequired
	}
	state = {
	    editing: false,
	    text: this.props.todo.text,
	    textInArea:this.props.todo.textarea,
	    Important: this.props.todo.importance,
	    day: '0',
	    month: this.props.todo.date? (new Date(this.props.todo.date).getMonth())+1: '1',
	    year:  this.props.todo.date? (new Date(this.props.todo.date).getFullYear())-2000: '0'
	}

	editAction = () => {
		if (this.props.todo.date !== null)
		 	{this.setState({day: new Date(this.props.todo.date).getDate()})} 
		else{
		 		this.setState({day: '0'})
		 	}
		this.setState({editing:true})
	}

	saveAction = () => {
		let dt
		if (this.state.day!=='0' && this.state.year!=='0'){
			dt = new Date( (2000+(+this.state.year))+'-'+this.state.month+'-'+this.state.day)
		} else {
			dt = null
		}
		
		this.setState({editing:false})
		this.props.editTodo(this.props.todo.id, this.state.text, this.state.textInArea, this.state.Important,dt)
	}

	handleChangeDescription = e => {
	    this.setState({ textInArea: e.target.value })
	}

	handleChangeTask = e =>{
		 this.setState({ text: e.target.value })
	}

	handleChangeImportant = e =>{
		 this.setState({ Important: e.target.value })
	}
	handleChangeDay = e =>{
		e.target.value? this.setState({ day: e.target.value }):this.setState({ day: '0' })
	}
	handleChangeYear= e =>{
		e.target.value? this.setState({ year: e.target.value }):this.setState({ year: '0' })
	}
	render(){
		const { todo, toggleTodo, deleteTodo} = this.props
		// this.state.textInArea = todo.textarea
		let element
		
		if (this.state.editing){
			element= (
				<div key={todo.id+'element'}>
					<input  
						value={this.state.text}
						onChange = {this.handleChangeTask}
					/>
					<textarea rows='3' cols='20' value={this.state.textInArea} onChange = {this.handleChangeDescription}></textarea>
					<select value={this.state.Important} onChange = {this.handleChangeImportant}>
						<option key={todo.id+"NORMAL"} value='NORMAL'>Normal</option>
						<option key={todo.id+"IMPORTANT"} value='IMPORTANT'>Important</option>
						<option key={todo.id+"VERY_IMPORTANT"} value='VERY_IMPORTANT'>Very_Important</option>
					</select>
					<p/>
					Date: 
					<input onChange={this.handleChangeDay} style={{width:'30px'}} value={this.state.day}  type="text" pattern='[0-9]{1,2}'/>
					<Months value={+this.state.month}/>
					20<input onChange={this.handleChangeYear} style={{width:'30px'}} value={this.state.year}  type="text" pattern='[0-9]{1,2}'/>
					<button onClick={this.saveAction} >Сохранить</button>
				</div>
			)
		} else {
			let check 
			if (todo.date == null) {
								check = false
							} else{
								check = true
							}

			element = (
				<div key={todo.id+'element'}>
					<input className="toggle"
				        type="checkbox"
						checked={todo.completed}
						onChange={()=>toggleTodo(todo.id)}
					/>
					{todo.text}
					<p>
						{todo.textarea}
					</p>
						<TodoDate date={new Date(todo.date)} check = { check }/>
					<p/>
					<button onClick={this.editAction} >редактировать</button>
				</div>
			)
		}

		return(
			<li key={todo.id+'Li'}
				// onClick = {()=>toggleTodo()}
				style = {{
					listStyle: "none",
					border: '2px solid black'
				}}
			>
				{element}
				<button type='button' onClick={()=>deleteTodo(todo.id)}>удалить</button>

			</li>
			)
	}
}

// const Todo= ({completed, text, toggleTodo, deleteTodo}) =>(
// 	<li
// 		onClick = {toggleTodo}
// 		style = {{
// 			listStyle: "none",
// 			textDecoration: completed ? 'line-through' : 'none'
// 		}}
// 	>
// 	<input className="toggle"
//         type="checkbox"
// 		checked={completed}
// 	/>
// 	{text}
// 	<button click={deleteTodo} >редактировать</button>
// 	<button>удалить</button>
// 	</li>
// )

// Todo.propTypes = {
//   toggleTodo: PropTypes.func.isRequired,
//   completed: PropTypes.bool.isRequired,
//   text: PropTypes.string.isRequired,
//   deleteTodo: PropTypes.func.isRequired
// }
// export default Todo