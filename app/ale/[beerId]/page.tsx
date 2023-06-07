import { Beer } from "@/types/types";
import notFound from "./not-found";
import CustomImage from "@/src/components/customImg/customImage";
import { PageProps } from "@/types/types";
import AddToCard from "@/src/components/AddToCard/AddToCard";

const fetchBeer = async (beerId: string) => {
  const res = await fetch(`https://api.sampleapis.com/beers/ale/${beerId}`);
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
      <h1 className="single-beer__title">{beer.name}</h1>
      <article className="single-beer">
        <CustomImage
          className={"img"}
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
            excepturi! Magnam odit nostrum omnis dolores voluptates.
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
