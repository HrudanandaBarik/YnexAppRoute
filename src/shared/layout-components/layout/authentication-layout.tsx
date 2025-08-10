import React, { Fragment } from "react";
import Switcher from "../switcher/switcher";

const Authenticationlayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <Fragment>
      <Switcher />
      {children}
    </Fragment>
  );
};

export default Authenticationlayout;
