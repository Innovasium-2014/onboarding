import React from 'react';
import '../stylesheets/NameForm.css';

class NameForm extends React.Component {
  constructor(){
  	super()
  	this.state = {
  		value: ''
  	};
  }
	static propTypes = {
		onChange: React.PropTypes.func.isRequired,
		value: React.PropTypes.string.isRequired,
		addHandler: React.PropTypes.func.isRequired
	}




  render(){
  		return(
  			<form onSubmit = {this.props.addHandler}>
  				<input type="text" className= "text-box" onChange = {this.props.onChange} value = {this.props.value}/>
  			</form>
  }
}

export default NameForm;
