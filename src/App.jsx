import { useState } from "react";
import authFire from "./assets/js/credenciales";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import Login from "./pages/Login";
import Home from "./pages/Home";

//variable de firebase
const auth = getAuth(authFire);

function App() {
  const [usuario, setUsuario] = useState(null);
  //validar si trago la data del login
  onAuthStateChanged(auth, (usuarioFirebase) => {
    if (usuarioFirebase) {
      setUsuario(usuarioFirebase);
    } else {
      setUsuario(null);
    }
  });

  return (
    <div>
      {/* si la variables tiene datos enviara a home si no al login */}
      {/* correoUsuario : pasamos la variable */}
      {usuario ? <Home correoUsuario={usuario.email} /> : <Login />}
    </div>
  );
}

export default App;
