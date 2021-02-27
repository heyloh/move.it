import { useContext } from 'react';

import { ChallengesContext } from '../contexts/ChallengesContext';

import styles from '../styles/components/Profile.module.css';

export default function Profile() {
  const { level } = useContext(ChallengesContext);

  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/heyloh.png" alt="Foto de perfildo usuário" />
      <div>
        <strong>Lohana Torres</strong>
        <p>
          <img src="icons/level.svg" alt="Seta para cima" />
          Level {level}
        </p>
      </div>
    </div>
  );
}
