var React = require('react');
var ReactDOM = require('react-dom');
var Tabs = require('react-bootstrap').Tabs;
var Tab = require('react-bootstrap').Tab
var AssessmentForm = require('./AssessmentForm.jsx');

var ReactTabsApplication = React.createClass({
	render: function () {
		return (
		<div generateChildId>
		<Tabs defaultActiveKey={1} animation={false} id="myTabs">
	        <Tab eventKey={1} id="assessmentTab" title="Assessment Form">
	        	<AssessmentForm />
	        </Tab>
	        <Tab eventKey={2} id="myDiagnosisTab" title="My Diagnosis">Tab 2 content</Tab>
	        <Tab eventKey={3} id="findYourFacilityTab" title="Find your Facility">Tab 3 content</Tab>
      	</Tabs>
      </div>
    );
		
	}
});


module.exports = ReactTabsApplication;


			