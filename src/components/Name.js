import React from 'react';

const Name = React.createClass({
  propTypes: {
    studentName: React.PropTypes.string.isRequired,
    onRemoveName: React.PropTypes.func.isRequired
  },

  deleteName() {
    this.props.onRemoveName();
  },

  render() {
    return (
      <div className='row'>
        <h3>{this.props.studentName}</h3>
        <button
          className='btn btn-danger'
          onClick={this.deleteName}
        >
          Delete
        </button>
      </div>
    );
  }
});

export default Name;
