import { GalleryImage } from "@/app/types";
import GalleryItem from "./GalleryItem";

interface GalleryProps {
  images: GalleryImage[];
}

async function Gallery({ images }: GalleryProps) {
  //   const simages = await fetch("/api/", { method: "GET" });
  //   console.log(simages);
  return (
    <section className="image-list">
      {images.length > 0 &&
        images.map((image) => <GalleryItem key={image.id} image={image} />)}
    </section>
  );
}

export default Gallery;
