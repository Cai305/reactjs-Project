// import React, { useState } from 'react';
// import {
//   MDBNavbar,
//   MDBContainer,
//   MDBIcon,
//   MDBNavbarNav,
//   MDBNavbarItem,
//   MDBNavbarLink,
//   MDBNavbarToggler,
//   MDBCollapse,
// } from 'mdb-react-ui-kit';
// import { Link } from 'react-router-dom';

// export default function Navbar() {
//   const [showNavCentred, setShowNavCentred] = useState(false);

//   return (
//     <MDBNavbar expand='lg' light bgColor='secondary'  className='sticky-top '>
//       <MDBContainer fluid>
//         <MDBNavbarToggler
//           type='button'
//           data-target='#navbarCenteredExample'
//           aria-controls='navbarCenteredExample'
//           aria-expanded='false'
//           aria-label='Toggle navigation'
//           onClick={() => setShowNavCentred(!showNavCentred)}
//         >
//           <MDBIcon icon='bars' fas />
//         </MDBNavbarToggler>

//         <MDBCollapse navbar show={showNavCentred} center id='navbarCenteredExample'>
//           <MDBNavbarNav fullWidth={false} className='mb-1 mb-lg-0'>

//           <Link to="/">
//             <MDBNavbarItem>
//                 <MDBNavbarLink active aria-current='page' href='#'>
//                   HOME
//                 </MDBNavbarLink>
//               </MDBNavbarItem>
//           </Link>



            
//           <Link to="/about">
//             <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 ABOUT
//               </MDBNavbarLink>
//             </MDBNavbarItem>
//           </Link>


  

  
// <Link to="/resume">

//           <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 RESUME
//               </MDBNavbarLink>
//             </MDBNavbarItem>

// </Link>
  
// <Link to="/contact">

//           <MDBNavbarItem>
//               <MDBNavbarLink active aria-current='page' href='#'>
//                 CONTACT
//               </MDBNavbarLink>
//           </MDBNavbarItem>

// </Link>
  

// <Link to="/projects">

// <MDBNavbarItem>
//     <MDBNavbarLink active aria-current='page' href='#'>
//       PROJECTS
//     </MDBNavbarLink>
//   </MDBNavbarItem>

// </Link>

    

//           </MDBNavbarNav>
//         </MDBCollapse>
//       </MDBContainer>
//     </MDBNavbar>
//   );
// }


import { Container, Button, Link } from 'react-floating-action-button';
import LinkButton from "./linkButton"

export default function Navbar() {
  //js code here

  return (<>
<Container>

            <Link 
                  tooltip="Projects"
                  href="/projects"
                  icon="fa fa-toolbox"
            />

            <Link 
                  tooltip="Resume"
                  href="/resume"
                  icon="fa fa-user-astronaut"
            />

            <Link 
                  tooltip="About"
                  href="/about"
                  icon="fa fa-envelope"
            />

            <Link href="/contact"
                tooltip="contact"
                icon="far fa-sticky-note" 
            />


            <Link href="/"
                tooltip="home"
                icon="fas fa-home" 
                />


                
            <Button
               className="fab-item btn btn-link btn-sm text-white"
                tooltip="The big plus button!"
                icon="fas fa-plus"
                rotate={true}
         
              />
        </Container>
  
  </>);
}