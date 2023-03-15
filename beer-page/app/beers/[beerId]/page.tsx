import { Beer } from "@/app/types";
import React from "react";
import Image from "next/image";

type PageProps = {
  params: {
    beerId: string;
  };
};

const fetchBeer = async (beerId: string) => {
  const res = await fetch(`https://api.sampleapis.com/beers/ale/${beerId}`);
  const beer: Beer = await res.json();
  return beer;
};

async function Beer({ params: { beerId } }: PageProps) {
  const beer = await fetchBeer(beerId);
  return (
    <div>
      <h1>{beer.name}</h1>
      <div>
        <Image src={beer.image} alt={beer.name} fill />
      </div>
    </div>
  );
}

export default Beer;
