import React from "react";
import { api } from "../../services/api";
import Card from "../Card/Card";
import { ProjectsStyle } from "./projects-style";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Projects = () => {
  const [githubData, setGithubData] = React.useState([]);
  const [pagination, setPagination] = React.useState(1);
  const [totalRepos, setTotalRepos] = React.useState(0);

  
  React.useEffect(() => {
    const getApi = async () => {
      try {
        const response = await api.get(`/repos`);
        setTotalRepos(Math.floor(response.data.length / 6));
      } catch (error) {
        console.error(error);
      }
    }

    getApi();
  }, []);

  

  React.useEffect(() => {
    const getPage = async () => {
      try {
        const response = await api.get(`/repos?per_page=6&page=${pagination}`);
        setGithubData(response.data);
      } catch (error) {
        console.error(error);
      }
    };
    
    getPage();
  }, [pagination]);

  return (
    <ProjectsStyle >
      {githubData?.map((repo) => (
        <Card key={repo.id} props={repo} />
      ))}

      <div className={`pagination`}>
        <div
          className="pagination-previous pagination-all"
          onClick={() => pagination > 0 && setPagination((old) => old - 1)}
        >
          <MdKeyboardArrowLeft
            color="#fff"
            size={30}
          />
        </div>
        <div
          className="pagination-next pagination-all"
          onClick={() =>
            pagination < totalRepos && setPagination((old) => old + 1)
          }
        >
          <MdKeyboardArrowRight
            color="#fff"
            size={30}
          />
        </div>
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
