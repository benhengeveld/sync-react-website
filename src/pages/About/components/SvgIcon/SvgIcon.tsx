import "./SvgIcon.scss";

const SvgIcon = ({
  src = "",
  glitch = false,
  tooltipText = "",
}: {
  src?: string;
  glitch?: boolean;
  tooltipText?: string;
}) => {
  return (
    <div className="svg svg-icon">
      <img src={src} alt={src} className={glitch ? "glitch" : ""} />
      <span className="svg-tooltip">{tooltipText}</span>
    </div>
  );
};

export default SvgIcon;
