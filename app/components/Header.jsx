"use client";
import "./Header.css";
import logo from "../public/6834475.png";
import Image from "next/image";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const toggleDropdown = () => {
    setDropdownVisible(!dropdownVisible);
  };

  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="logo" height={50} />
        <p>
          Med<span>Link</span>
        </p>
      </div>
      <div className="consulta">Marcar Consulta</div>
      <div className="exames" onClick={toggleDropdown}>
        <p>Exames</p>
        <FontAwesomeIcon className="dropdownIcon" icon={faCaretDown} />
        {dropdownVisible && (
          <div className="dropdown">
            <p>Marcar Exame</p>
            <p>Meus Exames</p>
          </div>
        )}
      </div>
      <div className="hospitais">Hospitais Próximos</div>
      <div className="suporte">Suporte</div>
      <div className="notificacao">
        <FontAwesomeIcon className="bellIcon" icon={faBell} />
      </div>
      <div className="perfilSection">
        <div className="username">Olá, Usuário!</div>
        <div className="perfil">
          <FontAwesomeIcon className="userIcon" icon={faUser} />
        </div>
      </div>
    </header>
  );
}
