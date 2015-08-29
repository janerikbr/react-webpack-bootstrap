import 'babel-core/polyfill';
import React from 'react';
import domready from 'domready';
const knownComponents = {
  Content: require('../components/Content.jsx'),
};

domready(() => {
  const serverSideData = JSON.parse(document.getElementById('__react_server_side_data').innerHTML);
  const RenderedComponent = knownComponents[serverSideData.component];
  const initialProps = serverSideData.props;
  const target = document.getElementById('content');
  React.render(<RenderedComponent {...initialProps}/>, target);
});
