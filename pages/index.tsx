import Head from "next/head";
import NavBar from "../components/navbar";
import styles from "../styles/home.module.css";
import { Button, createMuiTheme, ThemeProvider } from "@material-ui/core";
import { Link as ScrollLink, Element, animateScroll } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLongArrowAltDown } from "@fortawesome/free-solid-svg-icons";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Ali Rasouli - Portfolio</title>
      </Head>
      <NavBar />
      <div className={styles.container}>
        <div className={styles.section1}>
          <span className={styles.title}>&lt;Hello/&gt;</span>
          <span className={styles.name}>I'm Ali</span>
          <div className={styles.knowMeContainer}>
            <ScrollLink
              to="section1"
              spy={true}
              smooth={true}
              duration={500}
            >
              <Button variant="outlined" color="primary">
                <div className={styles.knowMe}>Know me better</div>
              </Button>
            </ScrollLink>
          </div>
        </div>
        <Element name="section1">
          <div className={styles.section2}>
            <span className={styles.skills}>Experienced mobile developer</span>
            <span className={styles.currentJob}>
              Currently working as a Flutter developr at
              <span className={styles.companyName}>
                <Button
                  onClick={() => window.open("https://araad.co/", "_blank")}
                  variant="outlined"
                  color="primary"
                  className={styles.companyName}
                >
                  ARAD
                </Button>
              </span>
            </span>
            <div className={styles.mySkillsBtnContainer}>
              <ScrollLink
                to="section2"
                spy={true}
                smooth={true}
                duration={500}
              >
                <Button
                  variant="outlined"
                  color="primary"
                  className={styles.mySkillsBtn}
                >
                  My Skills
                  <span className={styles.mySkillsBtnIcon}>
                    <FontAwesomeIcon icon={faLongArrowAltDown} />
                  </span>
                </Button>
              </ScrollLink>
            </div>
          </div>
        </Element>

        <Element name="section2">
          <div className={styles.section3}>

          </div>
        </Element>
      </div>
    </div>
  );
}
