import React from 'react';
import '../stylesheets/Name.css';

class Name extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    studentId: React.PropTypes.number.isRequired,
    deleteHandler: React.PropTypes.func.isRequired,
    editHandler: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div>
          <h6 className='name'>{this.props.name}</h6>
        </div>
        <button
          className='btn btn-danger'
          onClick={() => this.props.deleteHandler(this.props.studentId)}
        >
          Delete
        </button>
        <button
          className='btn btn-success button'
          onClick={() => this.props.editHandler()}
        >
          Edit
        </button>
      </div>
    );
  }

}

export default Name;
