"use client";
import Button from 'react-bootstrap/button';

import { useState } from 'react';
import {AddDreams} from './config.js';
import { useRouter } from "next/navigation";


export default function Page() {
  const router = useRouter();
  const [dream, setDream] = useState("");
  const [obstacle, setObstacle] = useState("");

  const [click, setClick] = useState(false);


  const [loading, setLoading] = useState(false);

  const handleSubmit =  (e:any) => {
    e.preventDefault();
    AddDreams(dream, obstacle).then((res:any) => {
      console.log(res);
      alert("Dream shared successfully");
      router.push("/explore");
    });
   
  }

  const handleChange = (event:any) => {
    const { name, value } = event.target;
    if (name === "dream"){
      setDream(value);
    }
    if (name === "obstacle"){
      setObstacle(value);
    }
  };

  function buttonEvent(){
    console.log("Button clicked");
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

      <div style={{
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: '0',
        padding: '0',
      }}>

        <div style={{
          
          backgroundColor: '#f5f5f5',
          height: '100vh',
          width: '10vw',
        }}>

        </div>
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
       >
       
        <input type="textbox" name="dream" id="dream" placeholder='Your Dream' value={dream} onChange = {handleChange}/>
        <input type="text" name="obstacle" id="obstacle" placeholder='Obstacle you face' value={obstacle} onChange= {handleChange} />
       </div>

      

       </div>
       

        <Button variant="secondary" onClick={buttonEvent} >

          {click ? "Clear" : "Compose"}
        </Button>

      
       {
          click ? <div className='box'>
            <div style={
              {
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                textAlign: 'start',
                justifyContent: 'center',
                alignContent: 'center',
              }
            }>
            {dream } {obstacle}
            <div style={{
              width: '100%',
              backgroundColor: 'gray',
              height: '1px',
            }}></div>
            <div style={{
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
            }}>
            <button className='sharebutton' onClick={handleSubmit}>
              Share Anonymously
            </button>
              </div>
            
              </div>
            
            
            </div> : <div></div>
        }
      </div>
      <div style={{
          
          backgroundColor: '#f5f5f5',
          height: '100vh',
          width: '10vw',
        }}>

      </div>

      </div>
      
    );
  }