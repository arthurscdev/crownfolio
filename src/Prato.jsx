import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { CartContext } from "./CartContext";
import "./components/Menu/menu.css";

const Prato = ({ prato }) => {
  const { addToCart } = useContext(CartContext);

  return (
    <section className="menuPratos">
      <div className="containerPratos">
        <div className="imgPratos">
          <img
            src={`${import.meta.env.BASE_URL}${prato.imagem}`}
            alt={prato.nome}
          />
          <div className="infoPrato">
            <h2 className="tituloPadrao">{prato.nome}</h2>
            <span className="precoPrato">{prato.real}</span>
            <span className="precoPrato">{prato.preco}</span>

            <p className="ingredientePrato">{prato.ingredientes}</p>
          </div>
          <button
            className="btn-prato"
            id="btn"
            onClick={() => addToCart(prato)}
          >
            Adicionar no Carrinho
            <FontAwesomeIcon className="carrinhoAdiciona" icon="cart-plus" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Prato;
