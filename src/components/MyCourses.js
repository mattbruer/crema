import React from 'react'

const courses = ["t","r","p","w","k","l","j","h","f","g","o","u","d","i","s","m","a","b","n","c","e"]
const MyCourses = () => {

  return (
    <>
    
      <div style={styles.container}>
      {courses.map((c,i)=>{
        return   <div style={styles.photoBox}>
        <img
          style={{ borderRadius: 5,  }}
          height="225px"
          src={`https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/${c}.png`}
          alt="course"
        />
      </div>
      })}
       </div>
    </>
  )
}

export default MyCourses

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