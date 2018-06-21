import React from "react";
import PropTypes from "prop-types";

async function onBrowse(e, { title, value, buttonLabel, onChange }) {
  e.preventDefault();

  console.log("browse");

  const newPath = "";

  if (newPath !== null) {
    onChange(newPath);
  }
}

export default function NativeFileInput(props) {
  return <button onClick={e => onBrowse(e, props)}>{props.label}</button>;
}

NativeFileInput.propTypes = {
  label: PropTypes.string,
  buttonLabel: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

NativeFileInput.defaultProps = {
  label: "Browse..."
};