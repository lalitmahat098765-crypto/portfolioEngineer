import NavBar from "../components/NavBar";
import { Outlet } from "react-router-dom";
import styles from './App.module.css'

function App(){
  return(
  <div className={`${styles.bg}`}>
    <NavBar />
    <Outlet />
  </div>)
}

export default App;
