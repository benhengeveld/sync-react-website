import ErrorScreen from "assets/imgs/error-screen.jpg";
import "./BackgroundImage.scss";

const BackgroundImage = ({
  crtBackground = true,
}: {
  crtBackground?: boolean;
}) => {
  return (
    <>
      <div id="background">
        <img id="background-image" src={ErrorScreen} alt="background" />
      </div>
      {crtBackground && <div className="crt"></div>}
    </>
  );
};

export default BackgroundImage;
