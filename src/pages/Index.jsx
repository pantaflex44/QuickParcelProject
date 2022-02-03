import React, { useContext, useMemo } from "react";

import * as styles from "../css/App.module.scss";
import QuickParcelProjectLogo from "../../assets/QuickParcelProject.png";

import { PageContext } from "../App";

export default function Index() {
    const Page = useContext(PageContext);

    return useMemo(() => {
        return (
            <>
                <h1 className={styles.title}>
                    <img
                        src={QuickParcelProjectLogo}
                        alt="QuickParcelProject"
                    />
                    QuickParcelProject with Parcel, Sass, React and Jest
                </h1>
            </>
        );
    }, [Page]);
}
