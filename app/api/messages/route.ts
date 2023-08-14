import { NextApiRequest, NextApiResponse } from "next";
import { Message } from "@/app/types";
import { galleryImages } from "@/app/api/data";
import { NextResponse } from "next/server";
// const messages: Message[] = [];

export async function POST(req: Request, res: NextApiResponse) {
  if (req.method === "POST") {
    const {id, time, content, author, imageId } = await req.json()
    // messages.push(newMessage);
    
    const image = galleryImages.find((image) => image.id === imageId);
    if(!image) throw new Error("Image not found")
    image.messages.unshift({id, time, content, author});
    return NextResponse.json({message: "Message added successfully"}, {status: 201});
  } 
  return NextResponse.json({message: "Failed to add message"}, {status: 405});
  }
