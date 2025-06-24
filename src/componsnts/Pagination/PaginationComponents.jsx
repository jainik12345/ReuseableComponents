import React from "react";
import { Pagination as MuiPagination } from "@mui/material";

/**
 * Reusable Pagination Component
 *
 * Props:
 * - count: total number of pages (required)
 * - page: current page (1-based, required)
 * - onChange: function(event, value) => void (required)
 * - color: color of pagination ('primary' | 'secondary' | 'standard' | etc.)
 * - className: additional class names
 * - size: 'small' | 'medium' | 'large'
 * - ...rest: any other props passed to MUI Pagination
 */
const PaginationComponents = ({
  count,
  page,
  onChange,
  color = "primary",
  className = "",
  size = "medium",
  ...rest
}) => {
  return (
    <div className={`flex justify-end p-4 ${className}`}>
      <MuiPagination
        count={count}
        page={page}
        onChange={onChange}
        color={color}
        size={size}
        shape="rounded"
        {...rest}
      />
    </div>
  );
};

export default PaginationComponents;
