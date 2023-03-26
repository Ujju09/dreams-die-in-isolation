"use client";
import {useState} from 'react';
import {AddDreams} from '../config.js';
import { useRouter } from "next/navigation";




export default function Modal(props) {

    const [modalIsOpen, setModalIsOpen] = useState(props.isOpen);
    const router = useRouter();
    const [social, setSocial] = useState("");
    const handleSubmit =  (e) => {
        e.preventDefault();
        if (social === ""){
            alert("Please select a social media option.");
            return;

        }else{
            AddDreams(props.dream, props.obstacle, social).then((res) => {
                router.push('/explore');
              });
        }   
      }
    const handleSocial = (name) => {
        setSocial(name);

    }


  return (
    <>     
        {modalIsOpen ? (
        <div
          className='modal'
        >
          <div
            className='modal-content'
          >
            <div
              className='close'
              onClick={() => setModalIsOpen(!modalIsOpen)}
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
         
            <li value="Twitter" onClick={(e)=> handleSocial("Twitter")}><a href="#">
            <svg width="40px" height="40px" viewBox="328 355 335 276" xmlns="http://www.w3.org/2000/svg">
  <path d="
    M 630, 425
    A 195, 195 0 0 1 331, 600
    A 142, 142 0 0 0 428, 570
    A  70,  70 0 0 1 370, 523
    A  70,  70 0 0 0 401, 521
    A  70,  70 0 0 1 344, 455
    A  70,  70 0 0 0 372, 460
    A  70,  70 0 0 1 354, 370
    A 195, 195 0 0 0 495, 442
    A  67,  67 0 0 1 611, 380
    A 117, 117 0 0 0 654, 363
    A  65,  65 0 0 1 623, 401
    A 117, 117 0 0 0 662, 390
    A  65,  65 0 0 1 630, 425
    Z"
    />
</svg>
               </a></li>
            <li value="LinkedIn" onClick={(e)=> handleSocial("LinkedIn")}><a href="#">
            <svg width="48px" height="48px" viewBox="0 0 48 48" version="1.1" xmlns="http://www.w3.org/2000/svg">

    <g id="Icon/Social/linkedin-color" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
        <path d="M20.9716667,33.5527338 L25.001,33.5527338 L25.001,27.1328007 C25.001,25.439485 25.3213333,23.7988354 27.4206667,23.7988354 C29.491,23.7988354 29.517,25.7351486 29.517,27.2404662 L29.517,33.5527338 L33.5506667,33.5527338 L33.5506667,26.4341413 C33.5506667,22.9381777 32.796,20.2505391 28.711,20.2505391 C26.7483333,20.2505391 25.432,21.3265278 24.8943333,22.3471839 L24.839,22.3471839 L24.839,20.5725357 L20.9716667,20.5725357 L20.9716667,33.5527338 Z M16.423,14.1202696 C15.1273333,14.1202696 14.0823333,15.1682587 14.0823333,16.4595785 C14.0823333,17.7508984 15.1273333,18.7992208 16.423,18.7992208 C17.7133333,18.7992208 18.761,17.7508984 18.761,16.4595785 C18.761,15.1682587 17.7133333,14.1202696 16.423,14.1202696 L16.423,14.1202696 Z M14.4026667,33.5527338 L18.4406667,33.5527338 L18.4406667,20.5725357 L14.4026667,20.5725357 L14.4026667,33.5527338 Z M9.76633333,40 C8.79033333,40 8,39.2090082 8,38.2336851 L8,9.76631493 C8,8.79065843 8.79033333,8 9.76633333,8 L38.234,8 C39.2093333,8 40,8.79065843 40,9.76631493 L40,38.2336851 C40,39.2090082 39.2093333,40 38.234,40 L9.76633333,40 Z" id="Shape" fill="#007BB5"></path>
    </g>
</svg>
                              
                </a></li>
        </ul>
    </div>
        <input type="text" placeholder={
            social === "Twitter" ? "Twitter Username" : social === "LinkedIn" ? "LinkedIn Username" : "Choose a social network"
        }></input>
        <button className='sharebutton' onClick={(e)=>{
            handleSubmit(e);
        }}>
                Share
            </button>
    </div>
          </div>
          
        </div>
      ) : null}
      
    </>
  );
}