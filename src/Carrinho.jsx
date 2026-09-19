import { useContext } from "react";
import { CartContext } from "../src/CartContext";
import "./Carrinho.css";

const Carrinho = ({ aberto, onClose }) => {
  const { cart, removeFromCart, clearCart } = useContext(CartContext);

  const total = cart.reduce(
    (acc, item) => acc + Number(item.preco) * item.quantidade,
    0,
  );

  return (
    <>
      <div className={`carrinhoLateral ${aberto ? "abrir" : "fechar"}`}>
        <button className="fecharCarrinho" onClick={onClose}>
          ✖
        </button>
        <h2>Carrinho</h2>
        {cart.length === 0 ? (
          <p>Seu carrinho está vazio.</p>
        ) : (
          <ul>
            {cart.map((item) => (
              <div className="itemCarrinho">
                <img src={item.imagem} alt={item.nome} />
                <div className="info">
                  <h4>{item.nome}</h4>
                  <p>{item.quantidade}x</p>
                  <p>
                    {Number(item.preco).toLocaleString("pt-BR", {
                      style: "currency",
                      currency: "BRL",
                    })}
                  </p>
                </div>
                <button onClick={() => removeFromCart(item.id)}>Remover</button>
              </div>
            ))}
          </ul>
        )}

        <p>
          Total:
          <br></br>
          {total.toLocaleString("pt-BR", {
            style: "currency",
            currency: "BRL",
          })}
        </p>
        <button onClick={clearCart}>Limpar carrinho</button>
        <div className="carrinhoFooter">
          <button className="finalizarCompra">Finalizar compra</button>
        </div>
      </div>
    </>
  );
};

export default Carrinho;
