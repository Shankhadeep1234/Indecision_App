import React from "react";

import Option from "./Option";

const Options = props => {
  return (
    <div>
      <button onClick={props.handelDeleteOptions}>Remove All</button>
      {props.options.length === 0 && <p>Please add an option to get started</p>}
      {props.options.map(option => (
        <Option
          key={option}
          optionText={option}
          handleDeleteOption={props.handleAddOption}
        />
      ))}
    </div>
  );
};

export default Options;
