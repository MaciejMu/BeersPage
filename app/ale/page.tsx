import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Beer } from "../types";

const fetchBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/ale");
  const beer: Beer[] = await res.json();
  return beer;
};

async function Ale() {
  const beer = await fetchBeer();

  return (
    <main>
      {beer.map((b) => (
        <Link className="beers" href={`/ale/${b.id}`} key={b.id}>
          <article className="data">
            <h2 className="data__number">{b.id}</h2>
            <p className="data__name">{b.name}</p>
          </article>
          <Image src={b.image} alt="" width={150} height={150}></Image>
        </Link>
      ))}
    </main>
  );
}

export default Ale;
