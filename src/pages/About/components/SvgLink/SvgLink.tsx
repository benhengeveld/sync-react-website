import "./SvgLink.scss";

const SvgLink = ({
  src = "",
  glitch = false,
  href = "",
}: {
  src?: string;
  glitch?: boolean;
  href?: string;
}) => {
  return (
    <a className="svg svg-link" href={href} rel="noreferrer" target="_blank">
      <img src={src} alt={src} className={glitch ? "glitch" : ""} />
    </a>
  );
};

export default SvgLink;
