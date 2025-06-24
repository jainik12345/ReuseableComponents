import React, { useState } from "react";
import PaginationComponents from "./PaginationComponents.jsx";

const Pagination = () => {
  const [page, setPage] = useState(1);
  const totalPages = 8;

  return (
    <div>
      {/* Example content */}
      <div className="mb-4 text-center text-lg">Current Page: {page}</div>
      <PaginationComponents
        count={totalPages}
        page={page}
        onChange={(e, value) => setPage(value)}
        color="primary"
        size="large"
      />
    </div>
  );
};

export default Pagination;
