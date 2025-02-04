import { FaInstagram, FaFacebook, FaWhatsapp  } from "react-icons/fa";
import { FiAlignJustify } from "react-icons/fi";
import { Navegação, Background} from "./style";
import { useState } from "react";

export function Nav() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <Navegação>
            <div className="hamburger-menu" onClick={toggleMenu}>
                <FiAlignJustify />
            </div>

            <header className={`header ${menuOpen ? "open" : ""}`}>
            <Background/>
                <nav className="nav">
                    <ul className="nav-list">
                        <li>
                        <a href="">Inicio</a> 
                        </li>
                        <li>
                        <a href="">Quem Somos</a>
                        </li>
                        <li>
                        <a href="">Serviços</a>
                        </li>
                        <li>
                        <a href="">Trabalhe Conosco</a>
                        </li>
                        <li>
                        <a href="">Depoimentos</a>
                        </li>
                    </ul>
                    <FaInstagram />
                    <FaFacebook />
                    <FaWhatsapp />
                </nav>
            </header>
        </Navegação>
    );
}