// import { BurgerMenuBtn } from "./BurgerMenuBtn";
// import { Internationalization } from "./Internationalization";
// import { SupportUsBtn } from "./SupportUsBtn";
// import { Logo } from "./Logo";
import {
  Logo,
  BurgerMenuBtn,
  Internationalization,
  SupportUsBtn,
} from "./index.js";
import { NavLink } from "react-router-dom";

const Header = () => {
  return (
    <>
      <Logo />
      <Internationalization />
      <SupportUsBtn />
      <BurgerMenuBtn />
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="about-bridge">About bridge</NavLink>
        <NavLink to="about-us">About us</NavLink>
        <NavLink to="requisites">Requisites</NavLink>
        <NavLink to="purchases">Purchases</NavLink>
      </nav>
    </>
  );
};

export default Header;
