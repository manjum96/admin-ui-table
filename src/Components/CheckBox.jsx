import React from "react";

const CheckBox = ({ onChange, isChecked }) => (
  <div>
    <input
      type={"checkBox"}
      onChange={onChange}
      //   defaultChecked={isChecked}
      checked={isChecked}
    />
  </div>
);

export default CheckBox;
