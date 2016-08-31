import React from 'react';

const Name = React.createClass({

  propTypes: {
    studentName: React.PropTypes.string.isRequired,
    _removeName: React.PropTypes.func.isRequired
  },

  _deleteName() {
    this.props._removeName();
  },

  render() {
    return (
      <div className='row'>
        <h3>{this.props.studentName}</h3>
        <button className='btn btn-danger'
                onClick={this._deleteName}> Delete </button>
      </div>
    );
  }

})

export default Name;
