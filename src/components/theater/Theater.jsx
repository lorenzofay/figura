import "./theater.css";
import FiguraSculpture from "./FiguraSculpture.png";

export const Theater = ({children}) => (
  <div className="theater">{children}
    <img src={FiguraSculpture} alt="Logo Sculpture" className="sculpture figura-sculpture"/>
    <div className="Scenes">{children}</div>
  </div>
)
