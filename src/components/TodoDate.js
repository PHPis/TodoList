import React from 'react';
import PropTypes from 'prop-types'

const TodoDate = ({date, check}) =>
	{
		let dt=''
		let options ={
			day: 'numeric',
			month: 'long',
			year:'numeric'
		}
		// {console.log('is null - '+check)}
		// console.log('date = '+date)
		let curDate
		if (check !== false){
			 curDate = new Date(date)
		} else {
			curDate = 'Invalid Date'
		}
		
		// console.log('curDate = '+curDate)
		if (curDate!=='Invalid Date'){
			var today = new Date()
			let now = new Date(today.getFullYear(), today.getMonth(), today.getDate()).valueOf()
			if (curDate<now){
				dt=curDate.toLocaleString("en-US", options)
				return(
					<div style={{border:'2px solid red'}}>
						{dt}
					</div>
				)
			} else {
				dt = curDate.toLocaleString("en-US", options)
				return(
					<div >
						{dt}
					</div>
				)
			}
		}else{
			return	'-----'
		}
	}

TodoDate.propTypes = {
	date:PropTypes.instanceOf(Date).isRequired,
	check: PropTypes.bool.isRequired
}
 export default TodoDate