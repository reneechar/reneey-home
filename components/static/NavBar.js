import React from 'react';
import styles from '../sass/navbar.scss';
import {Link} from 'react-router';


class NavBar extends React.Component {

  render() {
    return (
      <div id={styles.container}>
        <Link to='/' id={styles.logoLink}>
          <div id={styles.logo}>
          RY
          </div>
        </Link>

        <div id={styles.linkContainer}>
          <ul id={styles.linkUl}>
            <li id={styles.homeLi}>
              <Link to='/' className={styles.links}>HOME</Link>
              <div className={styles.underline} id={styles.homeLine}>
              </div>
            </li>
            <li id={styles.aboutLi}>
              <Link to='/about' className={styles.links}>ABOUT</Link>
              <div className={styles.underline} id={styles.aboutLine}>
              </div>
            </li>
            <li id={styles.contactLi}>
              <Link to='/contact' className={styles.links}>CONTACT</Link>
              <div className={styles.underline} id={styles.contactLine}>
              </div>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}

export default NavBar;