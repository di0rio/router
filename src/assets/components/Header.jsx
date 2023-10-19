import { Link } from "react-router-dom";

import style from "./Header.module.css";

const navigation = [
  { componente: "/", name: "Home" },
  { componente: "/contact", name: "Contato" },
  { componente: "/sobre", name: "Sobre" },
  { componente: "/login", name: "Login" },
];

const Header = () => {
  return (
    <nav>
        {navigation.map((nav) => (
            <Link key={nav.name} to={nav.componente}> {nav.name}</Link>
        ))}
      {/* <Link to={"/"}>HOMEEE</Link>   |    metodo de fazer um a um a mão
      <Link to={"/contact"}>CONTATOOO</Link> */}
    </nav>
  );
};

export default Header;
