import { useState } from "react";
import { CartProvider } from "./CartContext";
import Header from "./components/Header/index";
import Main from "./components/Main/index";
import Footer from "./components/Footer/index";
import Carrinho from "./Carrinho";
import "../src/globals.css";
import "./icons";

function App() {
  const [mostrarCarrinho, setMostrarCarrinho] = useState(false);

  return (
    <>
      <CartProvider>
        <Header onToggleCarrinho={() => setMostrarCarrinho(!mostrarCarrinho)} />
        <Main />
        <Footer />
        <div
          className={`overlay ${mostrarCarrinho ? "abrir" : "fechar"}`}
          onClick={() => setMostrarCarrinho(false)}
        ></div>
        <Carrinho
          aberto={mostrarCarrinho}
          onClose={() => setMostrarCarrinho(false)}
        />
      </CartProvider>
    </>
  );
}

export default App;
