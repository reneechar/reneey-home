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
          My origin as a Web Developer began when I was working as a hospital
          administrator in Boston. Work was becoming less challenging and
          I had already taken up the responsibilities of 3 different positions
          in the clinic. I wanted to gain a technical skill, so I began learning
          how to code online. Soon after, I realized that the website for
          my department was outdated and needed improvement. I excitedly began
          creating my updated version and I displayed it to my supervisor.
          I was disappointed to hear that I would not be allowed to continue
          working on it as the hospital had their own Web Development team. From
          this experiece, I discovered that I had a true passion for creating web
          applications. Deciding to follow my passion, I quit my job in Boston and moved
          to Hawaii to study Web Development. I was accepted by DevLeague,
          Hawaii's premier coding bootcamp, where I underwent 800+ hours of coding
          within a 3 month timespan.
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