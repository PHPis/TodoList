import React from 'react';
import ReactDOM from 'react-dom';
import '../style.css';

export default class TodoTextInput extends React.Component{
	render() {
		return (
				<input 
					type="text"
        			placeholder="What needs to be done?"
				/>
			)
	}
}