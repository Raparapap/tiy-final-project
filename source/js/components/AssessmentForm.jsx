var React = require('react');

var UkOrEu = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Are you a resident of the UK or EU? </h3>
				<div className="checkbox">
				  <input type="radio" /> Yes
				</div>	
				<div className="checkbox">
				  <input type="radio" /> No
				</div>	
			</div>
		)
	}
});

var AssessmentForm = React.createClass({
	render: function () {
		return (
			<div>
				<form>
				<UkOrEu />
				</form>
			</div>
		)	
	}
});



module.exports = AssessmentForm;
