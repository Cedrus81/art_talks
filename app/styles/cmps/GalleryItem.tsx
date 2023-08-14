import { GalleryImage } from "@/app/types";
import React from "react";
import Image from "next/image";
import Link from "next/link";
interface GalleryItemProps {
  image: GalleryImage;
}
function GalleryItem({ image }: GalleryItemProps) {
  return (
    <Link className="gallery-item" href={`/image/${image.id}`}>
      <Image src={image.src} alt={image.title} width={150} height={150} />
      <h3>{image.title}</h3>
      <p className="author">By: {image.author}</p>
      <p className="description">{image.description}</p>
    </Link>
  );
}

export default GalleryItem;
