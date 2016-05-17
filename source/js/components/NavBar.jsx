var React = require('React');

var NavBar = React.createClass({
	render: function () {
		return (
		<div>
			<nav className="navbar navbar-default top">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">
			        <img className="logo" alt="Brand" src="../images/logo.jpg"/>
			      </a>

				<div className="navbar-right text-links">
				     <div className="navbar-text"> <a href="#" className="navbar-link">Home</a></div> 

				     <div className="navbar-text"> <a href="#" className="navbar-link">About</a></div> 

				     <div className="navbar-text"> <a href="#" className="navbar-link">Resources</a></div>

				     <div className="navbar-text"> <a href="#findYourFacilityTab" className="navbar-link">Contact me</a></div> 
				</div>
				 </div>
			  </div>
			</nav>
		</div> 
		)
	}
})

module.exports = NavBar;