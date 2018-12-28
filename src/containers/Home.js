import React from 'react';
import {Grid, Row, Col} from 'react-bootstrap'
import ExerciseList from './ExerciseList'
import ExerciseDetails from '../components/ExerciseDetails'

const Home = (props) => {
  
  return(
    <Grid>
    <Row className="show-grid">
        <Col md={12} className="text-center">
            <h1>Gym Trainer</h1>
        </Col>
    </Row>
    
      <Row className="show-grid">
        <Col md={2}>
          <ExerciseList />
        </Col>
        <Col md={9}>
          <ExerciseDetails />
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;