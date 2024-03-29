import * as React from "react";
import { Link } from "gatsby";
import {
    container,
    heading,
    navLinks,
    navLinkItem,
    navLinkText,
} from "./layout.module.css";

const Layout = ({ pageTitle, children }) => {
    return (
        <div className={container}>
            <nav>
                <ul className={navLinks}>
                    <li className={navLinkItem}>
                        <Link to="/" className={navLinkText}>
                            Home
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/about" className={navLinkText}>
                            About
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link to="/portfolio" className={navLinkText}>
                            Portfolio
                        </Link>
                    </li>

                    <li className={navLinkItem}>
                        <Link
                            to="https://www.github.com/maxwellsquared"
                            className={navLinkText}
                        >
                            Github
                        </Link>
                    </li>
                    <li className={navLinkItem}>
                        <Link
                            to="https://www.linkedin.com/in/kuhnmax"
                            className={navLinkText}
                        >
                            LinkedIn
                        </Link>
                    </li>
                </ul>
            </nav>
            <main>
                <h1 className={heading}>{pageTitle}</h1>
                {children}
            </main>
        </div>
    );
};

export default Layout;
