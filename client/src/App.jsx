import { Route, Routes } from "react-router-dom";
import LoginForm from "./components/LoginForm";
import Form from "./components/LoginForm";
import { useState } from "react";
import "./App.css"

function App() {

const [access, setAccess] = useState(false);

  async function login(userData) {

    try {
       const { email, password } = userData;
       const URL = 'http://localhost:3001/rickandmorty/login/';
       const {data} = await axios(URL + `?email=${email}&password=${password}`)
       if (data.access) {
          setAccess(data.access);
          navigate('/home');
          
       } else {
          alert("Credenciales Incorrectas")
       }
    } catch (error) {
       alert(error.message)
    }
 }

  return (
    <div className='App'>

      <Routes>

        <Route path="/" element={<LoginForm login={login} /> }/>

      </Routes>


    </div>
  )
}

export default App

