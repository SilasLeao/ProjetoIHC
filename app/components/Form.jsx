import "./Form.css";

export default function Form() {
  return (
    <>
      <div className="form">
        <input type="text" placeholder="Nome" />
        <input type="number" placeholder="Idade" />
        <input type="email" placeholder="Email" />
        <input type="file" name="" id="" />
        <div className="search">
          <button>Filtro</button>
          <input type="text" placeholder="Nome do Médico" />
        </div>
        <input type="date" name="" id="" />
        <button>Enviar</button>
      </div>
    </>
  );
}
