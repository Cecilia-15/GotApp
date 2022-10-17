import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { startLogout } from "../../store/auth/thunks";
import LogoutIcon from "@mui/icons-material/Logout";
import FavoriteIcon from "@mui/icons-material/Favorite";
import logo from "../../image/logo.png";
import "../../styles.css";

export const NavBar = () => {
  const dispatch = useDispatch();
  const { displayName } = useSelector((state) => state.auth);

  const onLogout = () => {
    dispatch(startLogout());
  };

  return (
    <nav className="navbar navbar-expand-sm  bg-dark">
      <div className="navbar-brand">
        <NavLink to="/">
          <img src={logo} alt="Logo" />
        </NavLink>
      </div>
      <div className="navbar-collapse">
        <ul className="navbar-collapse d-flex justify-content-end">
          <li className="list">
            <NavLink className="link" to="/">
              Home
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="link" to="/mapa">
              Map
            </NavLink>
          </li>
          <li className="list">
            <NavLink className="link" to="/houses">
              Houses
            </NavLink>
          </li>
          <li className="list">
            <span>{displayName}</span>
          </li>
          <li className="list">
            <button className="button-nav">
              <NavLink className="link" to="/fav">
                {<FavoriteIcon />}
              </NavLink>
            </button>
          </li>
          <li className="list">
            <button onClick={onLogout} className="button-nav">
              {<LogoutIcon />}
            </button>
          </li>
        </ul>
      </div>
    </nav>
  );
};
