import React from 'react';
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Months from '../components/Months.js'


const AddTodo = ({ dispatch }) => {
	let input
	let textarea =''
	let select
	let date = new Date()
	let options ={
		day: 'numeric',
		month: 'long',
		year:'numeric'
	}
	let selectedMonth='0'
	let day='1'
	let year='1'
	let valueOne = +1
	return (
		
		<div style={{
			float:'left',
			width: '30%'
		}}>
		{
			// console.log(date.toLocaleString("ru", options))
			
		}
			<div>Today : {date.toLocaleString("en-US", options)}</div>
			<form
				onSubmit={e => {
					e.preventDefault()
					if (!input.value.trim()) {
						return
					}
					var d = new Date((2000+(+year.value))+'-'+selectedMonth.state.value+'-'+day.value)
					dispatch(addTodo(input.value, textarea.value, select.value, d))
					input.value = ''
					textarea.value = ''
				}}
			>
				<input placeholder='Task'
					ref={node => input = node}
				/>
				<p/>
				<textarea rows='3' cols='20' placeholder='Description' ref={node => textarea = node}></textarea>
				<p/>
					<select ref={node => select = node}>
						<option value='NORMAL'>Normal</option>
						<option value='IMPORTANT'>Important</option>
						<option value='VERY_IMPORTANT'>Very_Important</option>
					</select>
				<p/>

				<p>
					Date: 
					<input style={{width:'30px'}} ref={node => day = node} type="text" pattern='[0-9]{1,2}'/>
					<Months ref={value => selectedMonth = value} value={valueOne}/>
					20<input style={{width:'30px'}} ref={node => year = node} type="text" pattern='[0-9]{1,2}'/>
				</p>

				<button type="submit">
					Add Todo
				</button>
			</form>
		</div>
		)
	} 

export default connect()(AddTodo)