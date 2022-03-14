import React from "react";
import { CardContent, CardStyle } from "./card-style";
import { FaGithub } from "react-icons/fa";

const Card = ({ props }) => {
  return (
    <CardStyle background="#F78B64">
      <div className="github-icon">
        <FaGithub color="rgba(0,0,0, 70%)" size={60} />
      </div>

      <CardContent>
        <h2>{props.name}</h2>

        <p>{props.description}</p>

        <a href={props.html_url} target="_blank">
          Veja aqui
        </a>
      </CardContent>
    </CardStyle>
  );
};

export default Card;
