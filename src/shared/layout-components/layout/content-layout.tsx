import React, { Fragment, useEffect, useState } from "react";
import Sidebar from "../sidebar/sidebar";
import Header from "../header/header";
import Footer from "../footer/footer";
import Switcher from "../switcher/switcher";
import Backtotop from "../backtotop/backtotop";
import store from "@/shared/redux/store";

const ContentLayout = ({ children }: { children: React.ReactNode }) => {
  const [lateLoad, setlateLoad] = useState(false);

  useEffect(() => {
    document.body.classList.remove("error-1", "landing-body");
    setlateLoad(true);
  }, []);

  const Bodyclickk = () => {
    if (localStorage.getItem("ynexverticalstyles") === "icontext") return;
    if (window.innerWidth > 992) {
      document.documentElement.setAttribute("icon-overlay", "");
    }
  };

  return (
    <Fragment>
      <div style={{ display: lateLoad ? "block" : "none" }}>
        <Switcher />
        <div className="page">
          <Header />
          <Sidebar />
          <div className="content">
            <div className="main-content" onClick={Bodyclickk}>
              {children}
            </div>
          </div>
          <Footer />
        </div>
        <Backtotop />
      </div>
    </Fragment>
  );
};

export default ContentLayout;
