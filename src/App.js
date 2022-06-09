import React from 'react';
import Hello from './components/Hello';
import MyNameIsMatt from './components/MyNameIsMatt';

import MyMusic from './components/MyMusic';
import MyArt from './components/MyArt';
import MyCourses from './components/MyCourses'

import MyPhotography from './components/MyPhotography';
import MyEducation from './components/MyEducation';

const App = () => {
  return (
    <div style={styles.container}>
      <Hello />
      <MyNameIsMatt />
      <div>
    <hr/>
    </div>
      <h2 style={styles.headings}>Musician</h2>
      <MyMusic />
      
      <h2 style={styles.headings}>Photographer</h2>
      <MyPhotography />
      
      <h2 style={styles.headings}>Artist</h2>
      <MyArt />
      
      <h2 style={styles.headings}>Coding Courses</h2>
      <MyCourses />
      <h2 style={styles.headings}>Education</h2>
      <MyEducation/>
     
    </div>
  );
};

export default App;

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',

   
  },
  headings:{ textAlign: 'center', fontSize:"50px" }
};


