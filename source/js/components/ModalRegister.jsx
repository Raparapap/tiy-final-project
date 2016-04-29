var React = require('react');
var ReactDOM = require('react-dom');
var Modal = require('react-modal');

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

var RegistrationForm = React.createClass({
	render: function () {
		return (
			<div>
			<h1> Registration Form </h1>
			<form>
				<div> <input type="text" placeholder="email" data-js-react-emailInputRegister /> </div>
				<div> <input type="text" placeholder="username" data-js-react-usernameInputRegister /> </div>
				<div> <input type="text" placeholder="password" data-js-react-passwordInputRegister /> </div>
				<div> <input type="text" placeholder="re-enter password" /> </div>
				<div> <input type="text" placeholder="location" data-js-react-locationInputRegister /> </div>
				<div> <input type="text" placeholder="email" data-js-react-emailInputRegister /> </div>
				<div> <input type="text" placeholder="GP address" data-js-react-gpAddressInputRegister /> </div>

			</form>
			</div>
		);
	}
});




var ModalRegister = React.createClass({

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

  render: function() {
    return (
      <div className="myModalSignIn">
        <Modal
          isOpen={this.state.modalIsOpen}
          onAfterOpen={this.afterOpenModal}
          onRequestClose={this.closeModal}
          shouldCloseOnOverlayClick={false}
          style={customStyles} >
          
          <RegistrationForm />
          <button onClick={this.closeModal}>Use as Guest</button>
        </Modal>
      </div>
    );
  }
});


module.exports = ModalRegister;
