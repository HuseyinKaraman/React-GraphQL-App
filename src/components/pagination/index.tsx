const Pagination = ({
    totalPages,
    currentPage,
    setCurrentPage,
}: {
    totalPages: number;
    currentPage: number;
    setCurrentPage: any;
}) => {
    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="flex flex-col justify-center items-center gap-2">
            <p>
                Page {currentPage} of {totalPages}
            </p>
            <div className="flex gap-2 justify-center items-center">
                <button
                    onClick={handlePreviousPage}
                    className={`p-2 border border-gray-400 bg-orange-300 text-white rounded-md ${
                        currentPage === 1 ? "cursor-not-allowed opacity-70" : ""
                    }`}
                >
                    {"<"}
                </button>
                <select
                    onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                    className="p-2 border border-gray-300"
                >
                    {Array.from({ length: totalPages }, (_, i) => i + 1)?.map((item) => (
                        <option key={item} value={item}>
                            {item}
                        </option>
                    ))}
                </select>
                <button
                    onClick={handleNextPage}
                    className={`p-2 border border-gray-400 bg-orange-300 text-white rounded-md ${
                        currentPage === totalPages ? "cursor-not-allowed opacity-70" : ""
                    }`}
                >
                    {">"}
                </button>
            </div>
        </div>
    );
};

export default Pagination;
