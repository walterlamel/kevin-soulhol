/**
 *
 * Menu
 *
 * Menu à the top of pages.
 *
 */
import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserAstronaut, faNavicon } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { useDispatch, useSelector } from "react-redux";
import { toggleLogin } from "../login/slice/loginSlice";
import Login from "../login/Login";
import { loadingUser, selectUser } from "../../pages/slices/userSlice";
import LoaderLogin from "../loaders/loaderLogin/loaderLogin";
import useAnalyticsEventTracker from "../../../services/GoogleAnalytics";
import { allPages } from "../../../types/pagesType";

const Menu = () => {
  const user = useSelector(selectUser);
  let menuItems = allPages.filter((value) => value.inMenu === true);

  return (
    <div className="menu">
      <ul>
        {menuItems.map((item, key) => (
          <ItemMenu key={key} {...item} />
        ))}
        <ItemMenu
          icon={faUserAstronaut}
          text={user ? user.prenom + " " + user.nom : "Se connecter"}
          toDo={user ? "dashboard" : "login"}
        />
      </ul>
      <Login />
    </div>
  );
};

export default Menu;

//types
interface Props {
  clickFunction?: Function;
  icon?: IconProp;
  text?: string;
  link?: string;
  toDo?: string | false;
}

const ItemMenu = ({
  clickFunction,
  icon = faNavicon,
  text = "",
  link,
  toDo,
}: Props) => {
  const gaEventTracker = useAnalyticsEventTracker("MenuClick");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const loading = useSelector(loadingUser);

  function handleClick() {
    if (link) {
      navigate(link);
      gaEventTracker(link);
    }

    if (toDo) {
      if (toDo === "login") {
        dispatch(toggleLogin());
        gaEventTracker("login");
      }
      if (toDo === "dashboard") {
        navigate("/dashboard");
        gaEventTracker("dashboard");
      }
    }

    if (clickFunction) {
      clickFunction();
    }
  }

  return (
    <li
      className={
        toDo === "dashboard"
          ? "menu-item container-connect-session"
          : "menu-item"
      }
      onClick={handleClick}
    >
      <a>
        <div className="icon">
          {toDo === "dashboard" && loading ? (
            <LoaderLogin />
          ) : (
            <FontAwesomeIcon icon={icon} />
          )}
        </div>
        <div className="container-text">
          <span>{text}</span>
          {toDo === "dashboard" && <span>{user?.email}</span>}
        </div>
      </a>
    </li>
  );
};
