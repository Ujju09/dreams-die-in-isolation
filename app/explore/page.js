
import { GetDreams } from "../config"
import 'animate.css';
export default async  function  Page(){ 
    
    
    //Fetch data from firebase
    const data = await GetDreams();
    
     return (      
            <div style={{
            alignContent: 'center',
            alignItems: 'center',
            justifyContent: 'start',
            display: 'flex',
            flexDirection: 'column',
            
          }}> 
            <h1 > You Can Also Help Someone</h1>
            
            <div className="subheading">
                Explore the dreams of others and help them.
            </div>
          
          
          {
            data.map((item, index) => {
                return (
                    <div key={index} className= "bluebox animate__animated animate__fadeInUp">
                    <h5>{item.dream}</h5>
                    <p>{item.obstacles}</p>
                    </div>
                )
            })
          }        
          </div>
         
    )
}