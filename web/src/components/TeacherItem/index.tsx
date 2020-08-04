import React from 'react';

import whatsAppIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css';

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img 
          src="https://avatars3.githubusercontent.com/u/32594965?s=460&u=efe5a16210111c4e14f0884574a43c40a2866468&v=4" 
          alt="Igor Martinez" 
        />
        <div>
          <strong>Igor Martinez</strong>
          <span>League of Legends</span>
        </div>
      </header>
      <p>
        Doggo ipsum sub woofer snoot very jealous pupper, puggorino.
            <br /><br />
            Tungg the neighborhood pupper ruff doggo he made.
          </p>
      <footer>
        <p>
          Preço/hora
              <strong>R$ 80,00</strong>
        </p>
        <button>
          <img src={whatsAppIcon} alt="Whatsapp" />
              Entrar em contato
            </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
