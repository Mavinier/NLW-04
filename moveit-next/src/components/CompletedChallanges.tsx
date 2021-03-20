import React, { useContext } from 'react';
import { ChallengeContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/CompletedChallanges.module.css';

const CompletedChallanges = () => {
  const { challengesCompleted } = useContext(ChallengeContext);
  return (
    <div className={styles.completedChallangesContainer}>
      <span>Desafios completos</span>
      <span>{challengesCompleted}</span>
    </div>
  );
};

export default CompletedChallanges;
