import React from "react";
import { CardContent, CardStyle } from "./card-style";
import { FaGithub } from "react-icons/fa";

const colors = ["#F78B64", "#56C2E5", "#F55F7D", "#4BCF83", "#7235D1", "#F1C75B"];

const Card = ({ props, background }) => {
  const topBarGithub = React.useRef(null);
  const [styleTopbar, setStyleTopbar] = React.useState(false);
  const [randomBg, setRandomBg] = React.useState("");
  
  const randomColor = () => Math.floor(Math.random() * colors.length);
  React.useEffect(() => {
    setRandomBg(colors[randomColor()]);

  },[])

  function handleOver() {
    setStyleTopbar(true);
  }

  function handleOut() {
    setStyleTopbar(false);
  }
  return (
    <CardStyle background={randomBg} topBar={styleTopbar}>
      <div className="github-icon" ref={topBarGithub}>
        <FaGithub color="rgba(0,0,0, 70%)" size={60} />
      </div>

      <CardContent onMouseOver={handleOver} onMouseOut={handleOut}>
        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <div className="github-link">
          <a href={props.html_url} target="_blank" rel="noreferrer noopener">
            Veja aqui
          </a>
        </div>
      </CardContent>
    </CardStyle>
  );
};

export default Card;
