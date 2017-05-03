import React from 'react';
import { connect } from 'react-redux';
import Immutable from 'immutable';
import '../stylesheets/App.css';
import Name from './Name';
import NameForm from './NameForm';
import { addStudent, getFeed } from '../actions/StudentActions';
import RedditFeed from './RedditFeed';

const { arrayOf, shape, number, string, func, instanceOf, oneOfType } = React.PropTypes;

class App extends React.Component {

	constructor(){
		super()
		this.state = {
			inputValue: '',
			inputError: '',
			redditjson: {},
			subreddit: 'UWaterloo'

		};
	}

	static propTypes = {
		addStudent : func.isRequired ,
		students : instanceOf(Immutable.List),
		getFeed: func.isRequired
	}

	handleInputChange(e){
		this.setState({
			inputValue: e.target.value
		});
	}

	renderNames(){
		return this.props.students.map((student) => {
			const studentId = student.get('id');
			return (
				<div key={studentId}>
				<Name
					name={student.get('name')}
					studentId = {studentId}
					deleteHandler={() => this.props.removeStudent(studentId)}
				/>
				</div>
				);
			}
		);
	}

	addHandler(e) {
		e.preventDefault();
		const { inputValue } = this.state;
		if (!inputValue) {
			this.setState({
				inputError: 'Cannot be blank'
			});
			return false;
		}
		this.props.addStudent(inputValue);
		this.setState({ inputError : '',
						inputValue : '' 
						});
		return false;
	}

	getHandler() {
		const url = 'http://www.reddit.com/r/' + this.state.subreddit + '.json';
		this.setState({redditjson : this.props.getFeed(url) });
		return false;
	}


	render(){
		return(
			<div>
			<h1> My App </h1>
			<NameForm
				value={this.state.inputValue}
				onChange={(e) => this.handleInputChange(e)}
				addHandler={(e) => this.addHandler(e)}
			/>
			{this.renderNames()}
			<RedditFeed getHandler = {() => this.getHandler()}/>
		</div>	
		);
	}
}

function mapStateToProps(state) {
  return {
 	students: state.students,
 	reddits: state.reddits
  };
}

const actionCreators = {
  addStudent, 
  getFeed
};

export default connect(mapStateToProps, actionCreators)(App);

