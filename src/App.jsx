import { Button } from 'react-bootstrap';
import './App.css';
import { HomePage } from './layouts/HomePage/HomePage';
import { AboutPage } from './layouts/AboutPage/AboutPage';
import { PortfolioPage } from './layouts/PortfolioPage/PortfolioPage';
import { ContactPage } from './layouts/ContactPage/ContactPage';

const App = () => {
  return (
    <div>
      <HomePage />
      <AboutPage />
      <PortfolioPage />
      <ContactPage />
    </div>
  );
};

export default App;
