import NavBar from './components/NavBar'
import Hero from './components/Hero'
import styles from './App.module.css'

function App(){
  return(
  <div className={`${styles.bg}`}>
    <NavBar />
    <Hero />
  </div>)
}
export default App;
