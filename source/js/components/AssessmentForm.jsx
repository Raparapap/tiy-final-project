var React = require('react');
var ButtonToolbar = require('react').ButtonToolbar;
var DropdownButton = require('react').DropdownButton;
var MenuItem = require('react').MenuItem;


var UkOrEu = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Are you a resident of the UK or EU? //add state if no show documents needed</h3>
					  <input type="checkbox" value="Yes"/> Yes <br/>
					  <input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var AreYouIll = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Are you ill? </h3>
						  <input type="checkbox" value="Yes"/> Yes <br/>
						  <input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Breathing = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Breathing normally? //add state if no then difficulty? yes no if yes blockage? yes no</h3>
						  <input type="checkbox" value="Yes"/> Yes <br/>
						  <input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Awake = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Is the patient awake? </h3>
					<input type="checkbox" value="Yes"/> Yes <br/>
					<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Bleeding = React.createClass({
	render: function () {
		return (
			<div>
				<h3> Any signs of Bleeding? // add state if yes profused? yes no</h3>
					<input type="checkbox" value="Yes"/> Yes <br/>
					<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Pain = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Any Pain? // if yes dropdown sign/symptoms, pain scale, typeofpain store</h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Skin = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Any skin swelling or dryness on the skin </h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Injuries = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Any injuries? // if yes head, tryunk and extremities</h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div> 
		)
	}
});

var Mobilise = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Are you able to Mobilise </h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var SelfMutilation = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Any thoughts of self-mutilation, self-harm or harm to others </h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Depression = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Depression </h3>
				<input type="checkbox" value="Yes"/> Yes <br/>
				<input type="checkbox" value="No"/> No
			</div>
		)
	}
});

var Symptoms = React.createClass({
	render: function () {
		return (
			<div> 
				<h3> Any other symptoms </h3>
				<div className="dropdown">
				  <button id="dLabel" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
				    Symptoms
				    <span className="caret"></span>
				  </button>
				  <ul className="dropdown-menu" aria-labelledby="dLabel">
				    <li> hello </li>
				  </ul>
				</div>
 			</div>
		)
	}
});

var AssessmentForm = React.createClass({
	render: function () {
		return (
			<div className="questionaire">
				<form>
					<UkOrEu /> 
					<AreYouIll />
					<Breathing />
					<Awake />
					<Bleeding />
					<Pain />
					<Skin />
					<Injuries />
					<Mobilise />
					<SelfMutilation />
					<Depression />
					<Symptoms />
				</form>
			</div>
		)	
	}
});



module.exports = AssessmentForm;
