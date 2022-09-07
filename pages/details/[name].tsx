import axios from "axios";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import { GetServerSideProps } from "next/types";
import CountryInterface from "../../interfaces/CountryInterface";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
interface Props extends CountryInterface {
  population: number;
  subregion: string;
  topleveldomain: string;
  borders: string[];
}
const Country = ({ data }: { data: Props }) => {
  const router = useRouter();
  console.log(data);
  return (
    <Layout title={data.name.common}>
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center dark:bg-dark bg-white px-8 py-1 rounded-md drop-shadow-md my-3"
      >
        <BiArrowBack /> Back
      </button>
      <div className="flex space-x-32 items-center">
        <div className="relative w-1/2 h-80">
          <Image
            src={data.flags.png}
            alt={data.name.common}
            layout="fill"
            className="relative"
          />
        </div>
        <div className="w-1/2">
          <h2 className="font-extrabold text-2xl">{data.name.common}</h2>
          <div className="flex">
            <div>
              <p>Native Name: </p>
              <p>Population: {data.population.toLocaleString("en-US")}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion}</p>
              <p>Capital: {data.capital[0]}</p>
            </div>
            <div>
              <p>Top Level Domain: {data.topleveldomain}</p>
              <p>Currencies </p>
              <p>Languages: </p>
            </div>
          </div>
          <div className="flex">
            <p>Border Countries: </p>
            <div className="flex space-x-2">
              {data.borders
                ? data.borders.map((border) => (
                    <Link href={border} key={border}>
                      <a className="bg-dark">
                        <a className="rounded-md p-2">{border}</a>
                      </a>
                    </Link>
                  ))
                : ""}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${query.name}`
  );
  return {
    props: { data: res.data[0] },
  };
};

export default Country;
