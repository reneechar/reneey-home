import React from 'react';
import styles from '../sass/footer.scss';
import {Link} from 'react-router';


class Footer extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <ul id={styles.listUl}>
          <li id={styles.copyright}>© 2016 Renee Y Char</li>
          <li><Link to='/' className={styles.links}>HOME</Link></li>
          <li><Link to='/about' className={styles.links}>ABOUT</Link></li>
          <li><Link to='/contact' className={styles.links}>CONTACT</Link></li>
        </ul>
      </div>
    )
  }
}

export default Footer;