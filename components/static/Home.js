import React from 'react';
import styles from '../sass/home.scss';

class Home extends React.Component {
  render() {
    const spellcastersElement = (
      <div id={styles.spellcasters}>
        <div className={styles.overlay}>
            <div className={styles.description}>
              <a href="https://spellcastersgame.com" className={styles.projectLinks}>SpellCasters is an educational spelling game</a>
            </div>
            <a href="https://github.com/SpaceToastCoastToCoast/spell-casters">
              <div className={styles.githubLink}>
              </div>
            </a>
          </div>
      </div>
    )
    const kanbanElement = (
      <div id={styles.kanban}>
        <div className={styles.overlay}>
          <div className={styles.description}>
            <a href="http://kanban.reneey.com" className={styles.projectLinks}>Kanban is an interactive To-Do-List</a>
          </div>
          <a href="https://github.com/reneechar/React-Kanban">
            <div className={styles.githubLink}></div>
          </a>
        </div>
      </div>
    )
    const disruptArmyElement = (
      <div id={styles.disruptArmy}>
        <div className={styles.overlay}>
          <div className={styles.description}>
            <a href="https://arakawarx7.github.io/disruptarmy/" className={styles.projectLinks}>2nd Place winner for Disrupt Army Hackathon</a>
          </div>
          <a href="https://github.com/arakawarx7/disruptarmy">
            <div className={styles.githubLink}></div>
          </a>
        </div>
      </div>
    )

    return (
      <div>
        <ul id={styles.projects}>
          <li>{spellcastersElement}</li>
          <li className={styles.mobileDescription}>
            <p>SpellCasters is an educational spelling game</p>
            <a href="https://spellcastersgame.com" className={styles.mobileLink}>Visit</a>
            <a href="https://github.com/SpaceToastCoastToCoast/spell-casters">
              <div className={styles.mobileGithubLink}>
              </div>
            </a>
          </li>
          <li>{kanbanElement}</li>
          <li className={styles.mobileDescription}>
            <p>Kanban is an interactive To-Do-List</p>
            <a href="http://kanban.reneey.com" className={styles.mobileLink}>Visit</a>
            <a href="https://github.com/reneechar/React-Kanban">
              <div className={styles.mobileGithubLink}>
              </div>
            </a>
          </li>
          <li>{disruptArmyElement}</li>
          <li className={styles.mobileDescription}>
            <p>2nd Place winner for Disrupt Army Hackathon</p>
            <a href="https://arakawarx7.github.io/disruptarmy/" className={styles.mobileLink}>Visit</a>
            <a href="https://github.com/arakawarx7/disruptarmy">
              <div className={styles.mobileGithubLink}>
              </div>
            </a>
          </li>
        </ul>
      </div>
    )
  }
}

export default Home;