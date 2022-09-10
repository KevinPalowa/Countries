import axios from "axios";
import React from "react";
import Layout from "../../components/Layout";
import Image from "next/image";
import CountryInterface from "../../interfaces/CountryInterface";
import { useRouter } from "next/router";
import { BiArrowBack } from "react-icons/bi";
import Link from "next/link";
import List from "../../components/Details/List";
interface Props extends CountryInterface {
  population: number;
  subregion: string;
  topleveldomain: string;
  borders: string[];
}
const getSlug = async () => {
  const data = await axios.get(
    "https://restcountries.com/v3.1/all?fields=cca2"
  );
  return data;
};

const getCountry = async (code: string) => {
  let params = "";
  let border;
  const country = await axios.get(
    `https://restcountries.com/v3.1/alpha/${code}`
  );

  if (country.data[0].borders) {
    params += country.data[0].borders.map((border: string) => {
      return `${border}`;
    });
    border = await axios.get("https://restcountries.com/v3.1/alpha", {
      params: {
        codes: params,
        fields: "name,cca2",
      },
    });
    country.data[0].borders = border.data;
  }
  return country;
};
const Country = ({ data }: { data: Props }) => {
  const router = useRouter();
  return (
    <Layout title={data.name.common}>
      <button
        onClick={() => router.back()}
        className="flex items-center justify-between dark:bg-dark bg-white px-8 py-1 rounded-md drop-shadow-md my-14"
      >
        <BiArrowBack />
        <p className="ml-2">Back</p>
      </button>
      <div className="flex sm:flex-row flex-col sm:space-x-32 sm:items-center">
        <div className="relative sm:w-1/2 aspect-[4/3]">
          <Image
            src={data.flags.svg}
            alt={data.name.official}
            layout="fill"
            className="relative"
          />
        </div>
        <div className="sm:w-1/2 w-full ">
          <h2 className="text-2xl font-extrabold">{data.name.common}</h2>
          <div className="flex sm:flex-row flex-col justify-between font-semibold">
            <div>
              <List values={data.name.official} string="Native Name" />
              <List
                string="Population"
                values={data.population.toLocaleString("en-US")}
              />
              <List string="Region" values={data.region} />
              <List string="Sub Region" values={data.subregion} />
              {data.capital ? (
                <List string="Capital" values={data?.capital[0]} />
              ) : (
                ""
              )}
            </div>
            <div className="">
              <List string="Top Level Domain:" values={data.topleveldomain} />
              <List string="Currencies" />
              <List string="Languages" />
            </div>
          </div>
          <div className="flex  mt-10 sm:flex-row flex-col">
            <p className="whitespace-nowrap font-semibold">
              Border Countries:{" "}
            </p>
            <div className="flex flex-wrap sm:ml-5">
              {data.borders?.map((border: any) => (
                <Link href={`${border.cca2}`} key={border.name.common}>
                  <a className="dark:bg-dark bg-white rounded-md mr-2 py-1 px-5 my-0.5 drop-shadow-md">
                    {border.name.common}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

type Params = {
  params: {
    name: string;
  };
};
export const getStaticProps = async ({ params }: Params) => {
  let country;
  if (params) {
    country = await getCountry(params.name);
  }
  return {
    props: { data: country?.data[0] },
  };
};

export async function getStaticPaths() {
  const { data } = await getSlug();
  return {
    paths: data.map((country: any) => {
      return {
        params: {
          name: country.cca2,
        },
      };
    }),
    fallback: false,
  };
}

export default Country;
