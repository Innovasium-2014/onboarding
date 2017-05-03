import React from 'react';

class Name extends React.Component {

  static propTypes = {
    name: React.PropTypes.string.isRequired,
    studentId: React.PropTypes.number.isRequired,
    deleteHandler: React.PropTypes.func.isRequired
  }

  render() {
    return (
      <div>
        <div>
          <h6>{this.props.name}</h6>
        </div>
        <button
          className='btn btn-danger'
          onClick={() => this.props.deleteHandler(this.props.studentId)}
        >
          Delete
        </button>
      </div>
    );
  }

}

export default Name;
