
import { GetDreams } from "../config"

export default async  function  Page(){ 
    
    
    //Fetch data from firebase
    const data = await GetDreams();
    
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
            <h1 > You Can Also Help Someone</h1>
            
            <div className="subheading">
                Explore the dreams of others and help them.
            </div>
          
          
          {
            data.map((item, index) => {
                return (
                    <div key={index} className= "bluebox">
                    <h5>{item.dream}</h5>
                    <p>{item.obstacles}</p>
                    </div>
                )
            })
          }
    
           
          </div>
          <div style={{
          
          backgroundColor: '#f5f5f5',
          height: '100vh',
          width: '10vw',
        }}>

      </div>
          </div>
    )
}