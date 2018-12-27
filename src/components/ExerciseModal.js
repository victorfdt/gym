import React from 'react'
import {Modal, Button} from 'react-bootstrap'

class ExerciseModal extends React.Component {

   
    handleClose = () => {
        this.props.closeModal()
    }
  
    render() {
        return(
            <Modal show={this.props.showModal} onHide={this.handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Adding exercise</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                <h4>Text in a modal</h4>
              </Modal.Body>
              
              <Modal.Footer>
                <Button onClick={this.handleClose}>Close</Button>
              </Modal.Footer>
            </Modal>
        );
    }
}

export default ExerciseModal;