import PropTypes from "prop-types";

function Button({ children, version, type, isDisabled }) {
  return (
    <button type={type} disabled={isDisabled} className={`btn btn-${version}`}>
      {children}
    </button>
  );
}

Button.defaultProps = {
  type: "button",
  version: "primary",
  isDisabled: false,
};

Button.propType = {
  version: PropTypes.string,
  children: PropTypes.node.isRequired,
  isDisabled: PropTypes.bool,
  type: PropTypes.string,
};

export default Button;
