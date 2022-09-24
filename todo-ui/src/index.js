import React from "react";
import ReactDOM from "react-dom/client";
import FilteredTable from "./components/filteredtable";
import "bootstrap/dist/css/bootstrap.min.css";
import "./index.css";

// ========================================

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<FilteredTable />);
