import React from "react";

import Metas from "./Metas";
import MainMenu from "./MainMenu";

export default function Header() {
    return (
        <header>
            <Metas />
            <MainMenu />
            <h1>
                Wellcome to <strong>QuickParcelProject</strong>
            </h1>
            <h2>Parcel - SASS - ReactJs - Jest</h2>
        </header>
    );
}
