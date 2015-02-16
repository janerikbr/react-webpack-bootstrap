var React = require('react');

module.exports = React.createClass({

  render() {
    return (
        <html>
          <head>
            <script src="/bundle.js"></script>
          </head>
          <h1>LOL</h1>
        </html>
    );
  },

  componentDidMount() {
    console.log('ostepops er digg');
  }

});