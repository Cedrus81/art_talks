import { GalleryImage, Message } from "@/app/types";

//! placeholder for until we have a database
let idCounter = 1
function generateId(): string {
  return (idCounter++).toString();
}

export const galleryImages: GalleryImage[] = [
  {
    id: generateId(),
    title: "Mountain",
    author: "John Doe",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful mountain landscape.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "Wow, this is breathtaking!",
        time: Date.now() - 1000 * 60 * 5, // 5 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "I wish I could be there right now.",
        time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I've been there before, it's amazing!",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Beach",
    author: "Jane Smith",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful beach with crystal clear water.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I wish I could be there right now.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "Me too, it looks so relaxing.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "City",
    author: "John Smith",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful city skyline at night.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I love the lights!",
        time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "It's so beautiful!",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I've been there before, it's an amazing city.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "David",
        content: "I wish I could visit that city someday.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Mountain",
    author: "John Doe",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful mountain landscape.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "Wow, this is breathtaking!",
        time: Date.now() - 1000 * 60 * 5, // 5 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "I wish I could be there right now.",
        time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Beach",
    author: "Jane Smith",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful beach with crystal clear water.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I wish I could be there right now.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "Me too, it looks so relaxing.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "City",
    author: "John Smith",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful city skyline at night.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I love the lights!",
        time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "It's so beautiful!",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I've been there before, it's an amazing city.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "David",
        content: "I wish I could visit that city someday.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Forest",
    author: "Jane Doe",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful forest with tall trees.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I love the colors!",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "It's so peaceful.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I wish I could go for a hike there.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Lake",
    author: "John Smith",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful lake with mountains in the background.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I wish I could go for a swim there.",
        time: Date.now() - 1000 * 60 * 4, // 4 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "It's so serene.",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I've been there before, it's a great place to relax.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "David",
        content: "I wish I could go fishing there.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  {
    id: generateId(),
    title: "Desert",
    author: "Jane Doe",
    src: `https://picsum.photos/id/${generateId()}/200`,
    description: "A beautiful desert landscape.",
    messages: [
      {
        id: generateId(),
        author: "Alice",
        content: "I love the colors!",
        time: Date.now() - 1000 * 60 * 3, // 3 minutes ago
      },
      {
        id: generateId(),
        author: "Bob",
        content: "It's so vast.",
        time: Date.now() - 1000 * 60 * 2, // 2 minutes ago
      },
      {
        id: generateId(),
        author: "Charlie",
        content: "I wish I could go on a camel ride there.",
        time: Date.now() - 1000 * 60 * 1, // 1 minute ago
      },
    ],
  },
  // Add more images here
];


