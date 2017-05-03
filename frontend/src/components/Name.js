import React from 'react';

class Name extends React.Component {

	static propTypes = {
		name: React.PropTypes.string.isRequired,
		studentId: React.PropTypes.string.isRequired,
		deleteHandler: React.PropTypes.func.isRequired
	}



	render(){
		return(
			<div>
				<h1>{this.props.name}</h1>
				<button className="button" 
				onClick= {() => this.props.deleteHandler(this.props.studentId)}
				>
				Delete
				</button>
			</div>
			);
	}




}

export default Name;
