var React = require('react');
var ReactDOM = require('react-dom');
var ReactBootstrap = require('react-bootstrap');
var AssessmentForm = require('./AssessmentForm.jsx');

var ReactTabsApplication = React.createClass({
	getInitialState: function () {
    return {
      key: 1
    };
  },

  handleSelect: function (key) {
    alert('selected ' + key);
    this.setState({key});
  },

	render: function () {
		return (
		<Tabs activeKey={this.state.key} onSelect={this.handleSelect} id="controlled-tab-example">
	        <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
	        <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
	        <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
      	</Tabs>
    );
		
	}
});


module.exports = ReactTabsApplication;


			