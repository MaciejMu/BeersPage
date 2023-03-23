import React from "react";
import Image from "next/image";
import Link from "next/link";
import ale from "../public/ale.jpeg";
import stout from "../public/stout.webp";

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
      </section>
    </main>
  );
};

export default Home;
