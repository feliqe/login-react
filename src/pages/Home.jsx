import React from "react";
import authFire from "../assets/js/credenciales";
import { getAuth, signOut } from "firebase/auth";

//variable de firebase
const auth = getAuth(authFire);

// recibimos el email enviado en la funcion
const Home = ({ correoUsuario }) => {
  return (
    <div>
      {/* signOut : es para desolegarse y pasar al autentificacion que la obtenemos de la variable de firebase */}
      <h2 className="text-center">
        Bienvenido al Home, tu correo es {correoUsuario}{" "}
        <button className="btn btn-primary" onClick={() => signOut(auth)}>
          Logout
        </button>
      </h2>
    </div>
  );
};

export default Home;
