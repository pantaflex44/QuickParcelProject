import React from "react";
import { Helmet } from "react-helmet-async";

import QuickParcelProjectLogo from "../assets/QuickParcelProject.png";

export default function Index() {
    return (
        <>
            <Helmet>
                <title>QuickParcelProject - Wellcome</title>
                <meta
                    name="description"
                    content="A quick project maker with Parcel, Sass, React and Jest"
                />
                <meta
                    name="keywords"
                    content="parcel,sass,react,jest,project"
                />
                <meta property="og:site_name" content="QuickParcelProject" />
                <meta
                    property="og:title"
                    content="QuickParcelProject - Wellcome"
                />
                <meta
                    property="og:description"
                    content="A quick project maker with Parcel, Sass, React and Jest"
                />
                <meta property="og:image" content={QuickParcelProjectLogo} />
                <meta property="og:url" content={window.location.href} />
                <meta name="twitter:card" content="summary_large_image" />
                <meta
                    name="twitter:image:alt"
                    content={QuickParcelProjectLogo}
                />
            </Helmet>
            <div className="page">
                <img
                    src={QuickParcelProjectLogo}
                    alt="QuickParcelProject"
                    lazy="loading"
                />
            </div>
        </>
    );
}
