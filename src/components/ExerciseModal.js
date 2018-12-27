import React from 'react'
import { Modal, Button, ControlLabel, FormGroup, HelpBlock, FormControl } from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { createExercise } from '../actions/exercise'

const FieldGroup = ({ id, label, help, ...props }) => {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class ExerciseModal extends React.Component {
   
    handleClose = () => {
        this.props.closeModal()
    }
    
    handleSubmit = (event) => {
        event.preventDefault();
        
        //Creating a new object
        let newExercise = new Object();
        newExercise.id = Math.floor((Math.random() * 100) + 1);
        newExercise.name = event.target.exerciseName.value;
        newExercise.description = event.target.exerciseDescription.value;
        newExercise.link = event.target.exerciseLink.value;
        
        this.props.createExercise(newExercise);
        
        
        //Calling the action
        console.log(newExercise);
        this.handleClose();
    }
    
    renderForm = () => {
       return(
           <form onSubmit={this.handleSubmit} method="post">
            <FieldGroup
              id="exerciseName"
              type="text"
              label="Name:"
              placeholder="Pushup"
              name="exerciseName"
            />
            <FieldGroup
              id="exerciseLink"
              type="text"
              label="Link:"
              placeholder="https://bodybuilding.com"
              name="exerciseLink"
            />
            <FormGroup controlId="exerciseDescription">
              <ControlLabel>Description:</ControlLabel>
              <FormControl name="exerciseDescription" componentClass="textarea" placeholder="Details about how practice the exercise." />
            </FormGroup>
            <Button type="submit">Save</Button>
          </form>
        );
    }
  
    render() {
        return(
            <Modal show={this.props.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adding exercise</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                <p>Text in a modal</p>
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