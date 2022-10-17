import React from "react";
import { useSelector } from "react-redux";
import { GotCard } from "../components/GotCard";

export const Fav = () => {
  const favs = useSelector((store) => store.favourite);
  return (
    <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-3 list container-list">
      {favs.map((character) => (
        <GotCard key={character.id} data={character} />
      ))}
    </div>
  );
};
