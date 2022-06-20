import React, {useState} from "react"; // Hook
import axios from "axios";
/*
  O useState retorna o estado usuario e uma 
  função que altera esse estado [usuario, setUsuario]

  Usando componentes controlados eu posso criar um estado
  para todos os elementos dentro do componente

  Por exemplo cada input possui um estado próprio.
  value = "" quando usamos value = {usuario}, definimos
  que o estado do input será o mesmo que de usuario

  {} todo código js dentro do jsx tem que ser escrito
  entre {}
*/

function App(props) {
  const [usuario, setUsuario] = useState("");
  function handlePesquisar(){
    console.log("Pesquisar usuário");
    axios.get(`https://api.github.com/users/${usuario}`).then(res => console.log(res));
    
  }
  return (
    <>
      <h1>{props.title}. Olá, Luan! Seja bem vindo</h1>
      
      {/*
        name, className e placeholder dentro do html são atributos
        mas no reactJS são propriedades.
      */}
      <input name="usuario"  className="usuario" placeholder="usuário"
      value={usuario} onChange={e => setUsuario(e.target.value)}/>
      
      <button type="button" onClick={handlePesquisar}>Pesquisar</button>
      <p>{usuario}</p>
    </>
  );
}

export default App;
//JSX é o html dentro do JavaScript

