import React from 'react';
import styles from './components/sass/app.scss';
import NavBar from './components/static/NavBar';
import Footer from './components/static/Footer';

class App extends React.Component {
  render() {
    return (
      <div id={styles.container}>
        <div id={styles.upper}>
          <NavBar/>
          <div>
            {this.props.children}
          </div>
        </div>
        <Footer/>
      </div>
    )
  }
}

export default App;


