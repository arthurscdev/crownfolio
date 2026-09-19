import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contato">
        <div className="footerSecoes">
          <div className="contatos">
            <h2>Contato</h2>
            <ul className="listaContato">
              <li>
                <a href="https://wa.me/5591998265505" target="_blank">
                  <FontAwesomeIcon icon="phone" size="3x" />
                </a>
              </li>
              <li>
                <a href="https://www.google.com/maps" target="_blank">
                  <FontAwesomeIcon icon="home" size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="mailto:arthurcastro092012@gmail.com"
                  target="_blank"
                  aria-label="Email"
                >
                  <FontAwesomeIcon icon="envelope" size="3x" />
                </a>
              </li>
            </ul>
          </div>

          <div className="redeSociais">
            <h2>Rede Sociais</h2>
            <ul className="listaSocias">
              <li>
                <a
                  href="https://www.instagram.com/arthurscdev/"
                  target="_blank"
                  aria-label="Instagram"
                >
                  <FontAwesomeIcon icon={["fab", "instagram"]} size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/arthur-sc/"
                  target="_blank"
                  aria-label="Linkedin"
                >
                  <FontAwesomeIcon icon={["fab", "linkedin"]} size="3x" />
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/arthurscdev"
                  target="_blank"
                  aria-label="GitHub"
                >
                  <FontAwesomeIcon icon={["fab", "github"]} size="3x" />
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="footerDireitos">
          <a href="https://github.com/arthurscdev"> © 2026 Arthur</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
