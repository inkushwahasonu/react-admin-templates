import { NavLink, To } from "react-router-dom";

/** context */
import { useToggle, useToggleUpdate } from "../../contexts/sidebar.context";

/** style */
import "./Sidebar.scss";

/** icons */
import { BiHome, BiUser, BiUserPlus, BiLineChart } from "react-icons/bi";
import { IconType } from "react-icons";
import {
  ReactElement,
  JSXElementConstructor,
  ReactFragment,
  ReactPortal,
  Key,
} from "react";

/**interface */
interface childMenu {
  id: number;
  icon: IconType;
  name: string;
  path: To;
}
interface menu {
  id: number;
  icon: IconType;
  name: string;
  childrenMenu: Array<childMenu>;
}

const Sidebar = () => {
  const sideMenu: Array<menu> = [
    {
      id: 1,
      icon: BiHome,
      name: "home",
      childrenMenu: [
        {
          id: 1001,
          icon: BiLineChart,
          name: "Dashboard",
          path: "/",
        },
      ],
    },
    {
      id: 2,
      icon: BiUserPlus,
      name: "Account",
      childrenMenu: [
        {
          id: 2001,
          icon: BiUser,
          name: "Login",
          path: "/login",
        },
      ],
    },
  ];

  const sidebarToggle = useToggle();

  const sidebarToggleUpdate = useToggleUpdate();

  return (
    <>
      <div className={sidebarToggle ? "sidebar " : "sidebar collapsed_sidebar"}>
        <ul className=" sidebar_menu">
          {sideMenu.map((menu, i) => (
            <li key={i} className="sidebar_menu_list">
              <div
                className="sidebar_menu_title"
                data-bs-toggle="collapse"
                data-bs-target={"#collapseExample" + i}
                aria-expanded="false"
                aria-controls="collapseExample"
              >
                <div
                  className="menu_icon"
                  onClick={() => {
                    !sidebarToggle ? sidebarToggleUpdate() : "";
                  }}
                >
                  <menu.icon />
                </div>
                <div className="menu_name ">{menu.name}</div>
              </div>
              <ul
                className="collapse sidebar_sub_menu"
                id={"collapseExample" + i}
              >
                {menu.childrenMenu.map((subMenu, i) => (
                  <li key={i} className="sidebar_sub_menu_list">
                    <NavLink to={subMenu.path}>
                      <div className="sidebar_sub_menu_title">
                        <div className="menu_icon">
                          <subMenu.icon />
                        </div>
                        <div className="menu_name">{subMenu.name}</div>
                      </div>
                    </NavLink>
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
};
export default Sidebar;
