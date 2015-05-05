import React from 'react';

export default React.createClass({
  displayName: 'Layout',
  propTypes: {
    content: React.PropTypes.shape({
      markup: React.PropTypes.string,
      props: React.PropTypes.object
    })
  },
  getContentMarkup() {
    return {__html: this.props.content.markup}
  },
  getInitialData() {
    return {
      __html: JSON.stringify({
        props: this.props.content.props,
        component: this.props.content.component
      })
    };
  },
  render() {
    return (
      <html>
      <head>
        <title>React / browserify boilerplate</title>
        <script
          id="__react_server_side_data"
          type="application/json"
          dangerouslySetInnerHTML={this.getInitialData()}
          />
        <script src="/bundle.js"></script>
      </head>
      <body>
        <div id="content" dangerouslySetInnerHTML={this.getContentMarkup()}/>
      </body>
      </html>
    );
  }

});
