import "../Footer/footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer" id="contato">
        <h2>
          Entre em contato para fazer a sua rezerva ou peça direto pelo site.
        </h2>

        <div className="footerSecoes">
          <div className="contatos">
            <section>
              <ul className="listaContato">
                <li>
                  <a href="https://wa.me/5591998265505" target="_blank">
                    Mensagem
                  </a>
                </li>
                <li>
                  <a href="https://www.google.com/maps" target="_blank">
                    Localização
                  </a>
                </li>
                <li>
                  <a
                    href="mailto:arthurcastro092012@gmail.com"
                    target="_blank"
                    aria-label="Email"
                  >
                    Email
                  </a>
                </li>
              </ul>
            </section>
            <section>
              <ul className="listaContato">
                <li>
                  <a
                    href="https://www.instagram.com/arthurscdev/"
                    target="_blank"
                    aria-label="Instagram"
                  >
                    Instagram
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.linkedin.com/in/arthur-sc/"
                    target="_blank"
                    aria-label="Linkedin"
                  >
                    Linkedin
                  </a>
                </li>
                <li>
                  <a
                    href="https://github.com/arthurscdev"
                    target="_blank"
                    aria-label="GitHub"
                  >
                    GitHub
                  </a>
                </li>
              </ul>
            </section>
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
