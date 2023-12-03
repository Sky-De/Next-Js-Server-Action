"use server";
import { v4 as uuid } from "uuid";

import AnimeCard, { AnimeProp } from "@/components/AnimeCard";

export const fetchAnime = async (page: number) => {
  const rapidAPIKey = process.env.X_RapidAPI_Key;
  const rapidAPIHost = process.env.X_RapidAPI_Host;

  if (!rapidAPIKey || !rapidAPIHost) {
    throw new Error("RapidAPI Key or Host is missing");
  }

  const headers = {
    "X-RapidAPI-Key": rapidAPIKey,
    "X-RapidAPI-Host": rapidAPIHost,
  };

  const response = await fetch(
    `https://shikimori.one/api/animes?page=${page}&limit=8&order=popularity`,
    {
      headers,
    }
  );

  const data = await response.json();

  return (
    data &&
    data.map((item: AnimeProp, index: number) => (
      <AnimeCard key={uuid()} anime={item} index={index} />
    ))
  );
};
