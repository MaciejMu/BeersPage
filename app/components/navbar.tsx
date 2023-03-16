import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <img src="https://see.fontimg.com/api/renderfont4/OoJA/eyJyIjoiZnMiLCJoIjo1MiwidyI6MjAwMCwiZnMiOjI2LCJmZ2MiOiIjMjkyMzIzIiwiYmdjIjoiIzU4MzYzNiIsInQiOjF9/QmVlcg/806-typography-806-typography.png" />
      <ul className="navbar__list">
        <li>
          <a href="/" className="navbar__item">
            HOME
          </a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
