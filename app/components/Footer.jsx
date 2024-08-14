import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faInstagram,
  faFacebook,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
export default function Footer() {
  return (
    <footer>
      <div className="socials">
        <FontAwesomeIcon className="dropdownIcon" icon={faInstagram} />
        <FontAwesomeIcon className="dropdownIcon" icon={faFacebook} />
        <FontAwesomeIcon className="dropdownIcon" icon={faWhatsapp} />
      </div>
      <p>MedLink© - Todos os Direitos Reservados</p>
    </footer>
  );
}
