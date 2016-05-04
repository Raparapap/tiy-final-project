var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('./ModalSignIn.jsx');
var ReactTabs = require('./ReactTabs.jsx');

var MainApplication = React.createClass({
	render: function () {
		return (
		<div className="container">
			<div className="row">
				<div className='col-md-12'>
					<ReactTabs />
				</div>
			</div>
		</div>
		);
	}
});


module.exports = MainApplication;
