import Image from "next/image";
import Link from "next/link";
interface Props {
  src: string;
  name: string;
  population: number;
  region: string;
  capital: string;
  href: string;
}
const Card = ({ src, name, population, region, capital, href }: Props) => {
  return (
    <Link href={`/details/${href}`}>
      <div className="cursor-pointer dark:bg-dark bg-white drop-shadow-md max-w-sm rounded-md">
        <div className="w-full h-44 rounded-t-md relative">
          <Image
            src={src}
            layout="fill"
            alt={name}
            className="absolute rounded-t-md"
          />
        </div>
        <div className="p-5">
          <p className="font-extrabold text-xl">{name}</p>
          <div className="mb-6 mt-5">
            <p className="font-semibold">
              Population:{" "}
              <span className="font-light">
                {population.toLocaleString("en-US")}
              </span>
            </p>
            <p className="font-semibold">
              Region: <span className="font-light">{region}</span>
            </p>
            <p className="font-semibold">
              Capital: <span className="font-light">{capital}</span>
            </p>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;
