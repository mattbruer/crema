import React from 'react';

const weddings = ["wedding", "wedding6", "wedding5", "wedding3", "wedding2", "wedding4"]
const travel = ["travelPhoto","travelPhoto2","travelPhoto3","travelPhoto4","travelPhoto5","travelPhoto6","travelPhoto7","travelPhoto8","travelPhoto9","travelPhoto10","travelPhoto11","travelPhoto12","travelPhoto13","travelPhoto14",]
const realEstate=["re","re2","re3","re4","re5","re6","re7","re8","re9","re10", "re11"]
const food = ["food","food2","food3","trezo","trezo-2"]
const macro=["macroPhoto","macroPhoto2","macroPhoto3", "macroPhoto4"]

const MyPhotography = () => {
return (
    <>
      <h4 style={{ textAlign: 'center' }}>Weddings</h4>
      <div style={styles.container}>
      {weddings.map((w,i)=>{
        return   <div style={styles.photoBox}>
        <img
          style={{ borderRadius: 20 }}
          height="225px"
          src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${w}.jpg`}
          alt="wedding"
        />
      </div>
      })}
       </div>
      <h4 style={{ textAlign: 'center' }}>Travel</h4>
      <div style={styles.container}>
        {travel.map((tp,i)=>{
          return  <div key={i}style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${tp}.jpg`}
            alt="travelphoto"
          />
        </div>
        })}
       
      </div>
      <h4 style={{ textAlign: 'center' }}>Real Estate</h4>
      <div style={styles.container}>
        {realEstate.map((re,i)=>{
          return  <div key={i} style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${re}.jpg`}
            alt="re"
          />
        </div>
        })}
       
      </div>
      <h4 style={{ textAlign: 'center' }}>Restaurant</h4>
      <div style={styles.container}>
        {food.map((f,i)=>{
          return  <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${f}.jpg`}
            alt="food"
          />
        </div>
        })}
       
      </div>
     
      <h4 style={{ textAlign: 'center' }}>Macro</h4>
      <div style={styles.container}>
        {macro.map((m,i)=>{
          return  <div key={i} style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${m}.jpg`}
            alt="macro"
          />
        </div>
        })}
       
     
      </div>
    </>
  );
};

export default MyPhotography;

const styles = {
  container: {
    display: 'flex',
    overflowX: 'scroll',
    borderTop: '3px solid grey',
    borderBottom: '3px solid grey',
    backgroundColor: '#123',
  },
  photoBox: {
    borderRadius: '20px',
    border: '1px solid black',
    boxShadow: '-10px 15px 5px black',
    display: 'flex',
    height: '225px',
    margin: 30,
  },
};
