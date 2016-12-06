import React from 'react';
import styles from '../sass/notFound.scss';

class NotFound extends React.Component {
  render() {
    return (
      <div>
        <h1 id={styles.title}>404 Page Not Found</h1>
      </div>
    )
  }
}

export default NotFound;