import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import domready from 'domready';
const knownComponents = {
  Content: require('../components/Content.jsx'),
};

domready(() => {
  const serverSideData = JSON.parse(document.getElementById('__react_server_side_data').innerHTML);
  const RenderedComponent = knownComponents[serverSideData.component];
  const initialProps = serverSideData.props;
  const target = document.getElementById('content');
  ReactDOM.render(<RenderedComponent {...initialProps}/>, target);
});
