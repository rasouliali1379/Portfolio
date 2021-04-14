import Link from "next/link";
import { useScrollPosition } from "../utils/ScrollUtils";
import { useState } from "react";
import { Button } from "@material-ui/core";
import styles from "../styles/navbar.module.css";

const NavBar = () => {
  const [elevateNavBar, setElevateNavBar] = useState(false);

  useScrollPosition(
    async ({ currPos }) => {
      console.log(Math.round(currPos.y));

      await delay(200).then(() => {
        const isShow = Math.round(currPos.y) < 0;
        if (isShow !== elevateNavBar) setElevateNavBar(isShow);
      });
    },
    [elevateNavBar]
  );

  function delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  return (
    <div className={elevateNavBar ? styles.navElevated : styles.nav}>
      <div className={styles.navLeading}>
        <img
          className={elevateNavBar ? styles.profileNavElevated : styles.profile}
          src="/images/profile.png"
          alt="Picture of the author"
          draggable="false"
        />
        <div className={styles.navLeadingTitle}>Ali Rasouli</div>
      </div>

      <div className={styles.navItemsContainer}>
        <div className={styles.itemContainer}>
          <Link href="/">
            <Button color="primary">
              <div className={styles.navItem}>Home</div>
            </Button>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link href="/experiences">
            <Button color="primary">
              <div className={styles.navItem}>Experiences</div>
            </Button>
          </Link>
        </div>
        <div className={styles.itemContainer}>
          <Link href="/projects">
            <Button color="primary">
              <div className={styles.navItem}>Projects</div>
            </Button>
          </Link>
        </div>

        <div className={styles.itemContainer}>
          <Link href="/contact_me">
            <Button color="primary">
              <div className={styles.navItem}>Contact me</div>
            </Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
