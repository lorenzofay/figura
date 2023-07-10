import FiguraLogo from "./Logo.png";
import { Tagline } from "./Tagline";

export const Logo = () => (
  <div className="LogoContainer"><img src={FiguraLogo} alt="FiguraLogo" className="logo" /><Tagline /></div>
);

