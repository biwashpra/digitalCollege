import React, { useMemo } from "react";
import fakeData from "../../assets/MOCK_DATA.json";
import { useTable, useFilters } from "react-table";
import { ColumnFiltering } from "./ColumnFiltering";

// using api get data in table = https://www.youtube.com/watch?v=WRKEjPq75BY
//This is to distinguish personal, guardian, education detal
// This is used to search by column = https://www.youtube.com/watch?v=2U9eVClAqh0&list=PLC3y8-rFHvwgWTSrDiwmUsl4ZvipOw9Cz&index=9
// In div max-h-[700px] overflow-y-scroll and in table overflow-hidden is for scrolling

const FilteringTable = () => {
  const data = useMemo(() => fakeData, []);
  const columns = useMemo(
    () => [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "id",
        disableFilters: true,
      },
      {
        Header: "Full Name",
        Footer: "Full Name",
        accessor: "full_name",
      },
      {
        Header: "Email Address",
        Footer: "Email Address",
        accessor: "email",
      },
      {
        Header: "Gender",
        Footer: "Gender",
        accessor: "gender",
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "dob",
        disableFilters: true,
      },
      {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "phone_number",
        disableFilters: true,
      },
      {
        Header: "Guardian Name",
        Footer: "Guardian Name",
        accessor: "guardian_name",
      },
    ],
    []
  );

  //default-column-filtering
  const defaultColumn = useMemo(() => {
    return {
      Filter: ColumnFiltering,
    };
  });

  const {
    getTableProps,
    getTableBodyProps,
    headerGroups,
    rows,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data, defaultColumn }, useFilters);
  return (
    <>
      <div className="min-w-full mt-8 max-h-[700px] overflow-y-scroll">
        <table
          className="text-center w-full table-auto overflow-hidden"
          {...getTableProps()}
        >
          <thead className="border-b bg-gray-800">
            {headerGroups.map((headerGroups) => (
              <tr {...headerGroups.getHeaderGroupProps()}>
                {headerGroups.headers.map((column) => (
                  <th
                    className="text-sm font-medium text-white px-6 py-4"
                    {...column.getHeaderProps()}

                    // {...column.getHeaderProps(column.getSortByToggleProps())}
                  >
                    {column.render("Header")}
                    <div>
                      {column.canFilter ? column.render("Filter") : null}
                    </div>
                  </th>
                ))}
              </tr>
            ))}
          </thead>
          <tbody
            className="bg-gray-200 text-center min-w-full"
            {...getTableBodyProps()}
          >
            {rows.map((row) => {
              prepareRow(row);
              return (
                <tr
                  className="border-b-2 border-gray-900"
                  {...row.getRowProps()}
                >
                  {row.cells.map((cell) => (
                    <td
                      className="px-6 py-4 text-base font-medium text-[#BE3455]"
                      {...cell.getCellProps()}
                    >
                      {cell.render("Cell")}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
          <tfoot className="border-b bg-gray-800">
            {footerGroups.map((footerGroup) => (
              <tr {...footerGroup.getFooterGroupProps()}>
                {footerGroup.headers.map((column) => (
                  <td
                    className="text-sm font-medium text-white px-6 py-4"
                    {...column.getFooterProps}
                  >
                    {column.render("Footer")}
                  </td>
                ))}
              </tr>
            ))}
          </tfoot>
        </table>
      </div>
    </>
  );
};

export default FilteringTable;
