var React = require('react');


var UkOrEu = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio">
				<h3> Are you a resident of the UK or EU? //add state if no show documents needed</h3>
					  <label> <input type="radio" value="Yes"/> Yes </label>
					  <label> <input type="radio" value="No"/> No </label>
				</div>
			</div>
		)
	}
});

var AreYouIll = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio">
				<h3> Are you ill? </h3>
						 <label>  <input type="radio" value="Yes"/> Yes </label> 						  
						 <label>  <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Breathing = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio">
				<h3> Breathing normally? //add state if no then difficulty? yes no if yes blockage? yes no</h3>
						 <label>  <input type="radio" value="Yes"/> Yes </label> 
						 <label>  <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Awake = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio">
				<h3> Is the patient awake? </h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Bleeding = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio">
				<h3> Any signs of Bleeding? // add state if yes profused? yes no</h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Pain = React.createClass({
	render: function () {
		return (
			<div className="form-group">
				<div className="radio"> 
				<h3> Any Pain? // if yes dropdown sign/symptoms, pain scale, typeofpain store</h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Skin = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="radio">
				<h3> Any skin swelling or dryness on the skin </h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Injuries = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="radio">
				<h3> Any injuries? // if yes head, tryunk and extremities</h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div> 
		)
	}
});

var Mobilise = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="radio">
				<h3> Are you able to Mobilise </h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var SelfMutilation = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="radio">
				<h3> Any thoughts of self-mutilation, self-harm or harm to others </h3>
					<label> <input type="radio" value="Yes"/> Yes </label> 
					<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Depression = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="radio">
					<h3> Depression </h3>
						<label> <input type="radio" value="Yes"/> Yes </label> 
						<label> <input type="radio" value="No"/> No </label> 
				</div>
			</div>
		)
	}
});

var Symptoms = React.createClass({
	render: function () {
		return (
			<div className="form-group"> 
				<div className="checkbox">
				<h3> Any other symptoms </h3>

				</div>
 			</div>
		)
	}
});

var SubmitButton = React.createClass({
	render: function () {
		return (
			<div className="form-group">
			<button type="submit" class="btn btn-default"> Submit </button>
			</div>
		)
	}
});

var AssessmentForm = React.createClass({
	render: function () {
		return (
			<div className="questionaire" id="questionaireId">
				<form role="form">
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
					<SubmitButton />
				</form>
			</div>
		)	
	}
});



module.exports = AssessmentForm;
