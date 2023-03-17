import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Beer } from "../types";
import noImg from "../public/no-img.jpeg";

// const placeholderImageUrl = noImg;

const fetchBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/stouts");

  const beer: Beer[] = await res.json();
  return beer;
};

async function Stout() {
  const beer = await fetchBeer();
  return (
    <div>
      {beer.map((b) => (
        <Link className="beers" href={`/stouts/${b.id}`} key={b.id}>
          <article className="data">
            <h2 className="data__number">{b.id}</h2>
            <p className="data__name">{b.name}</p>
          </article>
          {b.image && isValidUrl(b.image) ? (
            <Image
              src={b.image}
              alt=""
              width={150}
              height={150}
              unoptimized
            ></Image>
          ) : (
            <Image src={noImg} alt="" width={150} height={150}></Image>
          )}
        </Link>
      ))}
    </div>
  );
}

function isValidUrl(url: string) {
  try {
    new URL(url);
    return true;
  } catch (error) {
    return false;
  }
}

export default Stout;
