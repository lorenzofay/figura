import MonitorLeft from "./MonitorLeft";
import MonitorRight from "./MonitorRight";

const Panel = () => {
  return (
    <div className="PanelContainer">
      <div className="video-section">
        <MonitorLeft />
      </div>
      <div className="video-section">
        <MonitorRight />
      </div>
    </div>
  );
};

export default Panel;
