import React from 'react';

const Content = React.createClass({
  displayName: 'Content',

  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  componentDidMount() {
    console.log('Content component did mount'); // eslint-disable-line no-console
  },

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  },
});


export default Content;
