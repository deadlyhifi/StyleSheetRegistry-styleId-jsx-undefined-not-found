import { NextFunctionComponent } from "next";
import * as React from "react";
import styles from "./style.scss";

// Constants
import Links from "../Links.json";

export const Home: NextFunctionComponent = () => (
  <React.Fragment>
    <style jsx>{styles}</style>
    {/* <style jsx>{`
      ul {
        background: hotpink;

        li {
          padding: 20px;
          border: 10px solid dodgerblue;
        }
      }
    `}</style> */}
    <ul>
      {Links.map(logo => (
        <a
          href={logo.HREF}
          title={logo.TITLE}
          rel="noopener external"
          target="_blank"
          data-qa={logo.DATA_QA}
          key={logo.KEY}
        >
          <li>
            <img src={logo.FILE_PATH} alt={logo.ALT} />
          </li>
        </a>
      ))}
    </ul>
  </React.Fragment>
);

Home.displayName = "Components:Home";

export default Home;
