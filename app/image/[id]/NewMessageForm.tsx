"use client";

import { Message } from "@/app/types";
import React, { useState } from "react";

type MessageFormProps = {
  imageId: string;
};

function NewMessageForm({ imageId }: MessageFormProps) {
  const [content, setContent] = useState("");

  async function onAddMessage(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const newMessage: Message = {
      id: generateRandomString(10),
      author: "You",
      content,
      time: Date.now(),
    };
    const response = await fetch("/api/messages", {
      method: "POST",
      body: JSON.stringify({ ...newMessage, imageId }),
    });
    if (response.ok) {
      console.log("Message added successfully");
      setContent("");
    } else {
      console.error("Failed to add message");
    }
  }

  return (
    <form onSubmit={onAddMessage}>
      <input
        type="text"
        name="newMessage"
        onChange={(e) => setContent(e.target.value)}
      />
      <button type="submit">Send</button>
    </form>
  );
}

export default NewMessageForm;

function generateRandomString(length: number): string {
  const characters =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  let result = "";
  for (let i = 0; i < length; i++) {
    result += characters.charAt(Math.floor(Math.random() * characters.length));
  }
  return result;
}
