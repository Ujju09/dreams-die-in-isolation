import { useState } from 'react';

import Button from 'react-bootstrap/Button';
import React from 'react';
import {AddDreams} from '../config.js';
import { useRouter } from "next/navigation";

import {LinkedinIconStatic, TwitterIconStatic} from './svg';

export default function WorkingComponent() {
   
    const [dream, setDream] = useState("");
    const [obstacle, setObstacle] = useState("");
    const [userId, setUserId] = useState("");
  
    const [click, setClick] = useState(false);
    const router = useRouter();
    const [social, setSocial] = useState("");
    const handleSubmit =  (e:any) => {
        e.preventDefault();
        if (social === "" && userId === "" ){
            alert("Please select a social media channel and fill in the userid.");
            return;
        }else{
            AddDreams(dream, obstacle, social, userId).then((res) => {
                router.push('/explore');
              });
        }   
      }
    const handleSocial = (name:any) => {
        setSocial(name);

    }
  
    
  
    const handleChange = (event:any) => {
      const { name, value } = event.target;
      if (name === "dream"){
        setDream(value);
      }
      if (name === "obstacle"){
        setObstacle(value);
      }

      if (name === "userId"){
        setUserId(value);
      }
    };
  
    function buttonEvent(){
      if (dream === "" && obstacle === ""){
        alert("We always have a dream. It can't be empty");
      }
  
      if (dream !== "" && obstacle !== ""){
        setClick(!click);
      }
      if (click===true){
        setDream("");
        setObstacle("");
      }
    }

    return (
        <>
         <div style={{
     alignContent: 'center',
     alignItems: 'center',
     justifyContent: 'start',
     display: 'flex',
     flexDirection: 'column',
     
   }}> 
        <h1 > Dreams Die In Isolation</h1>
     
     <div className="subheading">
         Share your dreams and its obstacles. Someone might just help you.
     </div>
    <div style={{
       display: 'flex',
       flexDirection: 'column',
       justifyContent: 'start',

      gap: '2rem',
       paddingBottom: '2rem',
    }}
    >
    <div style={{
       display: 'flex',
       flexDirection: 'column',
       gap: '2rem',
       textAlign: 'start',
    }}
    className='animate__animated animate__fadeInUp'
    >
    
     <input type="textbox" name="dream" id="dream" placeholder='Your Dream' value={dream} onChange = {handleChange}/>
     <textarea  name="obstacle" id="obstacle" placeholder='Obstacle you face' value={obstacle} onChange= {handleChange} />
    </div>

   

    </div>
    

     <Button variant="secondary" className='animate__animated animate__fadeIn animate__delay-2s' onClick={buttonEvent} >

       {click ? "Clear" : "Compose"}
     </Button>

  

     {
      click ?   (
        <div
          className='modal'
        >
          <div
            className='modal-content'
          >
            <div
              className='close'
              onClick={() => setClick(!click)}
            >
              &times;
            </div>
            <h2>
                The Sharing Part.
            </h2>
            <p>
                For people to help. They need a way to contact you. We have provided a few options below.
            </p>
           
            <div style={{
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
        }}>


       
        <div className="social-icons">
        <ul style={{
            display: 'flex',
            flexDirection: 'row',
        }}>
         
            <li value="Twitter" onClick={(_)=> handleSocial("Twitter")}><a href="#">
                <TwitterIconStatic />
               </a></li>
            <li value="LinkedIn" onClick={(_)=> handleSocial("LinkedIn")}><a href="#">
            
                <LinkedinIconStatic />          
                </a></li>
        </ul>
    </div>
        <input type="text" name='userId' placeholder={
            social === "Twitter" ? "Twitter Username" : social === "LinkedIn" ? "LinkedIn Username" : "Choose a social network"
        } value  ={userId} onChange= {handleChange}></input>
        <button className='sharebutton' onClick={(e)=>{
            handleSubmit(e);
        }}>
                Share
            </button>
    </div>
          </div>
          
        </div>
      ) : null}
     
   
        </div>
        </>
        
    )
}