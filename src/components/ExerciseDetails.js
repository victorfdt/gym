import React from 'react'
import { connect } from 'react-redux'
import {Row, Col, Panel} from 'react-bootstrap'

class ExerciseDetails extends React.Component {
    
    
    render() {
        let content;
        if(this.props.exercise){
            console.log(this.props.exercise);
            content = <div>
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
                            <span>{this.props.exercise.link}</span>
                        </Col>
                    </Row>
            </div>
        } else {
            content = <div><Row className="show-grid">
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

export default connect(mapStateToProps, null)(ExerciseDetails);