import React from 'react';
import { Link } from 'react-router-dom'
import {Grid, Row, Col} from 'react-bootstrap'
import ExerciseList from './ExerciseList'

const Home = (props) => {
  
  return(
    <Grid>
    <Row className="show-grid">
        <Col md={12} className="text-center">
            <h1>Gym Trainer</h1>
        </Col>
    </Row>
    
      <Row className="show-grid">
        <Col md={3}>
          <ExerciseList />
        </Col>
        <Col md={9}>
          <p>Description of selected Exercise</p>
          <p>Create ExerciseDetails component</p>
        </Col>
      </Row>
    </Grid>
  );
}

export default Home;