
import styles from './Hero.module.css'
function Hero() {
  return (
    <section className={`${styles.hero}`}>
      <div className={`${styles.herocontent}`}>
        <h1 className={`${styles.heroheading}`}>Civil Engineer</h1>
        <p className={`${styles.herosubheading}`}>Infrastructure & Structural Design</p>
        <hr></hr>
        <p className={`${styles.heroparagrap}`}>Passionate about sustainable and large scale infrastructure projects.</p>
        <div>
          <button type="button" className={`${styles.herobutton}`}>View Projects</button>
          <button type="button" className={`${styles.herobutton}`}>Download CV</button>
        </div>
      </div>
    </section>
  );
}

export default Hero;

