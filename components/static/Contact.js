import React from 'react';
import styles from '../sass/contact.scss';

class Contact extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <div id={styles.info}>
          <div id={styles.socialMedia}>
          </div>
          <div id={styles.contactInfo}>
          </div>
        </div>
        <div id={styles.contactBox}>
        </div>
      </div>
    )
  }
}

export default Contact;