import 'babel-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import Content from '../components/Content/Content.jsx';
import domready from 'domready';

import './main.css';

const knownComponents = {
  Content,
};

domready(() => {
  const serverSideData = JSON.parse(document.getElementById('__react_server_side_data').innerHTML);
  const RenderedComponent = knownComponents[serverSideData.component];
  const initialProps = serverSideData.props;
  ReactDOM.render(<RenderedComponent {...initialProps}/>, document.getElementById('content'));
});
