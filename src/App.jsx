import "./App.css";
import { useContext, useEffect, useState } from "react";
import regionsContext from "./context/regionsContext";
import { RegionsOptions } from "./components/RegionsOptions";
import { Loading } from "./components/Loading";

function App() {

  const [formValues, setFormValues] = useState({});
  const { countriesList, citiesList } = useContext(regionsContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    
    <div className="container">
      {(!countriesList.length || !citiesList.length) && <Loading />}
      {/* {(true) && <Loading />} */}
      <form onSubmit={handleSubmit}>
        <label htmlFor="nome">Nome</label>
        <input
          id="nome"
          type="text"
          name="nome"
          placeholder="Digite seu nome"
          onChange={handleInputChange}
          value={formValues.nome || ""}
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          type="email"
          name="email"
          placeholder="Digite seu email"
          onChange={handleInputChange}
          value={formValues.email || ""}
        />

        <label htmlFor="telefone">Telefone</label>
        <input
          id="telefone"
          type="number"
          name="telefone"
          placeholder="Digite seu telefone"
          onChange={handleInputChange}
          value={formValues.telefone || ""}
        />

        <label htmlFor="cpf">CPF</label>
        <input
          id="cpf"
          type="texto"
          name="cpf"
          placeholder="Digite seu CPF"
          onChange={handleInputChange}
          value={formValues.cpf || ""}
        />
    
        <RegionsOptions
          labelName="country"
          title="País"
          placeholder="Selecione seu País"
          handleInputChange={handleInputChange}
          regionsList={countriesList}
          formValues={formValues}
         />

        <RegionsOptions
          labelName="city"
          title="Cidade"
          placeholder="Selecione sua Cidade"
          handleInputChange={handleInputChange}
          regionsList={citiesList}
          formValues={formValues}
         />

        <button type="submit">Enviar Dados</button>
      </form>
    </div>
  );
}

export default App;
