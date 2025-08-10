"use client";
// import type { Metadata } from "next";
// import React from "react";
// import "./globals.css";

// export const metadata: Metadata = {
//     title: "Ynex App",
//     description: "App using Next.js App Router",
// };

// export default function RootLayout({ children }: { children: React.ReactNode }) {
//     return (
//         <html lang="en">
//             <body>
//                 {children}
//                 <div id="responsive-overlay"></div>
//             </body>
//         </html>
//     );
// }

import { Provider } from "react-redux";
import store from "@/shared/redux/store";
import { Initialload } from "@/shared/layout-components/contextapi";
import React, { useState } from "react";
import "./globals.css";

// export const metadata: Metadata = {
//     title: "Ynex App",
//     description: "App using Next.js App Router",
// };

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [pageloading, setpageloading] = useState(false);

    return (
        <html lang="en">
            <body>
                <Initialload.Provider value={{ pageloading, setpageloading }}>
                    <Provider store={store}>
                        {children}
                        <div id="responsive-overlay"></div>
                    </Provider>
                </Initialload.Provider>
            </body>
        </html>
    );
}