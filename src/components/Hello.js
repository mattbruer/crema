import React from 'react';

const Hello = () => {
  return (
    <div style={styles.container}>
      <h2 style={styles.hello}>Hello,</h2>
      <img
        style={styles.img}
        width="100%"
        alt="crema"
        src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/logo.jpg"
      />
    </div>
  );
};

export default Hello;

const styles = {
  container: {
    backgroundColor: 'white',
    fontFamily: 'ms madi',
    fontSize: '6vw',
    lineHeight: 0,
    marginBottom:"20px"
  },
  hello: {},
  img: {},
};
