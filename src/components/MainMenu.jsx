import React, { useContext } from "react";
import { NavLink } from "react-router-dom";

export default function MainMenu() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : "inactive"}`
                        }
                    >
                        Accueil
                    </NavLink>
                </li>
                <li>
                    <NavLink
                        to="/about"
                        className={({ isActive }) =>
                            `nav-link ${isActive ? "active" : "inactive"}`
                        }
                        end
                    >
                        A propos de...
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
