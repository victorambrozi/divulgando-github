import axios from "axios";
import React from "react";
import { api } from "../../services/api";
import Card from "../Card/Card";
import { ProjectsStyle } from "./projects-style";

const Projects = () => {
  const [githubData, setGithubData] = React.useState([]);

  const getPage = async () => {
    try {
      const response = await api.get(`/repos?per_page=6&page=1`);
      setGithubData(response.data);
      console.log(githubData)
    } catch (error) {
      console.error(error)
    }
  };

  React.useEffect(() => {
    getPage();
  }, []);
  return (
    <ProjectsStyle>
      {
        githubData?.map((repo) => (
          <Card key={repo.id} props={repo}/>        
        ))
      }
    </ProjectsStyle>
  );
};

export default Projects;
