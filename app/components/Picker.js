import React, { Component, PropTypes } from 'react';

export default class Picker extends Component {
	render() {
		const { value, onChange, options } = this.props;
		const optionList = options.map(option => (
			<option key={option} value={option}>{option}</option>
		))
		return (
			<span>
				<select onChange={e => onChange(e.target.value)} 
								value={value}>
					{optionList}
				</select>
			</span>
		)
	}
}

Picker.propTypes = {
	value: PropTypes.string,
	onChange: PropTypes.func,
	options: PropTypes.arrayOf(
		PropTypes.string
	)
}