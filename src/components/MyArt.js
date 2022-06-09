import React from 'react';

const MyArt = () => {
  const pics = [
    "art","art2","art3","art4","art5","art6"
  ];
  return (
    <div style={styles.container}>
      {pics.map((p, i) => {
        return (
          <div
            key={i}
            style={{
              borderRadius: '20px',
              border: '1px solid black',
              boxShadow: '-10px 15px 5px black',
              display: 'flex',
              height: '225px',
              margin: 30,
            }}
          >
            <img
              style={{ borderRadius: 20 }}
              height="225px"
              src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${p}.jpg`}
              alt={p}
            />
          </div>
        );
      })}
    </div>
  );
};

export default MyArt;

const styles = {
  container: {
    display: 'flex',
    overflowX: 'scroll',
    borderTop: '3px solid grey',
    borderBottom: '3px solid grey',
    backgroundColor: '#123',
  },
};
