import FiguraLogo from "./Logo.svg";
import Tagline from "./Tagline";

const Logo = () => (
  <div className="LogoContainer">
    <img src={FiguraLogo} alt="FiguraLogo" className="logo" />
    <Tagline />
  </div>
);

export default Logo;
