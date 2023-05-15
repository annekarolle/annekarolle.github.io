import { Container } from "./headerStyle";
import logo from "../../assests/img/logo.png";
import { BsGithub } from "react-icons/bs";
import bg from "../../assests/img/wp/bg.png";

const Header = () => {
  return (
    <>
      <Container>
        <img src={bg} alt="" className="bg" />

        <div className="navegador">
          <div>
            <img src={logo} alt="Logo Anne Karolle" />
          </div>

          <div>
            <ul className="menuNav">
              <li>
                <a href="#aboutMe">About me</a>
              </li>
              <li>
                <a href="#projects">Projects</a>
              </li>
              <li>
                <a href="#contact">Contact</a>
              </li>

              <li>
                <a href="https://github.com/annekarolle" className="gitHub">
                  <BsGithub />
                </a>
              </li> 
            </ul>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Header;
