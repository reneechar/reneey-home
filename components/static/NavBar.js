import React from 'react';
import ReactDOM from 'react-dom';
import styles from '../sass/navbar.scss';
import {Link} from 'react-router';


class NavBar extends React.Component {
  constructor() {
    super();
    this.uncheck = this.uncheck.bind(this);
  }
  uncheck() {
    ReactDOM.findDOMNode(this.refs.checkbox).checked = false;
  }
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
            <li id={styles.projectsLi}>
              <Link to='/projects' className={styles.links}>PROJECTS</Link>
              <div className={styles.underline} id={styles.projectsLine}>
              </div>
            </li>
            <li id={styles.contactLi}>
              <Link to='/contact' className={styles.links}>CONTACT</Link>
              <div className={styles.underline} id={styles.contactLine}>
              </div>
            </li>
          </ul>
        </div>
        <div className={styles.outerMenu}>
          <input className={styles.checkboxToggle} type="checkbox" ref="checkbox" />
          <div className={styles.hamburger}>
            <div></div>
          </div>
          <div className={styles.menu}>
            <div>
              <div>
                <ul>
                  <li><Link to='/' className={styles.link} onClick={this.uncheck}>HOME</Link></li>
                  <li><Link to='/about' className={styles.link} onClick={this.uncheck}>ABOUT</Link></li>
                  <li><Link to='/projects' className={styles.link} onClick={this.uncheck}>PROJECTS</Link></li>
                  <li><Link to='/contact' className={styles.link} onClick={this.uncheck}>CONTACT</Link></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default NavBar;