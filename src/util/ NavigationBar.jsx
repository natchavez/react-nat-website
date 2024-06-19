import { Container, Nav, Navbar } from 'react-bootstrap';

export const NavigationBar = () => {
  return (
    <Navbar
      sticky='top'
      className='grn-bg-color default-font-style'
      data-bs-theme='dark'
    >
      <Container fluid className='ps-5'>
        <Navbar.Toggle aria-controls='basic-navbar-nav' />
        <Navbar.Collapse id='basic-navbar-nav'>
          <Nav className='me-auto'>
            <Nav.Link href='#home' className='ms-0'>
              Home
            </Nav.Link>
            <Nav.Link href='#link'>About</Nav.Link>
            <Nav.Link href='#link'>Portfolio</Nav.Link>
            <Nav.Link href='#link'>Contact</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
