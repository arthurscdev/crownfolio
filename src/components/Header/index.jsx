import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./header.css";

import { useContext } from "react";
import { CartContext } from "../../CartContext";

const Header = ({ onToggleCarrinho }) => {
  const { cart } = useContext(CartContext);

  let menu = document.getElementById("menuHamburguer");

  let navLista = document.querySelectorAll("a.links");

  navLista.forEach((link) => {
    link.addEventListener("click", () => (menu.checked = false));
  });

  const totalItens = cart.reduce((acc, item) => acc + item.quantidade, 0);
  return (
    <>
      <header className="header">
        <a href="/">
          <img
            src={`${import.meta.env.BASE_URL}imageLogo/logo.webp`}
            alt="Logo"
          />
        </a>

        <nav className="headerMenu">
          <input type="checkbox" id="menuHamburguer"></input>

          <label
            for="menuHamburguer"
            aria-label="Abrir menu"
            aria-expanded="false"
            aria-controls="menuHambuguer"
          >
            <div class="menu">
              <span class="hamburguer"></span>
            </div>
          </label>

          <ul className="menuLista">
            <li>
              <a className="links" href="#menu">
                Menu
              </a>
            </li>
            <li>
              <a className="links" href="#sobre">
                Sobre
              </a>
            </li>
            <li>
              <a className="links" href="#promo">
                Promoção
              </a>
            </li>
            <li>
              <a className="links" href="#contato">
                Contato
              </a>
            </li>
          </ul>
        </nav>

        <button className="botaoCarrinho" onClick={onToggleCarrinho}>
          <FontAwesomeIcon className="carrinhoAdiciona" icon="cart-plus" />
          <span key={totalItens} className="badge">
            {totalItens}
          </span>
        </button>
      </header>
    </>
  );
};

export default Header;
