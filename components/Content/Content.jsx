import React from 'react'

// eslint-disable-next-line no-process-env
if (process.env.BROWSER) {
  require('./Content.css')
}

const Content = React.createClass({

  displayName: 'Content',

  propTypes: {
    title: React.PropTypes.string.isRequired,
  },

  componentDidMount() {
    console.log('Content component did mount') // eslint-disable-line no-console
  },

  render() {
    return (
      <div className="content">
        <h1>{this.props.title}</h1>
      </div>
    )
  },
})


export default Content
