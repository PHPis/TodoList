import PropTypes from 'prop-types'
import React from 'react';

const ImportanceLink = ({active, children, onClick}) => (
	<button
		onClick={onClick}
		disabled={active}
		style={{
			marginLeft: '4px',
		}}
	>
	{children}
	</button>
)

ImportanceLink.propTypes = {
	active:PropTypes.bool.isRequired,
	children: PropTypes.node.isRequired,
	onClick: PropTypes.func.isRequired
}

export default ImportanceLink