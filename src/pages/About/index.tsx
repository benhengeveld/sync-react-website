import DefaultPageTemplate from "templates/DefaultPageTemplate/DefaultPageTemplate";
import CardItem from "components/CardItem/CardItem";
import SvgIcon from "./components/SvgIcon/SvgIcon";
import SvgLink from "./components/SvgLink/SvgLink";
import "./style.scss";

import angularSvg from "assets/svgs/angular.svg";
import apachecordovaSvg from "assets/svgs/apachecordova.svg";
import aspdotnetSvg from "assets/svgs/aspdotnet.svg";
import csharpSvg from "assets/svgs/csharp.svg";
import css3Svg from "assets/svgs/css3.svg";
import emailSvg from "assets/svgs/email.svg";
import gitSvg from "assets/svgs/git.svg";
import githubSvg from "assets/svgs/github.svg";
import html5Svg from "assets/svgs/html5.svg";
import javaSvg from "assets/svgs/java.svg";
import javascriptSvg from "assets/svgs/javascript.svg";
import linkedinSvg from "assets/svgs/linkedin.svg";
import nodedotjsSvg from "assets/svgs/nodedotjs.svg";
import sassSvg from "assets/svgs/sass.svg";
import sqlSvg from "assets/svgs/sql.svg";
import typescriptSvg from "assets/svgs/typescript.svg";
import vuedotjsSvg from "assets/svgs/vuedotjs.svg";
import yarnSvg from "assets/svgs/yarn.svg";

const icons: { name: string; file: string }[] = [
  { file: angularSvg, name: "Angular" },
  { file: apachecordovaSvg, name: "Cordova" },
  { file: aspdotnetSvg, name: "ASP.NET" },
  { file: csharpSvg, name: "C#" },
  { file: css3Svg, name: "CSS" },
  { file: gitSvg, name: "Git" },
  { file: html5Svg, name: "HTML" },
  { file: javaSvg, name: "Java" },
  { file: javascriptSvg, name: "JavaScript" },
  { file: nodedotjsSvg, name: "Node.js" },
  { file: sassSvg, name: "Sass" },
  { file: sqlSvg, name: "SQL" },
  { file: typescriptSvg, name: "TypeScript" },
  { file: vuedotjsSvg, name: "Vue" },
  { file: yarnSvg, name: "Yarn" },
];

const links: { file: string; link: string }[] = [
  { file: githubSvg, link: "https://github.com/benhengeveld" },
  { file: linkedinSvg, link: "https://www.linkedin.com/in/ben-hengeveld" },
  { file: emailSvg, link: "mailto:contact@sy-nc.ca" },
];

const AboutView = () => {
  return (
    <DefaultPageTemplate crtOverlay={true} glitchNav={false}>
      <CardItem>
        <h1 className="card-title">My Skills</h1>
        <div className="svg-holder" id="svg-icons">
          {icons.map((icon) => (
            <SvgIcon
              key={icon.file}
              src={icon.file}
              tooltipText={icon.name}
              glitch={false}
            />
          ))}
        </div>
      </CardItem>
      <CardItem>
        <h1 className="card-title">My Stuff</h1>
        <div className="svg-holder" id="svg-links">
          {links.map((link) => (
            <SvgLink
              key={link.file}
              src={link.file}
              href={link.link}
              glitch={false}
            />
          ))}
        </div>
      </CardItem>
    </DefaultPageTemplate>
  );
};

export default AboutView;
