import Destaques from "../Destaque/index";
import Menu from "../Menu/index";
import SobreNos from "../SobreNos/index";
import "./main.css";

const Main = () => {
  return (
    <>
      <main id="main">
        <div className="mainApresentacao">
          <h1 className="tituloPrincipal">Crownfolio</h1>
          <span className="apresentacaoLinha"></span>
          <p className="textoPadrao">
            Um espaço criado para unir sabor e praticidade. Aqui você encontra
            pratos preparados com carinho, pensados para transformar cada
            refeição em uma experiência especial. Explore nosso cardápio,
            descubra promoções e aproveite a facilidade de pedir
          </p>
        </div>
        <Destaques></Destaques>
        <Menu></Menu>
        <SobreNos></SobreNos>
      </main>
    </>
  );
};

export default Main;
