import React from 'react'
import './home.css';
import Image from "../../components/image/image";
import { MDBRow, MDBCol } from 'mdb-react-ui-kit';

function Home() {
  return (<>
  <div className="bg"></div>
    <div className='bg-image'>
    
      <div className='mask' style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }}>
        <div className="d-flex justify-content-center">
        <Image/>

        </div>
        <p className='text-white text-center'>Can you see me?</p>

        <div className='d-flex row justify-content-center align-items-center h-100'>

            <MDBRow>

              <MDBCol size='12' className='myImage row justify-content-center align-items-center h-10'>
          
              </MDBCol>
              <MDBCol size='12'>
              </MDBCol>
            
            </MDBRow>
          
        </div>
      </div>
    </div>
  </>
   
  );
}

export default Home;