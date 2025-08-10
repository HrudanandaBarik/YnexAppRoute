
"use client";
import React, { useEffect, useState } from "react";
import Footer from "@/shared/layout-components/footer/footer";
import Header from "@/shared/layout-components/header/header";
import Sidebar from "@/shared/layout-components/sidebar/sidebar";
import Backtotop from "@/shared/layout-components/backtotop/backtotop";
import '../../../styles/globals.scss'

import { Provider } from 'react-redux';
import store from '@/shared/redux/store';
import { Initialload } from "@/shared/layout-components/contextapi";


const ContentLayout = ({ children }: any) => {

    const [lateLoad, setlateLoad] = useState(false);
    const Add = () => {
        document.querySelector("body")?.classList.remove("error-1");
        document.querySelector("body")?.classList.remove("landing-body");
    };

    useEffect(() => {
        Add();
        setlateLoad(true);
    });

    const [MyclassName, setMyClass] = useState("");
    const Bodyclickk = () => {
        const theme = store.getState();
        if (localStorage.getItem("ynexverticalstyles") == "icontext") {
            setMyClass("");
        }
        if (window.innerWidth > 992) {
            let html = document.documentElement;
            if (html.getAttribute('icon-overlay') === 'open') {
                html.setAttribute('icon-overlay', "");
            }
        }
    }
    const [pageloading, setpageloading] = useState(false)

    return (
        <>
            <>
                <Initialload.Provider value={{ pageloading, setpageloading }}>
                    <Provider store={store}>
                        <div style={{ display: `${lateLoad ? 'block' : 'none'}` }}>

                            <div className='page'>
                                <Header />
                                <Sidebar />
                                <div className='content'>
                                    <div className='main-content' onClick={Bodyclickk}>
                                        {children}
                                    </div>
                                </div>
                                <Footer />
                            </div>
                            <Backtotop />

                        </div>
                    </Provider>
                </Initialload.Provider>
            </>
        </>

    )
}

export default ContentLayout;
