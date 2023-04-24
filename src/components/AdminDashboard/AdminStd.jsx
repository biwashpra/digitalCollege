import React, { useMemo, useEffect, useState } from "react";
import { useTable, useFilters, usePagination } from "react-table";
import { ColumnFiltering } from "./ColumnFiltering";
import axios from "axios";
// import AttCard from "../StdDashboard/AttCard";
// import AllStudentTable from "./AllSudentTable";
// import FilteringTable from "./FilteringTable";
// import Pagination from "./Pagination";

const AdminStd = () => {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    const url = "http://localhost:5000/admin/getallstd";
    axios
      .get(url, {
        "Access-Control-Allow-Origin": "*",
        "Access-Control-Allow-Headers": "*",
      })
      .then((res) => {
        console.log(res.data.data);
        setAllData(res.data.data);
        // data array ma aauxa
        // let data = res.data.data;
        // data.map((std) => {
        //   return console.log(std);
        // });
      });
  }, []);

  const data = useMemo(() => allData, [allData]);
  const columns = useMemo(
    () => [
      {
        Header: "Id",
        Footer: "Id",
        accessor: "studentId",
        disableFilters: true,
      },
      {
        Header: "Full Name",
        Footer: "Full Name",
        // accessor: "fname",
        id: "fullName",
        accessor: (row) => `${row.fname} ${row.lname}`,
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
        disableFilters: true,
      },
      {
        Header: "Date of Birth",
        Footer: "Date of Birth",
        accessor: "dob",
      },
      {
        Header: "Phone Number",
        Footer: "Phone Number",
        accessor: "mobileNumber",
        disableFilters: true,
      },
      {
        Header: "Guardian Name",
        Footer: "Guardian Name",
        accessor: "fatherName",
      },
      {
        Header: "Address",
        Footer: "Address",
        accessor: "address",
        disableFilters: true,
      },
      // thapeko
      {
        Header: "number",
        Footer: "number",
        accessor: "guardianNumber",
        disableFilters: true,
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
    page,
    nextPage,
    previousPage,
    canNextPage,
    canPreviousPage,
    pageOptions,
    state,
    gotoPage,
    pageCount,
    prepareRow,
    footerGroups,
  } = useTable({ columns, data, defaultColumn }, useFilters, usePagination);

  const { pageIndex } = state;
  return (
    <>
      <section className="w-full h-full">
        <div className="min-w-full mt-8">
          <table className="text-center w-full table-auto" {...getTableProps()}>
            <thead className="border-b bg-gray-800">
              {headerGroups?.map((headerGroups) => (
                <tr {...headerGroups.getHeaderGroupProps()}>
                  {headerGroups?.headers?.map((column) => (
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
              {page?.map((row) => {
                prepareRow(row);
                return (
                  <tr
                    className="border-b-2 border-gray-900 hover:bg-gray-100"
                    {...row.getRowProps()}
                  >
                    {row?.cells?.map((cell) => (
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
              {footerGroups?.map((footerGroup) => (
                <tr {...footerGroup.getFooterGroupProps()}>
                  {footerGroup?.headers?.map((column) => (
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
          <div className="flex justify-between">
            <button
              onClick={() => gotoPage(0)}
              disabled={!canPreviousPage}
              className="px-4 py-2 font-bold text-white bg-orange-500 rounded-md disabled:opacity-50"
            >
              {"<<<"}
            </button>
            <button
              onClick={() => previousPage()}
              disabled={!canPreviousPage}
              className="px-4 py-2 font-bold text-white bg-[#BE3455] rounded-md disabled:opacity-50"
            >
              Previous
            </button>
            <div>
              <span>
                Page{" "}
                <strong>
                  {pageIndex + 1} of {pageOptions.length}
                </strong>{" "}
              </span>

              <span>
                Goto Page:{" "}
                <input
                  type="number"
                  min="1"
                  onWheel={(e) => e.target.blur()}
                  defaultValue={pageIndex + 1}
                  onChange={(e) => {
                    const pageNumber = e.target.value
                      ? Number(e.target.value) - 1
                      : 0;
                    gotoPage(pageNumber);
                  }}
                  className="w-12"
                />
              </span>
            </div>
            <button
              onClick={() => nextPage()}
              disabled={!canNextPage}
              className="px-4 py-2 font-bold text-white bg-[#BE3455] rounded-md disabled:opacity-50"
            >
              Next
            </button>
            <button
              onClick={() => gotoPage(pageCount - 1)}
              disabled={!canNextPage}
              className="px-4 py-2 font-bold text-white bg-orange-500 rounded-md disabled:opacity-50"
            >
              {">>>"}
            </button>
          </div>
        </div>

        {/* <!-- row 1 --> */}
        {/* <div className="flex flex-wrap -mx-3 mt-8">
          <AttCard
            att="Total Students"
            desc="155"
            from="from-green-600"
            to="to-green-900"
          />

          <AttCard
            att="Total Paid"
            desc="Rs 547600"
            from="from-red-600"
            to="to-orange-600"
          />

          <AttCard
            att="Total Due"
            desc="Rs 214450"
            from="from-purple-600"
            to="to-purple-900"
          />

          <AttCard
            att="Remarks"
            desc="Best"
            from="from-gray-600"
            to="to-gray-900"
          />
        </div> */}
        {/* <!-- row 2 --> */}
        {/* <Pagination /> */}
        {/* <AllStudentTable /> */}
        {/* <FilteringTable /> */}
      </section>
    </>
  );
};

export default AdminStd;
