import React from 'react';
import styles from '../sass/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <h1 id={styles.title}>Contact Me</h1>
        <div id={styles.picture}>
        </div>
        <div id={styles.socialMedia}>
          <a href='https://www.linkedin.com/in/renee-char-42b2b3a0'>
            <div id={styles.linkedIn} className={styles.icons}></div>
          </a>
          <a href='https://github.com/reneechar'>
            <div id={styles.gitHub} className={styles.icons}></div>
          </a>
          <a href='https://medium.com/@rchar20'>
            <div id={styles.medium} className={styles.icons}></div>
          </a>
        </div>
        <div id={styles.contactBox}>
          <a href="mailto:reneeycontact@gmail.com">reneeycontact@gmail.com</a>
        </div>
      </div>
    )
  }
}

export default Contact;