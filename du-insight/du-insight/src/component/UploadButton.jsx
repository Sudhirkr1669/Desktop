import React, { useState,useEffect } from 'react';
import { app } from '../firebaseConfig';
// import { getDatabase, ref, set } from "firebase/database";
import { getStorage, ref, uploadBytes,listAll, getDownloadURL} from "firebase/storage";
import {v4} from "uuid";
// import './component/UploadButton.css';
 import Icon from './Icon';
//  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"></link> 

function UploadButton() {
    const [video, setVideo] = useState(null);
    const[imageList,setImageList]=useState([]);
    const storage = getStorage(app);

    const listAllRef=ref(storage, "images/")
    
 


    const videoHandler = (e) => {
        console.log(e);
        setVideo(e.target.files[0]);
        // console.log(video);
    }

    const uploadHandler = () => {
;
        const storageRef = ref(storage, `images/${video.name + v4()}`);
        
        // const metadata = {
        //     contentType: 'image/pdf',
        // };
        if(video===null){
            return;
        }
          uploadBytes(storageRef, video).then((snapshot)=>{
           getDownloadURL(snapshot.ref).then((url)=>{
            setImageList((prev)=>[url,...prev])
           })
          })
          ;
        
    }
    useEffect(()=>{
      listAll(listAllRef).then((response)=>{
        response.items.forEach((item)=>{
            getDownloadURL(item).then((url)=>{
                setImageList((prev)=>[url,...prev])
            })
        })
      })
    },[])


    return (
        <div>
             <div className="uploadbutton" style={{position:"fixed",display:"flex",marginLeft:"2rem",marginTop:"1rem",horizontalLine:"2rem",bottom:"0rem",backgroundColor:"white",height:"15vh",width:"95vw",alignItems:"center",justifyContent:"center",borderRadius:"3rem",zIndex:"1"}} >
            <label  htmlFor='uploadbutton'>
                <input style={{padding:"3rem",fontSize:"3rem"}}onChange={videoHandler} type="file" id="uploadbutton" ></input>
                <button style={{marginLeft:"20rem",marginBottom:"4rem",padding:"1rem",fontSize:"3rem",borderRadius:"2rem",right:"30%"}} onClick={uploadHandler} variant="contained" component="span">Upload video</button>
            </label>
            </div>
            {
                imageList.map((url,index)=>{
                    return <div key={index}  style={{}}> <video controls style={{marginLeft:"14rem",marginBottom:"3rem",height:"40vh",width:"50vw",marginTop:"2rem", display:"flex",justifyContent:"center",alignItems:"center",backgroundColor:"white"}}>
                    <source src={url} type="video/mp4"></source>
                </video>
                <Icon></Icon>
                </div>
                
                       
                })
                 
            }
        
            
        </div>
    )
}

export default UploadButton;
