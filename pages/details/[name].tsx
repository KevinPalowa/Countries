import axios from 'axios'
import React from 'react'
import Layout from '../../components/Layout'
import Image from 'next/image'
import { GetServerSideProps } from 'next/types'
import CountryInterface from '../../interfaces/CountryInterface'
interface Props extends CountryInterface{
  population:number
  subregion:string
  capital:[]
  topleveldomain:string
}
const country = ({data}:{data: Props }) => {
  console.log(data)
  return (
    <Layout title={data.name.common}>
      <div className='flex'>
        <div className='relative w-1/3 h-52'>
          <Image src={data.flags.png} alt={data.name.common} layout='fill' className='relative'/>
        </div>
          <div>
          <h2 className='font-extrabold text-lg'>{data.name.common}</h2>
          <div className='flex'>
            <div>
              <p>Native Name: </p>
              <p>Population: {data.population}</p>
              <p>Region: {data.region}</p>
              <p>Sub Region: {data.subregion}</p>
              <p>Capital: {data.capital[0]}</p>
            </div>
              <div>
              <p>Top Level Domain: {data.topleveldomain}</p>
              <p>Currencies</p>
              <p>Languages</p>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export const getServerSideProps: GetServerSideProps = async ({ query }) => {
  const res = await axios.get(
    `https://restcountries.com/v3.1/name/${query.name}`
  );
  return {
    props: { data: res.data[0] },
  };
};

export default country
