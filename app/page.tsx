import React from "react";
import Image from "next/image";
import Link from "next/link";
import ale from "../public/ale.jpeg";
import stout from "../public/stout.webp";
import redAle from "../public/red-ale.jpeg";

const Home = () => {
  return (
    <main>
      <header className="home__header">Chose your style</header>
      <section className="styles">
        <a href="/ale" className="styles__ale">
          <Image
            src={ale}
            alt="a pint of ale beer image"
            placeholder="blur"
            width={612}
            height={408}
            className="styles__img"
          />
          <p className="styles__name">ALE</p>
        </a>
        <Link href="/stouts" className="styles__stouts">
          <Image
            src={stout}
            alt="a pint of stout beer image"
            placeholder="blur"
            width={1920}
            height={1280}
            className="styles__img"
          />
          <p className="styles__name">STOUTS</p>
        </Link>
        <Link href="/red-ale" className="styles__red-ale">
          <Image
            src={redAle}
            alt="a pint of red ale beer image"
            placeholder="blur"
            width={800}
            height={800}
            className="styles__img"
          />
          <p className="styles__name">RED-ALE</p>
        </Link>
      </section>
    </main>
  );
};

export default Home;
