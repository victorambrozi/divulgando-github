import React from "react";
import { CardAvatar, SideBarStyle } from "./sidebar-style";
import { IconContext } from "react-icons";
import { MdLocationOn } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { api } from "../../services/api";

const SideBar = ({ className }) => {
  const [dataSidebar, setDataSidebar] = React.useState({});
  // fazer requisição para api
  React.useEffect(() => {
    async function getApi() {
      try {
        const response = await api.get();
        setDataSidebar(response.data);
      } catch (error) {
        console.error(error);
      }
    }

    getApi();
  }, []);
  return (
    <SideBarStyle>
      <CardAvatar>
        <div className="card card-top">
          <div className="avatar">
            <img src={dataSidebar.avatar_url} alt="Avatar" />
          </div>

          <div className="content">
            <span>Usuário</span>
            <h2>{dataSidebar.name}</h2>
          </div>
        </div>
        <div className="card card-bottom">
          <IconContext.Provider value={{ style: { minWidth: 30 } }}>
            <ul>
              <li>
                <FaLinkedinIn color="#fff" size={30} />
                <span>
                  <a href={dataSidebar.blog} target="_blank" rel="noreferrer noopener">
                    victorambrozi
                  </a>
                </span>
              </li>
              <li>
                <FaGithub color="#fff" size={30} />
                <span>{dataSidebar.login}</span>
              </li>
              <li>
                <MdLocationOn color="#fff" size={30} />
                <span>{dataSidebar.location}</span>
              </li>
            </ul>
          </IconContext.Provider>
        </div>
      </CardAvatar>
      {/* <SideBarStyle */}
    </SideBarStyle>
  );
};

export default SideBar;
