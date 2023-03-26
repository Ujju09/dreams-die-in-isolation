

import { GetDreams } from "../config"
import { TwitterIconStatic, LinkedinIconStatic } from "@/Components/svg";


import 'animate.css';

export default async  function  Page(){ 
    //Fetch data from firebase
    const data = await GetDreams();
     return (      
            <div style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'center',
            display: 'flex',
            flexDirection: 'column',     
            
          }}> 
          <div></div>
            <h1 > You Can Also Help Someone <span>
            <div className="subheading">
                Explore the dreams of others and help them.
            </div>
              
              </span></h1>
            
          
          {
            data.map((item, index) => {
                return (
                    <div key={index} className= "bluebox animate__animated animate__fadeInUp">
                    <h5>{item.dream} <span>
                    <p>{item.obstacles}</p>
                      </span></h5>
                    {
                      item.social ==="Twitter" ? <a href={`https://twitter.com/${item.id}`} >
                      <TwitterIconStatic />
                      </a> : <a href={`https://www.linkedin.com/in/${item.id}`} >
                      <LinkedinIconStatic />
                      </a>
                    }

            

                  
                    </div>
                )
            })
          } 
          <div></div>       
          </div>
         
    )
}