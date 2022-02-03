import React, { useContext, useMemo } from "react";

import * as styles from "../css/App.module.scss";

import { PageContext } from "../App";

export default function About() {
    const Page = useContext(PageContext);

    return useMemo(() => {
        return (
            <>
                <h1 className={styles.title}>A propos de ...</h1>
            </>
        );
    }, [Page]);
}
