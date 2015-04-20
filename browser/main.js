import "babel-core/polyfill";

import React from 'react';
import Layout from '../components/Layout.jsx';

const initialPropsEl = document.getElementById('__react_initial_props');
const initialProps = JSON.parse(initialPropsEl.innerHTML);

React.render(React.createElement(Layout, initialProps), document);