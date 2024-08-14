import "./Form.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function Form() {
  return (
    <>
      <div className="form">
        <h1>Marcar Consulta</h1>
        <label htmlFor="name">
          Nome:<span>*</span>
        </label>
        <input type="text" placeholder="Nome" id="name" />
        <label htmlFor="phone">
          Telefone:<span>*</span>
        </label>
        <input type="phone" placeholder="99999-9999" id="phone" />
        <label htmlFor="age">
          Idade:<span>*</span>
        </label>
        <input type="number" placeholder="Idade" id="age" />
        <label htmlFor="email">
          Email:<span>*</span>
        </label>
        <input type="email" placeholder="Email" id="email" />
        <label htmlFor="file">Documentos:</label>
        <input type="file" name="" id="file" />
        <label htmlFor="doctor">
          Médico:<span>*</span>
        </label>
        <div className="search">
          <button>
            Filtro
            <FontAwesomeIcon className="dropdownIcon" icon={faCaretDown} />
          </button>
          <input type="text" placeholder="Nome do Médico" id="doctor" />
        </div>
        <label htmlFor="date">
          Data:<span>*</span>
        </label>
        <input type="date" name="" id="date" />
        <button className="submitBtn">Marcar</button>
      </div>
    </>
  );
}
