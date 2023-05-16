import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import styles from './FloatingChatButton.module.css';

const FloatingChatButton = () => {
  const whatsappNumber = '+573005792037';
  const initialMessage = '¡Hola! Estoy interesado(a) en inscribirme a Tech2Life.';

  const whatsappLink = `https://api.whatsapp.com/send?phone=${encodeURIComponent(whatsappNumber)}&text=${encodeURIComponent(initialMessage)}`;

  return (
    <div className={styles.chatButton}>
      <a href={whatsappLink} className={styles.chatIcon}  target="_blank" rel="noopener noreferrer">
        <FontAwesomeIcon icon={faWhatsapp} />
      </a>
    </div>
  );
};

export default FloatingChatButton;
