import React, { useState } from "react";
import { CalendarDays, Search, FileDown } from "lucide-react";
import * as XLSX from "xlsx";
import { saveAs } from "file-saver";

// Column Configuration
const columns = [
  { header: "S.No", accessor: "sno" },
  { header: "Date", accessor: "date" },
  { header: "Buy With", accessor: "buyWith" },
  { header: "GTC Amount", accessor: "gtcAmount" },
  { header: "On Price", accessor: "onPrice" },
];

// Mock Data
const totalRows = 3440;
const pageSize = 10;
const data = Array.from({ length: totalRows }).map((_, index) => ({
  sno: index + 1,
  date: "7/27/2025 8:13:04 PM",
  buyWith: "ETH",
  gtcAmount: "1,294.00 GTC",
  onPrice: "$0.003",
  userName: `User${(index % 50) + 1}`,
}));

// Small ETH Button
function EthButton() {
  return (
    <button className="bg-gradient-to-r from-yellow-300 to-yellow-600 text-black font-bold rounded-full px-4 py-1 text-xs sm:text-sm shadow-md hover:scale-105 transition">
      ETH
    </button>
  );
}

// Pagination
function PaginationFooter({ currentPage, pageCount, onChange }) {
  return (
    <div className="flex flex-col sm:flex-row justify-between items-center px-2 py-3 mt-4 space-y-3 sm:space-y-0">
      <span className="text-white text-sm sm:text-base">
        Page{" "}
        <span className="text-[#FFA100] font-extrabold">{currentPage + 1}</span>{" "}
        of{" "}
        <span className="text-[#FFA100] font-extrabold">{pageCount}</span>
      </span>

      <div className="flex space-x-2">
        {["≪", "<", ">", "≫"].map((symbol, idx) => (
          <button
            key={idx}
            className="bg-[#FFA100] text-black rounded-md px-3 py-1 font-bold hover:scale-105 transition disabled:opacity-40"
            onClick={() => {
              if (symbol === "≪") onChange(0);
              else if (symbol === "<") onChange(currentPage - 1);
              else if (symbol === ">") onChange(currentPage + 1);
              else if (symbol === "≫") onChange(pageCount - 1);
            }}
            disabled={
              (symbol === "≪" || symbol === "<") && currentPage === 0 ||
              (symbol === "≫" || symbol === ">") && currentPage === pageCount - 1
            }
          >
            {symbol}
          </button>
        ))}
      </div>
    </div>
  );
}

