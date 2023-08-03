import { ReactNode } from "react";
import BackgroundImage from "./components/BackgroundImage/BackgroundImage";
import CrtOverlay from "./components/CrtOverlay/CrtOverlay";
import NavBar from "./components/NavBar/NavBar";
import "./DefaultPageTemplate.scss";

const DefaultPageTemplate = ({
  navBar = true,
  crtOverlay = false,
  glitchNav = false,
  children,
}: {
  navBar?: boolean;
  crtOverlay?: boolean;
  glitchNav?: boolean;
  children?: ReactNode;
}) => {
  return (
    <>
      <BackgroundImage crtBackground={!crtOverlay}></BackgroundImage>
      {crtOverlay && <CrtOverlay />}
      <div id="page">
        {navBar && <NavBar glitch={glitchNav} />}
        <div id="content">{children}</div>
      </div>
    </>
  );
};

export default DefaultPageTemplate;
