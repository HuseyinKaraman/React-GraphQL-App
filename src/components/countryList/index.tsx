import gql from "graphql-tag";
import { useEffect, useState } from "react";
import { useQuery } from "@apollo/client";
import Card from "../list/card";
import Pagination from "../pagination";

export interface TCountry {
    name: string;
    code: string;
    capital: string;
    emoji: string;
}

export default function CountryList({ queryParams, size }: { queryParams: string; size: number }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [filterCountries, setFilterCountries] = useState([]);
    const [selectedCountryIndex, setSelectedCountryIndex] = useState(9);

    let LIST_COUNTRIES = gql`
    query {
      countries(filter: {name:{regex: "${queryParams}"}}) {
        name
        code
        capital
        emoji
      }
    }
  `;

    const { data, loading, error } = useQuery(LIST_COUNTRIES);

    useEffect(() => {
        if (data) {
            setTotalPages(Math.ceil(data.countries.length / size));
            setCurrentPage(1);
            setFilterCountries(data.countries.slice(0, size));
            setSelectedCountryIndex(data?.countries.length >= 10 ? 9 : data.countries.length - 1);
        }
    }, [data, size]);

    useEffect(() => {
        if (data) {
            setFilterCountries(data.countries.slice((currentPage - 1) * size, currentPage * size));
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [currentPage, data?.countries, size]);


    const handleSelectCountry = (index: number) => {
        if (index === selectedCountryIndex) {
            setSelectedCountryIndex(-1);
        } else {
            setSelectedCountryIndex(index);
        }
    }

    if (loading || error) {
        return <p className="text-center">{error ? error.message : "Loading..."}</p>;
    }

    return (
        <div className="flex flex-col h-[80vh]">
            {filterCountries.length === 0 ? (
                <p className="text-center mt-20">No results found!</p>
            ) : (
                <>
                    <div className="flex flex-wrap w-full gap-5 justify-center items-start max-h-[75vh] min-h-[50vh] overflow-y-auto my-10">
                        {filterCountries?.map((country: TCountry, index) => (
                            <Card
                                name={country.name}
                                code={country.code}
                                emoji={country.emoji}
                                capital={country.capital}
                                index={index}
                                handleSelectCountry={handleSelectCountry}
                                selectedCountryIndex={selectedCountryIndex}
                            />
                        ))}
                    </div>
                    <Pagination totalPages={totalPages} currentPage={currentPage} setCurrentPage={setCurrentPage} />
                </>
            )}
        </div>
    );
}
