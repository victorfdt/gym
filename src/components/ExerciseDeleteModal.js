import React from 'react'
import { Modal, Col, Row, Button } from 'react-bootstrap'

class ExerciseDeleteModal extends React.Component {
    
    constructor(props) {
        super(props);
    }
    
    render() {
        return(
            <Modal show={this.props.showModal} onHide={this.props.closeModal}>
              <Modal.Header closeButton>
                <Modal.Title>Delete exercise {this.props.exercise.name}</Modal.Title>
              </Modal.Header>
              
              <Modal.Body>
                <Row className="show-grid">
                    <Col md={12}>
                      <p>Do you want to delete the exercise {this.props.exercise.name}?</p>
                    </Col>
                </Row>
                
                <Row className="show-grid">
                    <Col md={6}>
                        <Button bsStyle="danger" bsSize="small" onClick={this.props.closeModal}>No</Button>
                    </Col>
                    <Col md={6} className="text-right">
                        <Button bsStyle="success" bsSize="small" onClick={this.props.deleteExercise}>Yes</Button>
                    </Col>
                </Row>
                
              </Modal.Body>
            </Modal>
        );
    }
}

export default ExerciseDeleteModal;