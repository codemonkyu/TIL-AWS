import React from "react";

const MycomponentFunc = ({ name, children }) => {
  return (
    <div>
      <h3>hello, {name}</h3>
      {children}
    </div>
  );
};

export default MycomponentFunc;
