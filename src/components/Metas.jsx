import React from "react";
import { Helmet } from "react-helmet-async";

import QuickParcelProjectLogo from "../assets/QuickParcelProject.png";

export default function Metas() {
    return (
        <Helmet htmlAttributes={{ lang: "fr-FR" }}>
            <title>QuickParcelProject</title>
            <meta
                name="description"
                content="A quick project maker with Parcel, Sass, React and Jest"
            />
            <meta name="keywords" content="parcel,sass,react,jest,project" />
            <meta http-equiv="content-language" content="fr-FR" />
            <meta name="author" content="Christophe LEMOINE" />
            <meta name="generator" content="QuickParcelProject" />
            <meta name="publisher" content="QuickParcelProject" />
            <meta property="og:site_name" content="QuickParcelProject" />
            <meta property="og:title" content="QuickParcelProject" />
            <meta
                property="og:description"
                content="A quick project maker with Parcel, Sass, React and Jest"
            />
            <meta property="og:image" content={QuickParcelProjectLogo} />
            <meta property="og:url" content={window.location.href} />
            <meta name="twitter:card" content="summary_large_image" />
            <meta name="twitter:image:alt" content={QuickParcelProjectLogo} />
            <link
                rel="icon"
                type="image/x-icon"
                href={QuickParcelProjectLogo}
            ></link>
            <meta name="robots" content="all" />
        </Helmet>
    );
}
