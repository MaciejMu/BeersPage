import Link from "next/link";
import React from "react";
import { Beer } from "../types";

const fetchBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/red-ale");
  const beer: Beer[] = await res.json();
  return beer;
};

async function Carusele() {
  const beer = await fetchBeer();

  return (
    <div className="beer">
      {beer.map((b) => (
        <p key={b.id}>
          {b.id}
          <Link href={`/red-ale/${b.id}`}> {b.name} </Link>
        </p>
      ))}
    </div>
  );
}

export default Carusele;
