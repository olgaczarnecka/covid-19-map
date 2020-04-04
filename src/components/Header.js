import React from "react";
import { Link } from "gatsby";

import Container from "components/Container";

const Header = () => {
  return (
    <header>
      <Container type="content">
        <p>COVID-19 MAP</p>
        <ul>
          <li>
            <Link to="/">Map</Link>
          </li>
        </ul>
      </Container>
    </header>
  );
};

export default Header;
