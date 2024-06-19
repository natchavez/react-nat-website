import { Button, Container } from 'react-bootstrap';

export const HomePage = () => {
  return (
    <Container fluid className='full-page'>
      <div className='position-absolute bottom-0 start-0 ps-5'>
        <div className='ps-3 pb-3'>
          <p className='fw-light abt-fs'>
            Hi I'm <span className='grn-font-color'>Nat</span>.
            <br />
            I'm a software engineer.
          </p>
        </div>
      </div>
      <div className='position-absolute bottom-0 end-0 pe-5 pb-2'>
        <div className='ps-3 pb-5'>
          <Button
            variant='outline-dark'
            size='lg'
            type='button'
            className='border-rad-0'
          >
            <span className='ps-4 pe-4'>explore</span>
          </Button>
        </div>
      </div>
    </Container>
  );
};
