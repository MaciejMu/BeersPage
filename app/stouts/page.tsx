import Link from "next/link";
import CustomImage from "../components/customImg/customImage";
import { Beer } from "../../types/types";

const fetchBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/stouts");
  const beer: Beer[] = await res.json();
  return beer;
};

const Stout = async () => {
  const beer = await fetchBeer();
  return beer.map((b) => (
    <Link className="beers" href={`/stouts/${b.id}`} key={b.id}>
      <article className="data">
        <h2 className="data__number">{b.id}</h2>
        <p className="data__name">{b.name}</p>
      </article>
      <CustomImage
        className="img"
        src={b.image}
        alt="beer image"
        width={150}
        height={150}
        unoptimized
      />
    </Link>
  ));
};

export default Stout;
