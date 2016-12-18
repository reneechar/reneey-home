import React from 'react';
import styles from '../sass/about.scss';
class About extends React.Component {

  render() {
    return (
      <div id={styles.container}>
        <div id={styles.portrait}>
        </div>
        <div id={styles.description}>
          Hello! My name is Renee and I am a Full Stack Web Developer. My origin as a Web Developer began when I was working as a hospital administrator in Boston.  I constantly sought more responsibilities in the clinic to gain a larger understanding of the department as a whole. After a year at the hospital, I was regularly performing duties of three other positions in the clinic. I was awarded with the team player recognition for my proactive outreach and commitment to going above and beyond for our patients and our staff. Through this experience, I began to see how simple technical shortcomings within the hospital’s infrastructure could be improved to dramatically enhance patient experience and flow.
          I committed to web development as a career path when I left my position at the hospital to join DevLeague, Hawaii’s premier coding bootcamp. In 3 months, I went from creating static HTML and CSS pages to creating and deploying full-stack single page applications.
          My dream is to create web applications that improves the lives of others.
        </div>
        <div id={styles.tools}>
          <h1 className={styles.title}>Technical Skills</h1>
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
            <li>Github</li>
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