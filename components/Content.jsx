import React from 'react';

export default React.createClass({
  displayName: 'Content',

  propTypes: {
    title: React.PropTypes.string.isRequired
  },
  componentDidMount() {
    console.log('Content component did mount');
  },
  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }

});
