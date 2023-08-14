export type GalleryImage = {
    id: string;
    src:string;
    title: string;
    author: string;
    description: string;
    messages: Message[];
}

export type Message = {
    id: string;
    author: string;
    content: string;
    time: number;
  }