import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { loadExercises, selectedExercise } from '../actions/exercise'
import ExerciseItem from '../components/ExerciseItem'
import ExerciseModal from '../components/ExerciseModal'

class ExerciseList extends React.Component {
     constructor(props){
        super(props);
        
        this.state = {
          showModal: false
        };
    }

    handleSelectExercise = (exercise) => {
        this.props.selectedExercise(exercise);
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
    
    showModal = () => {
        this.setState({showModal: true})
    }
    
    closeModal = () => {
        this.setState({showModal: false})
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
                        <Button bsStyle="primary" onClick={this.showModal}>Add Exercise</Button>
                    </Col>
                </Row>
                
                <ExerciseModal showModal={this.state.showModal} closeModal={this.closeModal}/>
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