import React, { useState } from 'react';

const MyNameIsMatt = () => {
  const [isFlipped, setIsFlipped] = useState(false);
  return (
    <div style={styles.container}>
      <div style={styles.textBox}>
        <h3
          style={{
            textAlign: 'center',
            fontSize: '6vw',
            marginBlockStart: 0,
            marginBlockEnd: 0,
          }}
        >
          My name is Matt.
        </h3>
        <p
          style={{
            textAlign: 'center',
            color: 'black',
            fontSize: '3.5vw',
           
          }}
        >
         I am a Web Developer, musician, photographer, and artist. My stack is React, ReactNative, NextJs, Redux, MongoDb, and NodeJS.    
        </p>
       
      </div>

      <div
        onMouseEnter={() => setIsFlipped(!isFlipped)}
        onMouseLeave={() => setIsFlipped(!isFlipped)}
        style={{
          width: '50%',
          // height: '50vw',
          display: 'flex',
          flexDirection: 'column',
          alignItems:"center",
          justifyContent:"center",
        
         
        }}
      >
        <img
          width="100%"
          height="100%"
          style={{ borderRadius: 20, marginBottom:"10px", borderTop:"1px solid lightgrey",borderRight:"1px solid lightgrey",boxShadow: '-10px 15px 5px lightgrey', }}
          alt="crema"
          src={isFlipped ? "https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/me9.jpg" : "https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/me.jpg"}
        />

        <h3
          style={{
            color: '#123',
            fontFamily: 'nunito',
            lineHeight: 0,
            fontSize: '4vw',
           
          }}
        >
          Matt Bruer
        </h3>
        <h3
          style={{
            color: 'darkgrey',
            fontFamily: 'nunito',
            lineHeight: 0,
            fontSize: '3.5vw',
            }}
        >
          Web Developer Applicant
        </h3>
      </div>
    </div>
  );
};

export default MyNameIsMatt;

const styles = {
  container: {
    display: 'flex',
    width: '100%',
    height: '60vw',
    backgroundColor: 'white',
    marginBottom: '30px',
  },

  textBox: {
    display: 'flex',
    flexDirection: 'column',
    width: '50%',
    fontFamily: 'nunito',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100%',
    padding:5,
    marginTop:"-25px"
    
  },
};
