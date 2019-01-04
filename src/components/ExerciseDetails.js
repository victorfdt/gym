import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Row, Col, Panel, Button} from 'react-bootstrap'
import {deleteExercise} from '../actions/exercise'
import ExerciseDeleteModal from './ExerciseDeleteModal'

class ExerciseDetails extends React.Component {
    
    constructor(props) {
        super(props);
        
        this.state = {
          showModal: false,
          exercise: {}
        };
    }
    
    showModal = () => {
        this.setState({
            showModal: true
        });
    }
    
    closeModal = () => {
        this.setState({
            showModal: false
        });
    }
    
    handleOnClick = (currentExercise) => {
        this.setState({exercise: currentExercise}, function() {
            this.showModal();
        });
    }
    
    deleteExercise = (id) => {
        this.props.deleteExercise(id);
        this.closeModal();
    }
    
    render() {
        let content;
        if(this.props.exercise.id){
            content = 
            <div>
                <Row className="show-grid">
                    <Col md={2}>
                        <span>Name:</span>
                    </Col>
                    <Col md={9}>
                        <span>{this.props.exercise.name}</span>
                    </Col>
                </Row>
                
                <Row className="show-grid">
                    <Col md={2}>
                        <span>Description:</span>
                    </Col>
                    <Col md={9}>
                        <span>{this.props.exercise.description}</span>
                    </Col>
                </Row>
                
                <Row className="show-grid">
                    <Col md={2}>
                        <span>Link:</span>
                    </Col>
                    <Col md={9}>
                        <a href={this.props.exercise.link} target="_blank">{this.props.exercise.link}</a>
                    </Col>
                </Row>
                <br/>
                <Row className="show-grid">
                    <Col md={12}>
                        <Button bsStyle="danger" bsSize="small" onClick={() => this.handleOnClick(this.props.exercise)}>Remove</Button>
                    </Col>
                </Row>
            </div>
        } else {
            content = 
            <div>
                <Row className="show-grid">
                    <Col md={10}>
                        <span>Select an exercise.</span>
                    </Col>
                </Row>
            </div>
        }
        
        return(
            <div>
                <Panel bsStyle="info">
                    <Panel.Heading>Exercise Details</Panel.Heading>
                    <Panel.Body>
                        {content}
                    </Panel.Body>
                </Panel>
                
                <ExerciseDeleteModal 
                    showModal={this.state.showModal} 
                    closeModal={this.closeModal}
                    exercise={this.state.exercise}
                    deleteExercise={() => this.deleteExercise(this.state.exercise.id)}
                />
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  exercise: state.exercise.selectedExercise
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteExercise }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDetails);