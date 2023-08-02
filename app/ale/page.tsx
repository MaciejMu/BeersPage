import Link from "next/link";
import CustomImage from "../../src/components/customImg/customImage";
import { Beer } from "../../types/types";
import PaginationControls from "@/src/components/PagginationControls/PagginationControls";
import { Suspense } from "react";

const fetchBeer = async () => {
  const res = await fetch("https://api.sampleapis.com/beers/ale");
  const beer: Beer[] = await res.json();
  return beer;
};

const Stout = async ({
  searchParams} : { searchParams : {[key:string] : string | string[] | undefined}}) => {
    const beers = await fetchBeer();
  
    const page = searchParams['page'] ?? '1'
    const per_page = searchParams['per_page'] ?? '5'
    
    const start = (Number(page) - 1) * (Number(per_page));
    const end = start + Number(per_page) ;

    const enteries = beers.slice(start, end);
    console.log(enteries)

  return (
  <>
  <Suspense fallback={<p>Loading...</p>}>
    {enteries.map((b) => (
      <Link className="beers" href={`/ale/${b.id}`} key={b.id}>
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
        unoptimized />
    </Link>
  ))}
  </Suspense>
  <PaginationControls hasNextPage={end < beers.length} hasPrevPage={start > 0} numberOfItmes={beers.length} beerType={'ale'}/>
  </>
)};

export default Stout;
