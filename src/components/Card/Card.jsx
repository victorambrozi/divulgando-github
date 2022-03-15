import React from "react";
import { CardContent, CardStyle } from "./card-style";
import { FaGithub } from "react-icons/fa";

const Card = ({ props }) => {
  const topBarGithub = React.useRef(null);
  const [styleTopbar, setStyleTopbar] = React.useState(false);


  function handleOver() {
    setStyleTopbar(true);
  }

  function handleOut() {
    setStyleTopbar(false);
  }
  return (
    <CardStyle background="#F78B64" topBar={styleTopbar}>
      <div className="github-icon" ref={topBarGithub}>
        <FaGithub color="rgba(0,0,0, 70%)" size={60} />
      </div>

      <CardContent onMouseOver={handleOver} onMouseOut={handleOut}>
        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <div className="github-link">
          <a href={props.html_url} target="_blank">
            Veja aqui
          </a>
        </div>
      </CardContent>
    </CardStyle>
  );
};

export default Card;
