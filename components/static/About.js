import React from 'react';
import styles from '../sass/about.scss';
class About extends React.Component {

  render() {
    return (
      <div id={styles.container}>
        <div id={styles.portrait}>
        </div>
        <div id={styles.description}>
          Hello! My name is Renee and I am a Full Stack Web Developer.
          I am passionate about creating elegant and efficient web
          applications.
        </div>
        <div id={styles.tools}>
          <ul id={styles.toolList}>
            <li>AngularJS</li>
            <li>React</li>
            <li>Redis</li>
            <li>PostgreSQL</li>
            <li>Javascript</li>
            <li>HTML</li>
            <li>CSS</li>
            <li>Sass</li>
            <li>Redux</li>
            <li>Node.js</li>
            <li>Sequelize</li>
            <li>Webpack</li>
            <li>Git</li>
            <li>GitHub</li>
            <li>AJAX</li>
            <li>Mocha</li>
            <li>Chai</li>
            <li>D3</li>
            <li>C3</li>
            <li>Pug/Jade</li>
          </ul>
        </div>

      </div>
    )
  }
}

export default About;