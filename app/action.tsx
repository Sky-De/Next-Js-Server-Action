"use server";
import { v4 as uuid } from "uuid";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`
  );

  const data = await response.json();

  return (
    data &&
    data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={uuid()} anime={item} index={index} />
    ))
  );
};
