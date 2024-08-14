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
        <FontAwesomeIcon className="socialIcon" icon={faInstagram} />
        <FontAwesomeIcon className="socialIcon" icon={faFacebook} />
        <FontAwesomeIcon className="socialIcon" icon={faWhatsapp} />
      </div>
      <p>MedLink© - Todos os Direitos Reservados</p>
    </footer>
  );
}
