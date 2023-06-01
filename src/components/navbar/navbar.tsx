import Image from "next/image";
import Link from "next/link";

function Navbar() {
  return (
    <nav className="navbar">
      <a href="/">
        <img src="https://see.fontimg.com/api/renderfont4/OoJA/eyJyIjoiZnMiLCJoIjo1MiwidyI6MjAwMCwiZnMiOjI2LCJmZ2MiOiIjMjkyMzIzIiwiYmdjIjoiIzU4MzYzNiIsInQiOjF9/QmVlcg/806-typography-806-typography.png" />
      </a>
      <Link href={"/cart"}>
        <Image
          src={"cart.svg"}
          alt="shopping cart"
          height={40}
          width={40}
          className="cart"
        />
      </Link>
    </nav>
  );
}

export default Navbar;
