import React from 'react';
import { Modal, Button, ControlLabel, FormGroup, HelpBlock, FormControl, Panel, Col, Row } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { createExercise } from '../actions/exercise'

const FieldGroup = ({ id, label, help, validation, ...props }) => {
  return (
    <FormGroup id={id} validationState={validation}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      <FormControl.Feedback />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ExerciseModal extends React.Component {
  
    constructor(props) {
      super(props);
      
      this.state = {
        errorMessages: [],
        exerciseName: null,
        exerciseLink: null,
        exerciseDescription: null
      };
    }
   
    handleClose = () => {
        this.props.closeModal();
        this.setState({
          errorMessages: [],
          exerciseName: null,
          exerciseLink: null,
          exerciseDescription: null
        });
    }
   
    handleSubmit = (event) => {
        event.preventDefault();
        
        //Validating the form
        let name = event.target.exerciseName.value;
        let description = event.target.exerciseDescription.value;
        let link = event.target.exerciseLink.value;
        let hasError = false;
        
        //Name
        if(name === ""){
          debugger
          hasError = true;
          this.setState({exerciseName: 'error'});
         
          let hasMessage = this.state.errorMessages.filter(function(message){
            return message === 'Insert a name'
          });
          
          if(!hasMessage){
            let errorMsg = this.state.errorMessages;
            errorMsg.push("Insert a name");
            this.setState({ 
              errorMessages:errorMsg
            });
          }
        }
        
        //Link
        if(link === ""){
          hasError = true;
          this.setState({exerciseLink: 'error'});
          
          let errorMsg = this.state.errorMessages
          errorMsg.push("Insert a link");
          this.setState({ 
            errorMessages:errorMsg
          });
        }
        
        //Description
        if(description === ""){
          hasError = true;
          this.setState({exerciseDescription: 'error'});
          
          let errorMsg = this.state.errorMessages;
          errorMsg.push("Insert a description");
          this.setState({ 
            errorMessages:errorMsg
          });
        }
        
        if(!hasError){
          //Creating a new object
          let newExercise = {};
          newExercise.id = Math.floor((Math.random() * 100) + 1);
          newExercise.name = event.target.exerciseName.value;
          newExercise.description = event.target.exerciseDescription.value;
          newExercise.link = event.target.exerciseLink.value;
          
          //Calling the action
          console.log(newExercise);
          this.props.createExercise(newExercise);
          this.handleClose();
        }
    }
    
    renderForm = () => {
       return(
           <form onSubmit={this.handleSubmit} method="post">
            <FieldGroup
              id="exerciseName"
              type="text"
              label="Name:"
              validation={this.state.exerciseName}
              placeholder="Pushup"
              name="exerciseName"
            />
            <FieldGroup
              id="exerciseLink"
              type="text"
              label="Link:"
              placeholder="https://bodybuilding.com"
              name="exerciseLink"
              validation={this.state.exerciseLink}
            />
            <FormGroup controlId="exerciseDescription" validationState={this.state.exerciseDescription}>
              <ControlLabel>Description:</ControlLabel>
              <FormControl name="exerciseDescription" componentClass="textarea" placeholder="Details about how practice the exercise." />
            </FormGroup>
            
            <Row className="show-grid text-right">
                <Col md={12}>
                    <Button type="submit" bsStyle="success">Save</Button>
                </Col>
            </Row>
            
          </form>
        );
    }
    
    renderFormErrors = () => {
      if(this.state.errorMessages.length === 0){
        return;
      } else {
        return <Panel bsStyle="danger">
            <Panel.Heading>
              <Panel.Title componentClass="h3">Errors</Panel.Title>
            </Panel.Heading>
            <Panel.Body>
              <ul>
              {this.state.errorMessages.map((message, index) => {
              return <li key={index}>{message}</li>
            })}
              </ul>
            </Panel.Body>
          </Panel>;
      }
    }
  
    render() {
        return(
            <Modal show={this.props.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adding exercise</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                <p>Create a new exercise.</p>
                {this.renderFormErrors()}
                {this.renderForm()}
              </Modal.Body>
            </Modal>
        );
    }
}

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ createExercise }, dispatch);

//combining two functions
export default connect(null, mapDispatchToProps)(ExerciseModal);