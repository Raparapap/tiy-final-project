var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');
var ModalRegister = require('./ModalRegister.jsx')

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};

var SigninSignOut = React.createClass({
	render: function () {
		return (
			<div>
				<div> <input type="text" placeholder="Email" data-js-react-emailInput /> </div>
				<div> <input type="text" placeholder="Password" data-js-react-passwordInput /> </div>
			</div>
		);
	}
});

var SigninButton = React.createClass({
	render: function () {
		return (
			<div>
					<button type="submit" data-js-react-signOut> Sign In </button> 
			</div>
		);
	}
});

var RegisterButton = React.createClass({
	render: function () {
		return (
			<div>
					<button data-js-react-signIn onClick={this.props.onButtonClick}> Register </button> 
			</div>
		);
	}
});

var FindMyFacilityButton = React.createClass({
	render: function () {
		return (
			<div>
				<button data-js-react-findMyFacility> Find my Facility </button> 
			</div>
		);
	}
});

var DoAssessmentButton = React.createClass({
	render: function () {
		return (
			<div>
				<button data-js-react-doAssessment> Do Assessment </button>
			</div>
		);
	}
});



var ModalSignIn = React.createClass({

  getInitialState: function() {
    return { modalIsOpen: true };
  },

  openModal: function() {
    this.setState({modalIsOpen: true});
  },

  afterOpenModal: function() {
    // references are now sync'd and can be accessed.
    //this.refs.subtitle.style.color = '#f00';
  },

  closeModal: function() {
    this.setState({modalIsOpen: false});
  },

  callModalRegister: function () {
  	return <ModalRegister />
  },


  render: function() {
    return (
      <div className="myModalSignIn">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          >
          
          <form>
	          <SigninSignOut />
	          <SigninButton />
	      </form>

	       <RegisterButton onButtonClick={this.callModalRegister}/>  
	      <FindMyFacilityButton />
	      <DoAssessmentButton />
          <button onClick={this.closeModal}>Use as Guest</button>
        </Modal>
      </div>
    );
  }
});


module.exports = ModalSignIn;