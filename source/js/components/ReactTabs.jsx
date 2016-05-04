var React = require('react');

var ReactTabsApplication = React.createClass({
	render: function () {
		return (
			<div>
				<ul className="nav nav-tabs">
				  <li role="presentation" className="MyTab"><a href="#">Assessment</a></li>
				  <li role="presentation" className="MyTab"><a href="#">My Diagnosis</a></li>
				  <li role="presentation" className="MyTab"><a href="#">Find My Facility</a></li>
				</ul>
			</div>
		)
	}
});


module.exports = ReactTabsApplication;