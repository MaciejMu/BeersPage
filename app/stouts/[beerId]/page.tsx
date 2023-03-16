import { Beer } from "@/app/types";
import React from "react";
import Image from "next/image";
import notFound from "./not-found";

type PageProps = {
  params: {
    beerId: string;
  };
};

const fetchBeer = async (beerId: string) => {
  const res = await fetch(`https://api.sampleapis.com/beers/stouts/${beerId}`);
  const beer: Beer = await res.json();
  return beer;
};

async function Beer({ params: { beerId } }: PageProps) {
  const beer = await fetchBeer(beerId);
  if (!beer.id) {
    return notFound();
  }
  return (
    <>
      <h1 className="single-beer__title">{beer.name}</h1>
      <article className="single-beer">
        <Image
          className="single-beer__img"
          src={beer.image}
          alt={beer.name}
          width={400}
          height={400}
        />
        <section className="information-section">
          <span className="information-section__price">
            Price: {beer.price}
          </span>
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
            eveniet voluptas molestiae. Ex possimus id vero, quia consequatur
            sit tempore fugiat ad maiores optio magnam fuga rerum consequuntur
            non neque repellendus porro corporis asperiores vel at sapiente enim
            quis aspernatur? Aperiam cumque, eum eligendi temporibus provident
            error pariatur hic nesciunt recusandae atque incidunt debitis quia
            omnis vero ex sapiente modi quaerat, quam ratione, facilis natus
            adipisci suscipit!
          </p>
        </section>
      </article>
    </>
  );
}

export default Beer;
