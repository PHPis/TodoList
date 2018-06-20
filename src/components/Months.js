import React, {Component} from 'react';
import PropTypes from 'prop-types'

export default class Months extends Component{
	constructor(props) {
	    super(props);
	    this.state = {value: this.props.value};
	    this.handleChange = this.handleChange.bind(this);
	  }
	static propTypes = {
		value: PropTypes.number.isRequired
	}
	handleChange(event) {
		this.setState({value: event.target.value});
		// this.props.value = event.target.value
	}
	
	getValue() {
		return this.state.value
	}

	render(){

		console.log(this.props.value)
		return(
			<select value={this.state.value} onChange={this.handleChange}>
				<option value='1'>January</option>
				<option value='2'>February</option>
				<option value='3'>March</option>
				<option value='4'>April</option>
				<option value='5'>May</option>
				<option value='6'>June</option>
				<option value='7'>July</option>
				<option value='8'>August</option>
				<option value='9'>September</option>
				<option value='10'>October</option>
				<option value='11'>November</option>
				<option value='12'>December</option>
			</select>
		)
	}
	
}