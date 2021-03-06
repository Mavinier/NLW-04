import React from 'react';

import styles from '../styles/components/Profile.module.css';

const Profile = () => {
  return (
    <div className={styles.profileContainer}>
      <img src="https://github.com/mavinier.png" alt="Imagem de perfil" />
      <div>
        <strong>Marlon Mavinier</strong>
        <p>
          <img src="icons/level.svg" alt="Level" />
          Level 1
        </p>
      </div>
    </div>
  );
};

export default Profile;
