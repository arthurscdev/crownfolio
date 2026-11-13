import Prato from "../../Prato";
import pratos from "./../../data/pratos.json";
import "./destaque.css";

const Destaques = () => {
  return (
    <>
      <div className="mainMenu" id="menu">
        <h2 className="tituloMenu">Destaque</h2>
        {pratos.map((prato) => (
          <Prato key={prato.id} prato={prato} />
        ))}
      </div>
      ;
    </>
  );
};

export default Destaques;
