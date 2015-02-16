const React = require('react');

module.exports = React.createClass({

  render() {
    return (
      <html>
        <head>
          <script src="/bundle.js"></script>
        </head>
        <h1>React / browserify boilerplate</h1>
      </html>
    );
  },

  componentDidMount() {
    console.log('Component did mount');
  }

});