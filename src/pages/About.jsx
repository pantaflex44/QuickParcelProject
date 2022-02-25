import React from "react";
import { Helmet } from "react-helmet-async";

import QuickParcelProjectLogo from "../assets/QuickParcelProject.png";

export default function About() {
    return (
        <>
            <Helmet>
                <title>QuickParcelProject - About</title>
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
                    content="QuickParcelProject - About"
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
                <p>
                    QuickParcelProject use Parcel to build Web app with Sass and
                    React modules.
                    <br />
                    The Jest module is used to test your scripts.
                    <br />
                    CSS generated files, use Sass and AutoPrefixer module. JS
                    and CSS files are minified in 'production' mode.
                </p>
                <div className="boxes">
                    <div>
                        <h3>Github</h3>
                        <h4>The classic way</h4>
                        <pre>
                            {`
mkdir MyProject
cd MyProject
git clone https://github.com/pantaflex44/QuickParcelProject .
rm -rf .git
                                `}
                        </pre>
                    </div>
                    <div>
                        <h3>Download</h3>
                        <h4>The roots way</h4>
                        <pre>
                            {`
wget https://github.com/pantaflex44/QuickParcelProject/archive/refs/heads/main.zip
unzip -o main.zip
mv QuickParcelProject-main MyProject
rm -rf main.zip
cd MyProject
                                `}
                        </pre>
                    </div>
                </div>
            </div>
        </>
    );
}
