<div className="container">
				<ul className="nav nav-tabs">
					  <li role="presentation" className="MyTab assessmentTab"><a href="#assessmentTab" data-toggle="tab" aria-controls="assessmentTab" role="tab">Assessment</a></li>
					  <li role="presentation" className="MyTab myDiagnosisTab"><a href="#myDiagnosisTab" data-toggle="tab" aria-controls="myDiagnosisTab" role="tab">My Diagnosis</a></li>
					  <li role="presentation" className="MyTab findMyFacilityTab"><a href="#findMyFacilityTab" data-toggle="tab" aria-controls="findMyFacilityTab" role="tab">Find My Facility</a></li>
					</ul>

				<div className="tab-content">
						  <div id="assessmentTab" role="tabpanel" className="tab-pane fade in active">
						    <h3>Assessment Form</h3>
						  </div>
						  <div id="myDiagnosisTab" role="tabpanel" className="tab-pane fade">
						    <h3>Your Diagnosis</h3>
						  </div>
						  <div id="findMyFacilityTab" role="tabpanel" className="tab-pane fade">
						    <h3>Find your Facility</h3>
						  </div>
					</div>
			</div>





		<div className="container">
					<ul className="nav nav-tabs">
					  <li role="presentation" className="MyTab" id="home"><a href="#">Assessment</a></li>
					  <li role="presentation" className="MyTab" id="menu1"><a href="#">My Diagnosis</a></li>
					  <li role="presentation" className="MyTab" id="menu2"><a href="#">Find My Facility</a></li>
					</ul>

					<div className="tab-content">
						  <div id="home" class="tab-pane fade in active">
						    <h3>HOME</h3>
						    <p>Some content.</p>
						  </div>
						  <div id="menu1" class="tab-pane fade">
						    <h3>Menu 1</h3>
						    <p>Some content in menu 1.</p>
						  </div>
						  <div id="menu2" class="tab-pane fade">
						    <h3>Menu 2</h3>
						    <p>Some content in menu 2.</p>
						  </div>
					</div>
			</div>	


<Tabs defaultActiveKey={2} id="uncontrolled-tab-example">
    <Tab eventKey={1} title="Tab 1">Tab 1 content</Tab>
    <Tab eventKey={2} title="Tab 2">Tab 2 content</Tab>
    <Tab eventKey={3} title="Tab 3" disabled>Tab 3 content</Tab>
  </Tabs>




  <nav class="navbar navbar-default top">
	  <div class="container-fluid">
	    <div class="navbar-header">
	      <a class="navbar-brand" href="#">
	        <img class="logo" alt="Brand" src="../images/logo.jpg"> 
	      </a>

	     <div class="navbar-right text-links">
		     <div class="navbar-text"> <a href="#" class="navbar-link">Home</a></div> 

		     <div class="navbar-text"> <a href="#" class="navbar-link">About</a></div> 

		     <div class="navbar-text"> <a href="#" class="navbar-link">Resources</a></div>

		     <div class="navbar-text"> <a href="#" class="navbar-link">Contact me</a></div> 
		    </div>
		 </div>
	  </div>
	</nav>

	<div>
		<Tabs defaultActiveKey={1} animation={false} id="myTabs" generateChildId>
	        <Tab eventKey={1} id="assessmentTab" title="Assessment Form">
	        	<AssessmentForm />
	        </Tab>
	        <Tab eventKey={2} id="myDiagnosisTab" title="My Diagnosis">Tab 2 content</Tab>
	        <Tab eventKey={3} id="findYourFacilityTab" title="Find your Facility">Tab 3 content</Tab>
      	</Tabs>
      </div>