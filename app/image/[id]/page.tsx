import { galleryImages } from "@/app/api/data";
import Image from "next/image";
import NewMessageForm from "./NewMessageForm";
import { Message } from "@/app/types";
import Link from "next/link";
interface ImageDetailsProps {
  params: {
    id: string;
  };
}

function ImageDetails({ params }: ImageDetailsProps) {
  const { id } = params;
  const image = galleryImages.find((image) => image.id === id);

  if (!image) {
    return <div>Image not found</div>;
  }

  return (
    <main className="image-details">
      <Link href="/">
        <button>back</button>
      </Link>
      <h1>
        {image.title} <span>By {image.author}</span>
      </h1>
      <article className="image-details-content">
        <Image src={image.src} alt={image.title} width={150} height={150} />
        <section className="chat">
          <div className="chat-header">Chat</div>
          <div className="messages">
            {image.messages.map((message) => (
              <p key={message.id}>
                <b>{message.author}</b>:{" " + message.content}
              </p>
            ))}
          </div>
          <NewMessageForm imageId={id} />
        </section>
      </article>
    </main>
  );
}

export default ImageDetails;

const demoMessages: Message[] = [
  {
    id: "1",
    author: "Alice",
    content: "Hello, how are you?",
    time: Date.now() - 1000 * 60 * 5, // 5 minutes ago
  },
  {
    id: "2",
    author: "Bob",
    content: "I'm good, thanks for asking!",
    time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
  },
  {
    id: "3",
    author: "Charlie",
    content: "What are you up to today?",
    time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
  },
  {
    id: "4",
    author: "Alice",
    content: "Not much, just working on some code.",
    time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
  },
  {
    id: "5",
    author: "Bob",
    content: "Cool, what kind of code?",
    time: Date.now() - 1000 * 60 * 1, // 1 minute ago
  },
  {
    id: "6",
    author: "Charlie",
    content: "Yeah, tell us more!",
    time: Date.now(), // current time
  },
];
