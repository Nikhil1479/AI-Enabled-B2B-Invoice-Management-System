import React, { useState } from "react";
import { Box } from "@mui/material/";
import { DataGrid } from "@mui/x-data-grid";
import "../styles/body.css";
import { Button } from "@mui/material";

const columns = [
  
  { field: "slno", headerName: "Sl. No", width: 90 },
  { field: "customer_order_id", headerName: "Customer Order ID", width: 150 },
  { field: "sales_org", headerName: "Sales Org", width: 150 },
  {
    field: "distribution_channel",
    headerName: "Distribution Channel",
    width: 180,
  },
  { field: "division", headerName: "Division", width: 120 },
  {
    field: "released_credit_value",
    headerName: "Released Credit Value",
    width: 180,
  },
  {
    field: "purchase_order_type",
    headerName: "Purchase Order Type",
    width: 160,
  },
  { field: "company_code", headerName: "Company Code", width: 130 },
  {
    field: "order_creation_date",
    headerName: "Order Creation Date",
    width: 180,
  },
  {
    field: "order_creation_time",
    headerName: "Order Creation Time",
    width: 180,
  },
  {
    field: "credit_control_area",
    headerName: "Credit Control Area",
    width: 160,
  },
  { field: "sold_to_party", headerName: "Sold to Party", width: 150 },
  { field: "order_amount", headerName: "Order Amount", width: 130 },
  {
    field: "requested_delivery_date",
    headerName: "Requested Delivery Date",
    width: 200,
  },
  { field: "order_currency", headerName: "Order Currency", width: 130 },
  { field: "credit_status", headerName: "Credit Status", width: 120 },
  { field: "customer_number", headerName: "Customer Number", width: 150 },
  { field: "amount_in_usd", headerName: "Amount in USD", width: 150 },
  { field: "unique_cust_id", headerName: "Unique Customer ID", width: 180 },
];

const Datagrid = ({ rows }) => {
  const [selectedRowIds, setSelectedRowIds] = useState([]);

  const handleSelectionChange = (selection) => {
    setSelectedRowIds(selection.selectionModel);
  };

  const isEditDisabled = selectedRowIds.length !== 1;

  return (
    <div>
      <div style={{ height: 540, width: "100%" }}>
        <DataGrid
          sx={{
            backgroundColor: "#666666",
            color: "white",
            border: "none",
            checkboxSelection: {
              color: "red",
              border: "10px solid blue",
            },
          }}
          rows={rows}
          columns={columns}
          style={{ color: "white" }}
          pageSize={8}
          pageSizeOptions={[5, 8, 10, 20, 50, 100]}
          // checkboxSelection
          disableRowSelectionOnClick
          onSelectionModelChange={handleSelectionChange}
          selectionModel={selectedRowIds}
        />
        <div>
          <Button variant="contained">Refresh Data</Button>
          <Button variant="contained" disabled={isEditDisabled}>
            Edit
          </Button>
          <Button variant="contained">Delete</Button>
          <Button variant="contained">Predict</Button>
        </div>
      </div>
    </div>
  );
};

export default Datagrid;