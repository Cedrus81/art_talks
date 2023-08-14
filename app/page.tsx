import Filter from "./styles/cmps/Filter";
import Gallery from "./styles/cmps/Gallery";

//this is my first next.js project at this scale, I did my best
export default async function Home() {
  const data = await fetch("http://localhost:3000/api/images", {
    method: "GET",
  });
  const { images } = await data.json();
  return (
    <main>
      <Filter />
      <Gallery images={images} />
    </main>
  );
}
