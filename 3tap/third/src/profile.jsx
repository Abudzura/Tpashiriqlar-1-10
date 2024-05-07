import React from "react";
import Address from "./address";
import Name from "./name";
import Email from "./email";
import Profileinfo from "./profileinfo";
const profile = () => {
  return (
    <div className="maindiv">
      <Address />
      <Name />
      <Email />
      <Profileinfo />
    </div>
  );
};

export default profile;