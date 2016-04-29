var React = require('react');
var ReactDOM = require('react-dom');
var MainApplication = require('./components/MainApplication.jsx');
var ModalRegister = require('./components/ModalRegister.jsx');
var ModalSignIn = require('./components/ModalSignIn.jsx');


ReactDOM.render(<MainApplication />, document.querySelector('[data-react-application]'));