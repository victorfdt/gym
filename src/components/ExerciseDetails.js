import React from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux';
import {Row, Col, Panel, Button} from 'react-bootstrap'
import {deleteExercise} from '../actions/exercise'

class ExerciseDetails extends React.Component {
    
    handleOnClick = (id) => {
        this.props.deleteExercise(id);        
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
                        <a href={this.props.exercise.link}>{this.props.exercise.link}</a>
                    </Col>
                </Row>
                <br/>
                <Row className="show-grid">
                    <Col md={12}>
                        <Button bsStyle="danger" bsSize="small" onClick={this.handleOnClick(this.props.exercise.id)}>Remove</Button>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  exercise: state.exercise.selectedExercise
});

const mapDispatchToProps = (dispatch) => bindActionCreators({ deleteExercise }, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(ExerciseDetails);