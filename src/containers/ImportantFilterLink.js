import { connect } from 'react-redux'
import { setImportanceFilter } from '../actions'
import ImportanceLink from '../components/ImportanceLink.js'
// console.log(ownProps.filter)
const mapStateToProps = (state, ownProps) => ({
	active: ownProps.filter === state.importanceFilter	
})

const mapDispatchToProps = (dispatch, ownProps) => ({	
	onClick: () => dispatch(setImportanceFilter(ownProps.filter))
})

export default connect(
	mapStateToProps,
	mapDispatchToProps
	)(ImportanceLink)