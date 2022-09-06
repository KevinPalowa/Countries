import React from 'react'
import { AiOutlineSearch } from 'react-icons/ai'

interface Props{
  value:string;
  onChange:(event: React.ChangeEvent<HTMLInputElement>) => void;
}
const Search = ({value,onChange}:Props) => {
  return (
    <>
      <div className='flex relative items-center sm:w-1/3 w-full '>
        <AiOutlineSearch className='absolute z-10 left-5' size={25}/>
        <input
          onChange={onChange}
          placeholder="Search for country..."
          className="drop-shadow-md dark:bg-darker pl-14 bg-white w-full py-3 rounded-md font-semibold"
          value={value}
        />
      </div>
    </>
  )
}

export default Search
