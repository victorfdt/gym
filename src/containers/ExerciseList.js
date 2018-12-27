import React from 'react'
import {Row, Col, Button, Modal} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { loadExercises, selectedExercise } from '../actions/exercise'
import ExerciseItem from '../components/ExerciseItem'

class ExerciseList extends React.Component {
    
    constructor(props){
        super(props);
        
        //Handle modal
        //TODO Why use bind? What is context in the constructor??
        this.handleShow = this.handleShow.bind(this);
        this.handleClose = this.handleClose.bind(this);
        
        this.state = {
          show: false
        };
    }
    
    componentWillMount = () => {
        //this.props.loadExercises();
    }
    
    handleSelectExercise = (exercise) => {
        this.props.selectedExercise(exercise);
    }
    
    handleClose() {
        this.setState({ show: false });
    }
    
    handleShow() {
        this.setState({ show: true });
    }
    
    renderExerciseItems = () => {
        if(this.props.exercise.length === 0){
            return <li>There is no exercise. Create one.</li>
        } else {
            return this.props.exercise.map((exercise, index) => {
                return <ExerciseItem 
                            key={exercise.id} 
                            exerciseName={exercise.name} 
                            link={exercise.link} 
                            description={exercise.description}
                            onClick={() => this.handleSelectExercise(exercise)}
                        />
            });
        }
    }
    
    render() {
        return(
            <div>
                <Row className="show-grid">
                    <Col md={12}>
                        <h4>Exercises list</h4>
                    </Col>
                </Row>
                
                <Row className="show-grid">
                    <Col md={12}>
                        <ul>{this.renderExerciseItems()}</ul>
                    </Col>
                </Row>
                
                <Row className="show-grid">
                    <Col md={12}>
                        <Button bsStyle="primary" onClick={this.handleShow}>Add Exercise</Button>
                    </Col>
                </Row>
                
                <Modal show={this.state.show} onHide={this.handleClose}>
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
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  exercise: state.exercise.exercisesList
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadExercises, selectedExercise }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
