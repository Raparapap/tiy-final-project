var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab
var AssessmentForm = require('./AssessmentForm.jsx');
var MyDiagnosis = require('./MyDiagnosis.jsx');
var FindMyFacility = require('./FindMyFacility.jsx');

var ReactTabsApplication = React.createClass({
	render: function () {
		return (
		<div>
		<Tabs defaultActiveKey={1} animation={false} id="myTabs">
	        <Tab eventKey={1} id="assessmentTab" title="Assessment Form">
	        	<AssessmentForm />
	        </Tab>
	        <Tab eventKey={2} id="myDiagnosisTab" title="My Diagnosis">
	        	<MyDiagnosis /> 
	        </Tab>
	        <Tab eventKey={3} id="findYourFacilityTab" title="Find your Facility">
	        	<FindMyFacility />
	        </Tab>
      	</Tabs>
      </div>
    );
		
	}
});


module.exports = ReactTabsApplication;


			