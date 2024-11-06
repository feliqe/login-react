import React, { useState } from "react";
import authFire from "../assets/js/credenciales";
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import ImgLogin from "../assets/img/login.png";
import ImgPerfil from "../assets/img/perfil.png";

import "../assets/styles/login-style.css";

//variable de firebase
const auth = getAuth(authFire);

const Login = () => {
  const [registrando, setRegistrando] = useState(false);

  // funcion que toma por defecto
  const functAutentificacion = async (e) => {
    e.preventDefault();
    const correo = e.target.email.value;
    const contraseña = e.target.password.value;

    // deriba segun el estado de la varibela de registrando
    if (registrando) {
      try {
        await createUserWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("Asegurarse que la contraseña tenga mas de 8 caracteres");
      }
    } else {
      // controlar el error del login
      try {
        await signInWithEmailAndPassword(auth, correo, contraseña);
      } catch (error) {
        alert("El correo o la contraseña son incorrecto");
      }
    }
  };

  return (
    <section className="vh-100 gradient-custom">
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <div className="padre">
              <div className="card card-body shadow-lg">
                <img src={ImgPerfil} alt="" className="estilo-perfil" />
                <form onSubmit={functAutentificacion}>
                  <input
                    type="text"
                    placeholder="prueba@prueba.cl"
                    className="cajaTexto"
                    id="email"
                  />
                  <input
                    type="text"
                    placeholder="qwerty"
                    className="cajaTexto"
                    id="password"
                  />
                  <button className="btnForm">
                    {registrando ? "Registrate" : "Inicia Session"}
                  </button>
                </form>
                {/* en el onclick : es para inidcar que la funcion es segun la el estado de la varibale de registrando */}
                <div className="d-grid gap-2 d-md-flex justify-content-md-end">
                  {/* <h4 className="texto">
                    {registrando ? "Si ya tienes cuenta " : "No tienes cuenta "} */}
                  {/* <button
                      className="btnSwicht me-md-2"
                      onClick={() => setRegistrando(!registrando)}
                    >
                     */}
                  <button
                    className="learn-more"
                    onClick={() => setRegistrando(!registrando)}
                  >
                    <span className="circle" aria-hidden="true">
                      <span className="icon arrow"></span>
                    </span>
                    <span className="button-text">
                      {registrando ? "Iniciar session" : "Registrarse"}
                    </span>
                  </button>
                  {/* </h4> */}
                </div>
              </div>
            </div>
          </div>
          <div className="col-md-8">
            <img src={ImgLogin} alt="" className="tamaño-imagen" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
