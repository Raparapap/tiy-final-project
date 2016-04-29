var React = require('react');
var ReactDOM = require('react-dom');
var MainApplication = require('./components/MainApplication.jsx');
var ModalRegister = require('./components/ModalRegister.jsx')


ReactDOM.render(<ModalRegister />, document.querySelector('[data-react-application]'));