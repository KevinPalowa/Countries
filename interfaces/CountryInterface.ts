export default interface CountryInterface {
  flags: {
    svg: string;
    png: string;
  };
  name: {
    common: string;
    official: string;
    nativeName: {};
  };
  capital: string[];
  region: string;
  people: number;
}
