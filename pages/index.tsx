import type { GetStaticProps, NextPage } from "next";
import { ChangeEvent, useState } from "react";
import Layout from "../components/Layout";
import Cards from "../components/Cards";
import Search from "../components/Search";
const Home: NextPage = ({ countries }: any) => {
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  };

  return (
    <Layout title="Countries App">
      <div className="flex justify-between sm:flex-row flex-col sm:mx-0 -mx-10 my-10 sm:space-y-0 space-y-14">
        <Search value={search} onChange={handleChange} />
        <select
          onChange={(e) => setRegion(e.target.value)}
          className="drop-shadow-md bg-white dark:bg-dark p-3 rounded-lg max-w-[50%]"
        >
          <option value="">Filter by Region</option>
          <option>Africa</option>
          <option value="americas">America</option>
          <option>Asia</option>
          <option>Europe</option>
          <option>Oceania</option>
        </select>
      </div>
      {countries ? <Cards items={countries} query={{ search, region }} /> : ""}
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,capital,population,flags,region"
  );
  const countries = await res.json();
  return {
    props: { countries },
  };
};
export default Home;
