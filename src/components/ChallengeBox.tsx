import styles from '../styles/components/ChallengeBox.module.css';

export default function ChallengeBox() {
  const hasActiveChallenge = true;

  return (
    <div className={styles.challengeBoxContainer}>
      {hasActiveChallenge ? (
        <div className={styles.challengeActive}>
          <header>Ganhe 400 xp</header>

          <main>
            <img src="icons/body.svg" alt="" />
            <strong>Novo desafio</strong>
            <p>
              Levante-se, caminhe por 3 minutos e estique suas pernas pra você
              ficar saudável.
            </p>
          </main>

          <footer>
            <button type="button" className={styles.challengeFailedButton}>
              Falhei
            </button>
            <button type="button" className={styles.challengeSucceededButton}>
              Completei
            </button>
          </footer>
        </div>
      ) : (
        <div className={styles.challengeNotActive}>
          <strong>Finalize um ciclo para receber desafios</strong>
          <p>
            <img src="icons/level-up.svg" alt="Level up" />
            Complete-os, ganhe experiência e avance de level.
          </p>
        </div>
      )}
    </div>
  );
}
