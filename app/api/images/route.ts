import { NextRequest, NextResponse } from "next/server";
// import { GalleryImage } from "../types";
import { galleryImages } from "../data";

export function POST(req: NextRequest) {
    //@ts-ignore
     const {filter} = req.query
     const filteredImages = galleryImages.filter((image) => {
         return (image.title.toLowerCase().includes(filter.toLowerCase()) || image.author.toLowerCase().includes(filter.toLowerCase()))
     })
     return NextResponse.json({images: filteredImages})
}

export function GET(){
    return NextResponse.json({ images: galleryImages })
}

