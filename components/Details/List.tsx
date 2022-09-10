import React from "react";

interface Props {
  values?: string;
  string: string;
}
const List = ({ string, values = "values" }: Props) => {
  return (
    <p className="font-semibold">
      {string}: <span className="font-light">{values}</span>
    </p>
  );
};

export default List;
