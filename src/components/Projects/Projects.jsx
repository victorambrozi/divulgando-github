import React from "react";
import { api } from "../../services/api";
import Card from "../Card/Card";
import { ProjectsStyle } from "./projects-style";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

const Projects = ({ className }) => {
  const [githubData, setGithubData] = React.useState([]);
  const [pagination, setPagination] = React.useState(1);
  const [totalRepos, setTotalRepos] = React.useState(0);

  React.useEffect(async () => {
    try {
      const response = await api.get(`/repos`);
      setTotalRepos(Math.floor(response.data.length / 6));
    } catch (error) {
      console.error(error);
    }
  }, []);

  const getPage = async () => {
    try {
      const response = await api.get(`/repos?per_page=6&page=${pagination}`);
      setGithubData(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  React.useEffect(() => {
    getPage();
  }, [pagination]);

  return (
    <ProjectsStyle previous={pagination === 1}>
      {githubData?.map((repo) => (
        <Card key={repo.id} props={repo} className={className} />
      ))}

      <div className={`pagination ${className}`}>
        <div
          className="pagination-previous pagination-all"
          onClick={() => pagination > 0 && setPagination((old) => old - 1)}
        >
          <MdKeyboardArrowLeft
            color={pagination === 1 ? "red" : "blue"}
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
            color={pagination === totalRepos ? "blue" : "red"}
            size={30}
          />
        </div>
      </div>
    </ProjectsStyle>
  );
};

export default Projects;
