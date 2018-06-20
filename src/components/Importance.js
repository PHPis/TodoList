import React from 'react';
import {ImportanceFilters} from '../actions/index.js'
import ImportantFilterLink from '../containers/ImportantFilterLink.js'

const Importance = () => (
	<div>
		<ImportantFilterLink filter={ImportanceFilters.ALL}>
			All
		</ImportantFilterLink>
		<ImportantFilterLink filter={ImportanceFilters.NORMAL}>
			Normal
		</ImportantFilterLink>
		<ImportantFilterLink filter={ImportanceFilters.IMPORTANT}>
			IMPORTANT
		</ImportantFilterLink>
		<ImportantFilterLink filter={ImportanceFilters.VERY_IMPORTANT}>
			VERY_IMPORTANT
		</ImportantFilterLink>
	</div>
	)

export default Importance