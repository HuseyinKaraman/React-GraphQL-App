
const colorPalette = [
    "bg-blue-200",
    "bg-green-200",
    "bg-pink-200",
    "bg-yellow-200",
    "bg-rose-200",
    "bg-fuchsia-200",
    "bg-purple-200",
    "bg-violet-200",
    "bg-indigo-200",
];
  
type CardProps = {
    name: string;
    code: string;
    emoji: string;
    capital: string;
    index: number;
    selectedCountryIndex: number;
    handleSelectCountry: Function;
};

export default function Card(props: CardProps) {
    return (
        <div
        key={props.name}
        onClick={() => props.handleSelectCountry(props.index)}
        className={`p-[12px] border ${
            props.selectedCountryIndex === props.index
                ? colorPalette[props.index % colorPalette.length] + " cursor-pointer"
                : "bg-white cursor-pointer"
        }`}
    >
        <div className="rounded-lg bg-white text-center">
            <div className="border-b-2 border-neutral-200 px-10 py-3 dark:border-neutral-600 dark:text-neutral-50">
                {props?.name}
            </div>
            <div className="p-6">
                <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200">Capital: {props?.capital}</p>
                <p className="text-xl text-neutral-600 dark:text-neutral-200">Flag: {props?.emoji}</p>
            </div>
        </div>
    </div>
    );
}
