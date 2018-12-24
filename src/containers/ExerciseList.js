import React from 'react'
import {Row, Col, Button} from 'react-bootstrap'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux'
import { loadExercises, selectExercise } from '../actions/exercise'
import ExerciseItem from '../components/ExerciseItem'

class ExerciseList extends React.Component {
    
    componentWillMount = () => {
        return this.props.loadExercises;
    }
    
    handleSelectExercise = (id) => {
        alert('Id: '+ id);
        return this.props.selectExercise(id);
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
                            onClick={() => this.handleSelectExercise(exercise.id)}
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
                        <Button bsStyle="primary">Add Exercise</Button>
                    </Col>
                </Row>
            </div>
        );
    }
}

const mapStateToProps = (state) => ({
  exercise: state.exercise.exercisesList
});

//Actions available inside the props
const mapDispatchToProps = (dispatch) => bindActionCreators({ loadExercises, selectExercise }, dispatch);

//combining two functions
export default connect(mapStateToProps, mapDispatchToProps)(ExerciseList);
