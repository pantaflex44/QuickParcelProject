import React from "react";

import * as styles from "../css/App.module.scss";

import Metas from "../components/Metas";

export default function Layout({ props, children }) {
    return (
        <>
            <main className={styles.home} {...props}>
                {children}
            </main>
        </>
    );
}
