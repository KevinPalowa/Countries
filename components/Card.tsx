import Image from "next/image";
import Link from "next/link";
const Card = ({ src, name, population, region, capital }) => {
  return (
    <Link href={`/details/${name}`}>
      <div className="cursor-pointer dark:bg-darker bg-white drop-shadow-md max-w-sm rounded-md">
        <div className="w-full h-44 rounded-t-md relative">
          <Image
            src={src}
            layout="fill"
            alt={name}
            className="absolute rounded-t-md"
          />
        </div>
        <div className="p-5">
          <p className="font-extrabold">{name}</p>
          <div className="mb-6">
            <p>Population:{population}</p>
            <p>Region:{region}</p>
            <p>Capital:{capital}</p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
