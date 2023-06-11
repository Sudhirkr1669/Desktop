import React, { useState,useRef} from 'react';
import MapsUgcOutlinedIcon from '@mui/icons-material/MapsUgcOutlined';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import DeleteOutlineOutlinedIcon from '@mui/icons-material/DeleteOutlineOutlined';
 import { getDatabase,ref,set,onValue, child } from "firebase/database";
import { app } from '../firebaseConfig';
import {v4} from "uuid";
// import { collection, setDoc,doc } from "firebase/firestore";
// import { getFirestore } from "firebase/firestore";


function Icon(props) {
  const db = getDatabase(app);
   const inputRef=ref(db,`comment/${v4()}`)
  //  const newRef=push(inputRef)
  const [like, setLike] = useState(null);
  const[comment,setComment]=useState([]);
  const [message,setMessage]=useState("");
  const modal=useRef();
  const likes = () => {
    console.log(setLike(like + 1));
  }
  const commentValue=(e)=>{
      setMessage(e.target.value);
  }
  const post=()=>{
   set(inputRef,{
       comment:message
   })
 
onValue(inputRef, (snapshot) => {
  snapshot.forEach((childSnapshot) => {
    const childKey = childSnapshot.key;
    const childData = childSnapshot.val();
    console.log(childKey);
    console.log(childData);
    setComment([childData]);
  });
}, {
  onlyOnce: true
});
  modal.current.style.display="none";
  }
  

  return (
   <div> <div style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-between", width: "47vw", marginLeft: "14rem", backgroundColor: "white", padding: "1rem", marginTop: "-3rem" }}>
      <span>{like}
        <ThumbUpOutlinedIcon onClick={likes} style={{ marginLeft: ".5rem",fontSize:"4rem"}}></ThumbUpOutlinedIcon></span>
      <MapsUgcOutlinedIcon style={{fontSize:"4rem"}} onClick={() => { { modal.current.style.display = "block" } }}></MapsUgcOutlinedIcon>
        
      <div className='modal' ref={modal} style={{display:"none"}}>
         <input onChange={commentValue} style={{height:'2rem'}} value={message}></input>
         <button onClick={post} style={{height:'2.5rem',fontSize:"1rem"}}>Post</button>
         
      </div>
       </div>
      
        <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-between", width: "47vw", marginLeft: "14rem", backgroundColor: "white", padding: "1rem", marginTop: "-3rem" }}>
                  <p >{comment}</p>
        </div> 
        {/* {
          comment.map((item,index)=>{
            return <div  style={{ display: "flex", alignItems: "center", justifyContent: "center", justifyContent: "space-between", width: "27.7vw", marginLeft: "30rem", backgroundColor: "white", padding: "1rem", marginTop: "-3rem" }}>
            <p key={index}>{item}</p>
  </div>
          })
        } */}
        
     </div>

  )
}

export default Icon;
