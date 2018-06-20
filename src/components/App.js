import React from 'react';
import '../style.css';


import AddTodo from '../containers/AddTodo.js'
import VisibilityFilter from '../containers/VisibilityFilter.js'
import Footer from './Footer.js'
import Importance from './Importance.js'

function App () {
	return (
			<div className="shopping-list">
		        <h1>TODO LIST</h1>
		        <div>
			        <AddTodo />
			        <div style={{
						float:'left',
						width: '50%'
					}}>
				        <Footer />
				        <Importance />
				        <VisibilityFilter />
			        </div>		        
				</div>
		    </div>
			)
	}
export default App