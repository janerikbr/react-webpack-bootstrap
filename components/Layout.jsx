const React = require('react');

module.exports = React.createClass({

  displayName: 'Layout',

  componentDidMount() {
    console.log('Component did mount');
  },

  render() {

    return (
        <html>
          <head>
            <title>React / browserify boilerplate</title>
            <script
                id="__react_initial_props"
                type="application/json"
                dangerouslySetInnerHTML={{__html: JSON.stringify(this.props)}}
            />
            <script src="/bundle.js"></script>
          </head>
          <body>
            <h1>{this.props.title}</h1>
          </body>
        </html>
    );
  }

});