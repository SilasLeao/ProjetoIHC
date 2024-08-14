"use client";
import "./Form.css";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
export default function Form() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const [doctor, setDoctor] = useState("");
  const [date, setDate] = useState("");

  function validateForm() {
    if (name == "") {
      alert("Por favor, preencha o Nome");
    } else if (phone == "") {
      alert("Por favor, preencha o Telefone");
    } else if (email == "") {
      alert("Por favor, preencha o Email");
    } else if (age == "") {
      alert("Por favor, preencha a Idade");
    } else if (doctor == "") {
      alert("Por favor, preencha o Nome do Médico");
    } else if (date == "") {
      alert("Por favor, preencha a Data da Consulta");
    } else {
      return true;
    }
  }

  function handleSubmit() {
    if (validateForm()) {
    }
  }

  return (
    <>
      <div className="form">
        <h1>Marcar Consulta</h1>
        <label htmlFor="name">
          Nome:<span>*</span>
        </label>
        <input
          type="text"
          placeholder="Nome"
          id="name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        <label htmlFor="phone">
          Telefone:<span>*</span>
        </label>
        <input
          type="phone"
          placeholder="99999-9999"
          id="phone"
          value={phone}
          onChange={(e) => setPhone(e.target.value)}
        />
        <label htmlFor="age">
          Idade:<span>*</span>
        </label>
        <input
          type="number"
          placeholder="Idade"
          id="age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <label htmlFor="email">
          Email:<span>*</span>
        </label>
        <input
          type="email"
          placeholder="Email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
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
          <input
            type="text"
            placeholder="Nome do Médico"
            id="doctor"
            value={doctor}
            onChange={(e) => setDoctor(e.target.value)}
          />
        </div>
        <label htmlFor="date">
          Data:<span>*</span>
        </label>
        <input
          type="date"
          name=""
          id="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
        <button className="submitBtn" onClick={handleSubmit}>
          Marcar
        </button>
      </div>
    </>
  );
}
