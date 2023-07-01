/** style */
import "./Header.scss";

/** icons */
import { BiMenu } from "react-icons/bi";

/** context */
import { useToggleUpdate } from "../../contexts/sidebar.context";

function Header() {
  const sidebarToggleUpdate = useToggleUpdate();

  return (
    <>
      <div className="header">
        <div className="toggle_button" onClick={sidebarToggleUpdate}>
          {/* onClick={() => {
            setToggleData(!toggleData);
          }} */}
          <BiMenu />
        </div>
        <div className="logo">MTNL</div>
      </div>
    </>
  );
}

export default Header;
