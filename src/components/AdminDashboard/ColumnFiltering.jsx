// import React from "react";

// export const ColumnFiltering = ({ column: { filterValue, setFilter } }) => {
//   return (
//     <>
//       <input
//         type="text"
//         value={filterValue || ""}
//         onChange={(e) => {
//           setFilter(e.target.value || undefined);
//         }}
//         placeholder="Search"
//         // className="text-[#BE3455] p-1 m-1"
//         className="w-full border-2 border-purple-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-red-500 placeholder-gray-500"
//       />
//     </>
//   );
// };

//create a delay for search = 300milliseconds
import React, { useState } from "react";
import { useAsyncDebounce } from "react-table";
import "regenerator-runtime";

export const ColumnFiltering = ({ column: { filterValue, setFilter } }) => {
  const [value, setValue] = useState(filterValue);
  const onChange = useAsyncDebounce((value) => {
    setFilter(value || undefined);
  }, 300);
  return (
    <>
      <input
        type="text"
        value={value || ""}
        onChange={(e) => {
          setValue(e.target.value);
          onChange(e.target.value);
        }}
        placeholder="Search"
        // className="text-[#BE3455] p-1 m-1"
        className="w-full border-2 border-purple-300 rounded px-4 py-2 text-gray-900 focus:outline-none focus:shadow-outline-blue focus:border-red-500 placeholder-gray-500"
      />
    </>
  );
};
