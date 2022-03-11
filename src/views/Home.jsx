import React from "react";
import Projects from "../components/Projects/Projects";
import SideBar from "../components/SideBar/SideBar";
import { HomeStyle } from "./home-style";

const Home = () => {
  return (
    <HomeStyle aria-label="Projetos Github">
      <SideBar className="sidebar"/>
      <Projects className='card'/>
    </HomeStyle>
  );
};
export default Home;
