import logo from "../images/abm_logo.png";
import PropTypes from "prop-types";
import { useState } from "react";
import ToggleButton from "./ToggleButton";

export default function NavBar(props) {
  const [selected, setSelected] = useState(false);

  const handleOnClick = (e) => {
    props.swapComponents();
    setSelected(!selected);
  };
  return (
    <nav>
      <img className="nav--icon" src={logo} alt="Auroiah Morgan site logo" />
      <h3 className="nav--logo_text">Auroiah Morgan</h3>
      <h4 className="nav--title">Auroiah Morgan's Portfolio</h4>
      <ul className="nav--list">
        <li>
          <ToggleButton
            toggle={handleOnClick}
            selected={selected}
            onText="Projects"
            offText="Home"
          />
        </li>
        <li>
          <a href="https://slugga.itch.io" target="_blank" rel="noreferrer">
            Games by Me
          </a>
        </li>
      </ul>
    </nav>
  );
}

NavBar.propTypes = {
  swapComponents: PropTypes.func.isRequired,
};
