import axios from "axios";
import type { NextPage } from "next";
import { useEffect, useState } from "react";
import Card from "../components/Card";
import Layout from "../components/Layout";
import NavBar from "../components/NavBar";
const Home: NextPage = () => {
  const [countries, setCountries] = useState();
  useEffect(() => {
    axios
      .get("https://restcountries.com/v3.1/all")
      .then((res) => setCountries(res.data));
  }, []);
  console.log(countries);
  return (
    <Layout>
      <div className="flex justify-between sm:flex-row flex-col">
        <input
          placeholder="Search for country..."
          className="drop-shadow-md dark:bg-darker bg-white p-3 rounded-sm font-semibold"
        />
        <select className="drop-shadow-md bg-white dark:bg-darker p-3 rounded-sm font-semibold">
          <option>Africa</option>
          <option>Asia</option>
        </select>
      </div>
      <div className="grid sm:grid-cols-4 grid-cols-1 gap-12 mt-5">
        {countries?.map((country) => (
          <Card
            name={country.name.common}
            population={country.population}
            region={country.region}
            capital={country.capital}
            key={country.capital}
            src={country.flags.png}
          />
        ))}
      </div>
    </Layout>
  );
};

export default Home;
