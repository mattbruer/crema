import React from 'react'

const MyEducation = () => {
  return (
   
      
        <div style={styles.container}>
           <div
             style={{
              borderRadius: '20px',
              border: '1px solid black',
              boxShadow: '-10px 15px 5px black',
              display: 'flex',
              height: '225px',
              margin: 30,
              alignItems:"center",
              justifyContent:"center"
              }}
           >
        <p style={{color:'white',textAlign:"center"}}>B.A. Psychology</p>
         <img
           style={{ borderRadius: 20 }}
           height="225px"
           src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/MU.webp`}
           alt={"school logo"}
         />
           </div>
           <div
             style={{
              borderRadius: '20px',
               border: '1px solid black',
              boxShadow: '-10px 15px 5px black',
             display: 'flex',
            height: '225px',
            margin: 30,
            alignItems:"center",
            justifyContent:"center"
          }}
           >
         <p style={{color:'white',textAlign:"center"}}>Contemporary Writing and Production</p>
         <img
           style={{ borderRadius: 20 }}
           height="225px"
           src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/Berklee.jpeg`}
           alt={"school logo"}
         />
           </div>
           <div
             style={{
              borderRadius: '20px',
               border: '1px solid black',
              boxShadow: '-10px 15px 5px black',
             display: 'flex',
            height: '225px',
            margin: 30,
            alignItems:"center",
            justifyContent:"center"
          }}
           >
        
         <img
           style={{ borderRadius: 20 }}
           height="225px"
           src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/Celta.png`}
           alt={"school logo"}
         />
           </div>
        </div>
   
     
      
 

  )
}

export default MyEducation


const styles = {
  container: {
    display: 'flex',
    overflowX: 'scroll',
    borderTop: '3px solid grey',
    borderBottom: '3px solid grey',
    backgroundColor: '#123',
  },
};


