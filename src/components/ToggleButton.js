import PropTypes from "prop-types";

export default function ToggleButton(props) {
  return (
    <div className="navbar--toggle-container" onClick={props.toggle}>
      <div className={`dialog-button ${props.selected ? "" : "disabled"}`}>
        {props.selected ? props.offText : props.onText}
      </div>
    </div>
  );
}

ToggleButton.propTypes = {
  selected: PropTypes.bool.isRequired,
  toggle: PropTypes.func.isRequired,
  onText: PropTypes.string.isRequired,
  offText: PropTypes.string.isRequired,
};
