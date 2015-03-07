require("babel-core/polyfill");

const React = require('react');
const Layout = require('../components/Layout.jsx');

const initialPropsEl = document.getElementById('__react_initial_props');
const initialProps = JSON.parse(initialPropsEl.innerHTML);

React.render(React.createElement(Layout, initialProps), document);