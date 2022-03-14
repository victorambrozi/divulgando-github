import React from "react";
import { CardAvatar, SideBarStyle } from "./sidebar-style";
import { IconContext } from "react-icons";
import { MdLocationOn, MdEmail } from "react-icons/md";
import { FiUser } from "react-icons/fi";

const SideBar = ({ className }) => {
  // fazer requisição para api
  return (
    <SideBarStyle>
      <CardAvatar>
        <div className="card card-top">
          <div className="avatar">
            <img src="" alt="" />
          </div>

          <div className="content">
            <span>Usuário</span>
            <h2>Victor Ambrozi</h2>
          </div>
        </div>
        <div className="card card-bottom">
          <IconContext.Provider value={{ style: { minWidth: 30 } }}>
            <ul>
              <li>
                <MdLocationOn color="#fff" size={30} />
                <span>Salvador, BA</span>
              </li>
              <li>
                <MdEmail color="#fff" size={30} />
                <span>victorambrozi@gmail.com</span>
              </li>
              <li>
                <FiUser color="#fff" size={30} />
                <span>victorambrozi</span>
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
