// import React from 'react';
// import Button from 'react-bootstrap/Button';
// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';
// import Offcanvas from 'react-bootstrap/Offcanvas';

// function NavbarSection() {
//   return (            // 'sm', 'md', 'lg', 'xl', 'xxl'
//     <>
//       {[false,].map((expand) => (
//         <Navbar key={expand} expand={expand} className="bg-body-tertiary mb-3">
//           <Container fluid>
//             <Navbar.Brand href="#">Krishi Mandi</Navbar.Brand>
//             <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-${expand}`} />
//             <Navbar.Offcanvas
//               id={`offcanvasNavbar-expand-${expand}`}
//               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
//               placement="end"
//             >
//               <Offcanvas.Header closeButton>
//                 <Offcanvas.Title id={`offcanvasNavbarLabel-expand-${expand}`}>
//                   Offcanvas
//                 </Offcanvas.Title>
//               </Offcanvas.Header>
//               <Offcanvas.Body>
//                 <Nav className="justify-content-end flex-grow-1 pe-3">
//                   <Nav.Link href="#action1">Home</Nav.Link>
//                   <Nav.Link href="#action2">Link</Nav.Link>
//                   <NavDropdown
//                     title="Dropdown"
//                     id={`offcanvasNavbarDropdown-expand-${expand}`}
//                   >
//                     <NavDropdown.Item href="#action3">Action</NavDropdown.Item>
//                     <NavDropdown.Item href="#action4">
//                       Another action
//                     </NavDropdown.Item>
//                     <NavDropdown.Divider />
//                     <NavDropdown.Item href="#action5">
//                       Something else here
//                     </NavDropdown.Item>
//                   </NavDropdown>
//                 </Nav>
//                 <Form className="d-flex">
//                   <Form.Control
//                     type="search"
//                     placeholder="Search"
//                     className="me-2"
//                     aria-label="Search"
//                   />
//                   <Button variant="outline-success">Search</Button>
//                 </Form>
//               </Offcanvas.Body>
//             </Navbar.Offcanvas>
//           </Container>
//         </Navbar>
//       ))}
//     </>
//   );
// }

// export default NavbarSection;




import React from 'react';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Offcanvas from 'react-bootstrap/Offcanvas';
import './Navbar.css';
import logo from './logo.png';

function SingleNavbarWithOffcanvas() {
  return (
    <Navbar  bg="light" expand="lg" style={{ position:'fixed', width:'100%   ', backgroundColor:"blueviolet" }   } >
      <Container>
        <Navbar.Brand href="#">  <img src={logo} alt="IMage"  style={{width:'90px', height:'50px'}} /> </Navbar.Brand>
        <Navbar.Toggle aria-controls="offcanvasNavbar" />
        <Navbar.Collapse id="offcanvasNavbar">
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Product</Nav.Link>
            <NavDropdown title="Services" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Upload Crop</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Crop grading</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Farming Calculator</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" >
              About us
            </Nav.Link>
            <Nav.Link href="#" >
              Contact us
            </Nav.Link>
          </Nav>
          <Form className="d-flex">
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Container>
      <Offcanvas
        placement="end"
        aria-labelledby="offcanvasNavbar"
        show={false} // Set to true to show the offcanvas by default
      >
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          <Nav className="flex-column">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action2">Another action</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action3">Something else here</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#" disabled>
              Disabled
            </Nav.Link>
          </Nav>
        </Offcanvas.Body>
      </Offcanvas>
    </Navbar>
  );
}

export default SingleNavbarWithOffcanvas;
