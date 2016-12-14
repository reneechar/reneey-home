import React from 'react';
import styles from '../sass/home.scss';

class Home extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <div id={styles.banner}>
          <div>
            <h1 id={styles.header}>Always Be Creating</h1>
          </div>
        </div>
        <div id={styles.content}>
          <div>
            <h3 id={styles.description}>Hi! My name is Renee and I love creating responsive and functional web applications.</h3>
          </div>
        </div>
      </div>
    )
  }
}

export default Home;