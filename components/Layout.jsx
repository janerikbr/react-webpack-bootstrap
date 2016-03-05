/* eslint-disable react/no-danger */
import React, {PropTypes} from 'react'

const Layout = React.createClass({

  displayName: 'Layout',

  propTypes: {
    content: PropTypes.shape({
      markup: PropTypes.string,
      props: PropTypes.object,
      component: PropTypes.string,
    }),
  },

  getContentMarkup() {
    return {
      __html: this.props.content.markup,
    }
  },

  getInitialData() {
    return {
      __html: JSON.stringify({
        props: this.props.content.props,
        component: this.props.content.component,
      }),
    }
  },

  render() {
    return (
      <html>
        <head>
          <title>React / webpack boilerplate</title>
          <script
            id="__react_server_side_data"
            type="application/json"
            dangerouslySetInnerHTML={this.getInitialData()}
          />
          <script src="/bundle.js"></script>
        </head>
        <body>
          <div id="content" dangerouslySetInnerHTML={this.getContentMarkup()} />
        </body>
      </html>
    )
  },
})


export default Layout