// ✅ MAIN COMPONENT
export default function TransactionsTable() {
  const [currentPage, setCurrentPage] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");
  const [showFilter, setShowFilter] = useState(false);
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  // ✅ Filter + Search Logic
  const filteredData = data.filter((row) => {
    const search = searchTerm.toLowerCase();
    const matchesSearch = Object.values(row).some((value) =>
      String(value).toLowerCase().includes(search)
    );

    const rowDate = new Date(row.date);
    const start = startDate ? new Date(startDate) : null;
    const end = endDate ? new Date(endDate) : null;
    const matchesDate =
      (!start || rowDate >= start) && (!end || rowDate <= end);

    return matchesSearch && matchesDate;
  });

  const pageCount = Math.ceil(filteredData.length / pageSize);
  const pageRows = filteredData.slice(
    currentPage * pageSize,
    currentPage * pageSize + pageSize
  );

  // ✅ Export Excel Function
  const exportToExcel = () => {
    const exportData = filteredData.map((row) => ({
      "S.No": row.sno,
      Date: row.date,
      "Buy With": row.buyWith,
      "GTC Amount": row.gtcAmount,
      "On Price": row.onPrice,
      "User Name": row.userName,
    }));

    const worksheet = XLSX.utils.json_to_sheet(exportData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Transactions");

    const excelBuffer = XLSX.write(workbook, {
      bookType: "xlsx",
      type: "array",
    });
    const blob = new Blob([excelBuffer], {
      type: "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
    });
    saveAs(blob, "Transactions.xlsx");
  };

  return (
    <div className="bg-[#000] border border-[#FFA100] rounded-lg p-4 sm:p-6 w-full mx-auto m-4 shadow-lg">
      {/* ✅ Heading */}
      <h2 className="text-white text-lg sm:text-xl font-bold mb-5 tracking-wide">
        History
      </h2>

      {/* ✅ Filters Row */}
      <div className="flex flex-wrap justify-between items-center gap-3 mb-5">
        {/* Filter By + Date Filter */}
        <div className="flex flex-wrap items-center gap-3">
          <span className="text-[#FFA100] font-semibold text-sm sm:text-base">
            Filter By
          </span>

          {/* Date Range Dropdown */}
          <div className="relative">
            <button
              onClick={() => setShowFilter(!showFilter)}
              className="flex items-center space-x-2 border border-[#FFA100] text-[#FFA100] px-3 py-2 rounded-md text-sm hover:bg-[#1a1a1a] transition"
            >
              <span>Select date range</span>
              <svg
                className={`w-4 h-4 transform transition ${
                  showFilter ? "rotate-180" : ""
                }`}
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M19 9l-7 7-7-7"
                />
              </svg>
            </button>

            {/* Dropdown */}
            {showFilter && (
              <div className="absolute left-0 mt-2 w-64 bg-black border border-[#FFA100] rounded-md p-3 shadow-lg z-20 space-y-3">
                {/* Start Date */}
                <div className="flex items-center justify-between space-x-2 text-[#FFA100] text-sm">
                  <div className="flex-1">
                    <label className="mb-1 block">Start Date</label>
                    <input
                      type="date"
                      id="startDatePicker"
                      value={startDate}
                      onChange={(e) => setStartDate(e.target.value)}
                      className="bg-[#111] text-white w-full px-2 py-1 rounded border border-[#FFA100] focus:outline-none"
                    />
                  </div>
                  <CalendarDays
                    className="w-5 h-5 text-[#FFA100] cursor-pointer mt-6"
                    onClick={() =>
                      document.querySelector("#startDatePicker")?.showPicker()
                    }
                  />
                </div>

                {/* End Date */}
                <div className="flex items-center justify-between space-x-2 text-[#FFA100] text-sm">
                  <div className="flex-1">
                    <label className="mb-1 block">End Date</label>
                    <input
                      type="date"
                      id="endDatePicker"
                      value={endDate}
                      onChange={(e) => setEndDate(e.target.value)}
                      className="bg-[#111] text-white w-full px-2 py-1 rounded border border-[#FFA100] focus:outline-none"
                    />
                  </div>
                  <CalendarDays
                    className="w-5 h-5 text-[#FFA100] cursor-pointer mt-6"
                    onClick={() =>
                      document.querySelector("#endDatePicker")?.showPicker()
                    }
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Search + Export Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          {/* Search */}
          <div className="relative w-full sm:w-60">
            <Search className="absolute left-3 top-2.5 w-4 h-4 text-[#FFA100]" />
            <input
              type="text"
              placeholder="Search anything..."
              value={searchTerm}
              onChange={(e) => {
                setSearchTerm(e.target.value);
                setCurrentPage(0);
              }}
              className="border border-[#FFA100] bg-transparent text-white pl-9 pr-3 py-2 rounded-md focus:outline-none placeholder-[#B1A8A8] text-sm w-full"
            />
          </div>

          {/* Export Excel */}
          <button
            onClick={exportToExcel}
            className="flex items-center justify-center space-x-2 border border-[#FFA100] bg-[#FFA100] text-black px-3 py-2 rounded-md text-sm font-semibold hover:bg-[#ffb733] transition w-full sm:w-auto"
          >
            <FileDown className="w-4 h-4" />
            <span>Export Excel</span>
          </button>
        </div>
      </div>

      {/* ✅ Table Section */}
      <div className="overflow-x-auto">
        <table className="min-w-full text-xs sm:text-sm md:text-base">
          <thead>
            <tr>
              {columns.map((col) => (
                <th
                  key={col.accessor}
                  className="text-[#FFA100] font-bold text-center px-2 sm:px-4 py-3 border-b-2 border-[#F89D00] bg-[#000] whitespace-nowrap"
                >
                  {col.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {pageRows.length > 0 ? (
              pageRows.map((row, idx) => (
                <tr key={idx} className="border-b border-[#B1A8A8] hover:bg-[#111]">
                  <td className="text-white text-center py-2">{row.sno}</td>
                  <td className="text-white text-center py-2">{row.date}</td>
                  <td className="text-center py-2">
                    <EthButton />
                  </td>
                  <td className="text-[#24FF9B] text-center font-semibold py-2">
                    {row.gtcAmount}
                  </td>
                  <td className="text-white text-center py-2">{row.onPrice}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td
                  colSpan={columns.length}
                  className="text-center text-[#FFA100] py-5 font-semibold"
                >
                  No matching records found
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      {/* ✅ Pagination */}
      <PaginationFooter
        currentPage={currentPage}
        pageCount={pageCount}
        onChange={(page) => {
          if (page >= 0 && page < pageCount) setCurrentPage(page);
        }}
      />
    </div>
  );
}




