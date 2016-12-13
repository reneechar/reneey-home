import React from 'react';
import styles from '../sass/notFound.scss';
import {Link} from 'react-router';

class NotFound extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <h1 id={styles.title}>404 Error</h1>
        <p id={styles.description}>The page you were looking for does not exist.</p>
        <Link to='/' id={styles.link}>Back</Link>
      </div>
    )
  }
}

export default NotFound;