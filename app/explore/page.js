

import { GetDreams } from "../config"
import { TwitterIconStatic, LinkedinIconStatic } from "@/Components/svg";


import 'animate.css';

export default async  function  Page(){ 
    //Fetch data from firebase
    const data = await GetDreams();

     return (      
           
         <>
          <div className="dreams-box">

            <h1 > You Must Help Someone
            
              
             </h1>
              <div className="subheading">
                Explore the dreams of others and help them.
            </div>
          
          {
            data.map((item, index) => {
            
                return (
                    <div key={index} className= "bluebox animate__animated animate__fadeInUp">
                    <h5>{item.dream} 
                    <p>{item.obstacles}</p>
                      </h5>
                    {
                      item.social ==="Twitter" ? <a href={`https://twitter.com/${item.id}`} target="_blank" >
                      <TwitterIconStatic />
                      </a> : <a href={`https://www.linkedin.com/in/${item.id}`} target="_blank" >
                      <LinkedinIconStatic />
                      </a>
            }
                  
                    </div>
                )
            })
          } 
          </div>
            </>
             
      
         
    )
}