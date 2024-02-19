import { useState } from "react";
import CountryList from "../countryList/index";

export default function List() {
    const [queryParams, setQueryParams] = useState("");
    const [size, setSize] = useState(10);

    return (
        <>
            <div className="flex justify-center items-center gap-x-2 p-4 ">
                <input
                    className="w-1/2 p-2 border border-gray-300"
                    type="text"
                    placeholder="Search by name"
                    onChange={(e) => setQueryParams(e.target.value.toString())}
                />
                <div className="">
                    <select
                        value={size}
                        onChange={(e) => setSize(parseInt(e.target.value))}
                        className=" p-2 border border-gray-300"
                    >
                        {[5, 10, 20, 30, 40, 50]?.map((item) => (
                            <option key={item} value={item}>
                                {item}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
            <CountryList queryParams={queryParams} size={size} />
        </>
    );
}
