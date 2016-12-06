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
            <div className={styles.githubLink}>
            </div>
          </a>
        </div>
      </div>
    )

    return (
      <div>
        <ul id={styles.projects}>
          <li>{spellcastersElement}</li>
          <li>{kanbanElement}</li>
        </ul>
      </div>
    )
  }
}

export default Home;