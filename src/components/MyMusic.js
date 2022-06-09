import React from 'react';

const MyMusic = () => {
  return (
    <div style={styles.container}>
    
      <div
        style={{
          display: 'flex',

          overflowX: 'scroll',
          padding: 20,
          backgroundColor: '#123',
        }}
      >
        <div style={styles.photoBox}>
          <video
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/SpanishPipedream.MP4"
            controls
            type="video/mp4"
            width={560 / 1.75}
            height={315 / 1.75}
            poster="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/thumb.jpg"
          />
        </div>
        <div style={{...styles.photoBox, color:'white', textAlign:'center'}}>
          Over 8.5 million views on Youtube!
        <iframe  width={560 / 1.75}
            height={315 / 1.75} src="https://www.youtube.com/embed/Ez-apj-Od1I" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
        </div>
        <div style={styles.photoBox}>
          <iframe
            width={560 / 1.75}
            height={315 / 1.75}
            src="https://www.youtube.com/embed/F-qof1tjTcw"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
      
       
        <div style={styles.photoBox}>
          <iframe
            width={560 / 1.75}
            height={315 / 1.75}
            src="https://www.youtube.com/embed/t36UO21DRgI"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
          ></iframe>
        </div>
        <div style={{ minWidth:'200px', display:"flex", flexDirection:"column", justifyContent:'center', alignItems:"center" }}>
          <p style={{color:'white', textAlign:"center"}}>I was a Score-Coordinator on Johnny Depp's 'The Rum Diary'</p>
          <div style={{border:"1px solid white", padding:"10px", backgroundColor:"grey",  }}>
          <a style={{textDecoration:"none", color:'white'}}rel="noreferrer" target="_blank" href='https://www.imdb.com/name/nm4906033/'>Visit my IMDb</a>
          </div>
         
        </div>
        
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/theRumDiary.jpg"
            alt="music"
          />
        </div>
        <div style={{ minWidth:'200px', display:"flex", justifyContent:'center', alignItems:"center" }}>
          <p style={{color:'white', textAlign:"center"}}>I have composed music used in TV and Radio all over the world.  Here are a just few TV shows that have used my music:  </p>
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music2.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music3.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music4.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music5.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music7.jpg"
            alt="music"
          />
        </div>
        <div style={{ minWidth:'200px', display:"flex", justifyContent:'center', alignItems:"center" }}>
          <p style={{color:'white',textAlign:"center"}}>I have performed with some names you may have heard before, like Ed Helms, Steve Martin, Ke$ha, John C. Reily, and John Mayer </p>
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/mayer.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/reily.jpg"
            alt="music"
          />
        </div>
        <div style={styles.photoBox}>
          <img
            style={{ borderRadius: 20 }}
            height="225px"
            src="https://thrutheyears.s3.us-east-2.amazonaws.com/thrutheyears/music6.jpg"
            alt="music"
          />
        </div>
       
       
      </div>
      
    </div>
  );
};

export default MyMusic;

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
    justifyContent:"center",
    alignItems:"center"
  },
};
