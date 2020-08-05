import React from "react";

import './styles.css'

import whatsappIcon from "../../assets/images/icons/whatsapp.svg";

function TeacherItem() {
  return (
    <article className="teacher-item">
      <header>
        <img
          src="https://avatars3.githubusercontent.com/u/49356234?s=460&u=7a90cc7df33c841e5ed74fdf93605ef7365cf817&v=4"
          alt="Rafael Santana"
        />
        <div>
          <strong>Rafael Santana</strong>
          <span>sla</span>
        </div>
      </header>
      <p>
        fjlhsekfhwerfherhfui
        <br />
        <br />
      </p>

      <footer>
        <p>
          Preço/hora
          <strong>R$ 20,00</strong>
        </p>
        <button type="button">
          <img src={whatsappIcon} alt="Whatsapp" />
          Entrar em contato
        </button>
      </footer>
    </article>
  );
}

export default TeacherItem;
