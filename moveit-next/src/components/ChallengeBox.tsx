import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/ChallengeBox.module.css';

const ChallengeBox = () => {
  const { activeChallange, resetChallenge } = useContext(ChallengeContext);

  return (
    <div className={styles.challengeBoxContainer}>
      {activeChallange ? (
        <div className={styles.challengeActive}>
          <header> Ganhe {activeChallange.amount} xp</header>

          <main>
            <img
              src={`icons/${activeChallange.type}.svg`}
              alt="Desafio atual"
            />
            <strong>Novo desafio</strong>
            <p>{activeChallange.description}</p>
          </main>

          <footer>
            <button
              className={styles.challengeFailedButton}
              type="button"
              onClick={resetChallenge}
            >
              Falhei
            </button>
            <button className={styles.challengeSucceededButton} type="button">
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber um desafio</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Avance níveis completando desafios
          </p>
        </div>
      )}
    </div>
  );
};

export default ChallengeBox;
