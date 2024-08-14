import "./Header.css";
import logo from "../public/6834475.png";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown, faBell, faUser } from "@fortawesome/free-solid-svg-icons";
export default function Header() {
  return (
    <header>
      <div className="logo">
        <Image src={logo} alt="logo" height={50} />
        <p>MedLink</p>
      </div>
      <div className="consulta">Marcar Consulta</div>
      <div className="exames">
        <p>Exames</p>
        <FontAwesomeIcon className="dropdownIcon" icon={faCaretDown} />
      </div>
      <div className="hospitais">Hospitais Próximos</div>
      <div className="suporte">Suporte</div>
      <div className="notificacao">
        <FontAwesomeIcon className="bellIcon" icon={faBell} />
      </div>
      <div className="username">Olá, Usuário!</div>
      <div className="perfil">
        <FontAwesomeIcon className="userIcon" icon={faUser} />
      </div>
    </header>
  );
}
