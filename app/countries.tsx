import React from "react";
import { useQuery } from "@apollo/client";
import { gql } from "graphql-tag";
import client from "../apollo-client";

interface Country {
  awsRegion: string;
  capital: string;
  code: string;
  currencies: string[];
  currency: string;
  emoji: string;
  emojiU: string;
  name: string;
  native: string;
  phone: string;
  phones: string[];
}

interface Continent {
  code: string;
  countries: Country[];
  name: string;
}

interface ContinentData {
  continent: Continent;
}

const GET_CONTINENT = gql`
  query continent($lang: String, $code: ID!) {
    continent(code: $code) {
      code
      countries {
        awsRegion
        capital
        code
        currencies
        currency
        emoji
        emojiU
        name(lang: $lang)
        native
        phone
        phones
      }
      name
    }
  }
`;

const CountryList: React.FC = () => {
  const { loading, error, data } = useQuery<ContinentData>(GET_CONTINENT, {
    variables: { lang: "en", code: "NA" },
    client,
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  const continent = data?.continent;

  if (!continent) return <p>No data available.</p>;

  return (
    <div>
      <h2>{continent.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Country Code</th> <th>Country Name</th> <th>Capital</th>
          </tr>
        </thead>
        <tbody>
          {continent.countries.map((country) => (
            <tr key={country.code}>
              <td>{country.code}</td> <td>{country.name}</td>
              <td>{country.capital}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CountryList;
