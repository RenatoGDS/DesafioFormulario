import "./css/App.css";
import { useContext } from "react";
import regionsContext from "./context/regionsContext";
import { RegionsOptions } from "./components/RegionsOptions";
import { Loading } from "./components/Loading";
import { validateSubmitButton } from "./helpers/validateSubmitButton";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  const { countriesList, citiesList, formValues, setFormValues } =
    useContext(regionsContext);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e) => {
    toast("Formulario enviado com sucesso!");
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = Object.fromEntries(formData);
    console.log(data);
  };

  return (
    <div className="container">
      {(!countriesList.length || !citiesList.length) && <Loading />}
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
          type="tel"
          name="telefone"
          placeholder="(00) 00000-0000"
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
        />

        <RegionsOptions
          labelName="city"
          title="Cidade"
          placeholder="Selecione sua Cidade"
          handleInputChange={handleInputChange}
          regionsList={citiesList}
        />

        <button type="submit" disabled={validateSubmitButton(formValues)}>
          Enviar Dados
        </button>
      </form>
    </div>
  );
}

export default App;
