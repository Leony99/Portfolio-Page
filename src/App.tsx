import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';

import styles from './App.module.css';
import PortfolioSection from './components/PortfolioSection';

function App() {

  return (
      <div className={styles.app}>
        <Background />
        <Navbar />
        <Hero />
        <Stack />
        <PortfolioSection />
        <Portfolio />
      </div>
  )
}

export default App
