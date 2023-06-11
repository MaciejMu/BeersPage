import { Beer } from "@/types/types";
import React from "react";
import notFound from "./not-found";
import CustomImage from "@/src/components/customImg/customImage";
import { PageProps } from "@/types/types";
import Link from "next/link";
import AddToCard from "@/src/components/AddToCard/AddToCard";

const fetchBeer = async (beerId: string) => {
  const res = await fetch(`https://api.sampleapis.com/beers/stouts/${beerId}`);
  const beer: Beer = await res.json();
  return beer;
};

const Beer = async ({ params: { beerId } }: PageProps) => {
  const beer = await fetchBeer(beerId);
  if (!beer.id) {
    return notFound();
  }
  return (
    <div className="single">
      <p className="single__button">
        <Link href={"/ale"}>⮐ back to stouts beers</Link>
      </p>
      <h1 className="single-beer__title">{beer.name}</h1>
      <article className="single-beer">
        <CustomImage
          className="img"
          src={beer.image}
          alt={`${beer.name} image`}
          width={400}
          height={400}
          placeholderimg={"https://placehold.co/400x400"}
          unoptimized
        />
        <section className="information-section">
          <span className="information-section__price">{beer.price}</span>
          <p className="information-section__description">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quos
            officiis accusamus impedit dolorum numquam eligendi maxime id enim
            perferendis asperiores ea deserunt totam quas tenetur commodi
            corrupti qui sequi excepturi autem quisquam obcaecati aliquam eum,
            eveniet rerum? Vero neque harum quod quae minima enim, tempora
            dignissimos? Esse tempore debitis deserunt dignissimos cum,
            asperiores fugit! Est tenetur minus provident illum veniam
            excepturi! Magnam odit nostrum omnis dolores voluptates. Voluptatem
            nam laudantium ipsam quam asperiores? Soluta quis possimus sunt
            mollitia sit quisquam ducimus impedit rerum doloribus culpa minus
            blanditiis incidunt corporis ipsum et assumenda, obcaecati quas sed
            quia neque unde harum fuga! Adipisci sed repellat, nisi velit, eius
            quis corporis nihil eos et omnis repudiandae possimus explicabo
            eveniet voluptas molestiae.
          </p>
          <AddToCard
            price={beer.price}
            name={beer.name}
            rating={{
              average: 0,
              reviews: 0,
            }}
            image={beer.image}
            id={beer.id}
          />
        </section>
      </article>
    </div>
  );
};

export default Beer;
