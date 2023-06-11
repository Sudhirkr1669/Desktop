import React from 'react';
import UploadButton from './component/UploadButton';
import './App.css';
// import Icon from './component/Icon';

function App() {


  return (
    <div className='App'>
      <div style={{position:"sticky",width:"95vw",zIndex:"1",marginLeft:"2rem", fontSize:"3rem",justifyContent:"center",display:"flex",alignItems:"center",backgroundColor:"#d1d5db"}}><div style={{transition:"height 2s linear 0.5s"}}>Shaheed Bhagat Singh Evening college News</div>
      </div>
      <hr style={{width:'95vw',marginLeft:"2rem",background:"lime",height:".5rem",borderColor:"lime"}}></hr>
      <UploadButton></UploadButton>
     
    </div>
  )
}

export default App;
