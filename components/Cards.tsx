import React from "react";
import CountryInterface from "../interfaces/CountryInterface";
import Card from "./Card";

interface Props {
  items: CountryInterface[];
  query: { search: string; region: string };
}
const Cards = ({ items, query }: Props) => {
  const filtered = items.filter((country) => {
    if (query.search.length > 0 && query.region.length > 0) {
      return (
        country.name.common
          .toLowerCase()
          .includes(query.search.toLowerCase()) &&
        country.region.toLowerCase() === query.region.toLowerCase()
      );
    } else if (query.search.length > 0 && query.region.length === 0) {
      return country.name.common
        .toLowerCase()
        .includes(query.search.toLowerCase());
    } else if (query.search.length === 0 && query.region.length > 0) {
      return country.region.toLowerCase() === query.region.toLowerCase();
    } else {
      return country;
    }
  });
  return (
    <div className="grid sm:grid-cols-4 grid-cols-1 gap-12">
      {filtered?.map((country: any) => (
        <Card
          href={country.cca2}
          name={country.name.common}
          population={country.population}
          region={country.region}
          capital={country.capital}
          key={country.name.common}
          src={country.flags.png}
        />
      ))}
    </div>
  );
};

export default Cards;
