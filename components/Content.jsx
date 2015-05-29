import React from 'react';

class Content extends React.Component {

  componentDidMount() {
    console.log('Content component did mount');
  };

  render() {
    return (
      <div>
        <h1>{this.props.title}</h1>
      </div>
    );
  }

}

Content.displayName = 'Content';
Content.propTypes = {
  title: React.PropTypes.string.isRequired
};

export default Content;
