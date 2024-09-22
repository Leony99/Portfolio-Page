import Background from './components/Background';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Stack from './components/Stack';
import Portfolio from './components/Portfolio';
import Experience from './components/Experience';
import Footer from './components/Footer';

import styles from './App.module.css';

function App() {

  return (
      <div className={styles.app}>
        <Background />
        <Navbar />
        <Hero />
        <Stack />
        <Portfolio />
        <Experience />
        <Footer />
      </div>
  )
}

export default App
