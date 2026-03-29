import "./AmbientFlow.css";

export default function AmbientFlow() {
  return (
    <div className="ambient-flow" aria-hidden="true">
      <div className="wave-wrapper">

        <div className="wave wave1">
          <div className="wave-inner" />
          <div className="wave-inner" />
        </div>

        <div className="wave wave2">
          <div className="wave-inner" />
          <div className="wave-inner" />
        </div>

        <div className="wave wave3">
          <div className="wave-inner" />
          <div className="wave-inner" />
        </div>

      </div>
    </div>
  );
}