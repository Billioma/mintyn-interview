import {
  order1,
  order2,
  order3,
  settle,
  wallet1,
  wallet2,
  wallet3,
} from "../../assets/export";

export const sideDrawer = [
  { id: 1, name: "Dashboard", path: "/dashboard" },
  { id: 2, name: "Cases", path: "/cases" },
  { id: 3, name: "Detection", path: "/detection" },
  { id: 4, name: "Hunting", path: "/hunting" },
  { id: 5, name: "Logs & Reports", path: "/logs-reports" },
  { id: 6, name: "Monitor Job", path: "/job-monitoring" },
  { id: 7, name: "People", path: "/people" },
  { id: 8, name: "App Status", path: "/app-status" },
  { id: 9, name: "System Status", path: "/system-status" },
  { id: 10, name: "Settings", path: "/settings" },
];

export const paymentMenu = [
  {
    id: 1,
    icon: wallet1,
    name: "All Payments",
  },
  {
    id: 2,
    icon: wallet2,
    name: "Reconcilled Payments",
  },
  {
    id: 3,
    icon: wallet3,
    name: "Un-Reconcilled Payments",
  },
  {
    id: 4,
    icon: settle,
    name: "Manual Settlement",
  },
];

export const orders = [
  {
    id: 1,
    icon: order1,
    name: "All Orders",
  },
  {
    id: 2,
    icon: order2,
    name: "Pending Orders",
  },
  {
    id: 3,
    icon: order3,
    name: "Reconcilled Orders",
  },
];

export const activeStyle = {
  backgroundColor: "#e8f1fd",
  width: "100%",
  textAlign: "center",
  alignItems: "center",
  display: "flex",
  fontSize: "13px",
  fontWeight: "400",
  lineHeight: "15px",
  margin: "16px 0",
  borderLeft: "4px solid #1860EC",
  marginLeft: "auto",
  padding: "10px",
  position: "relative",
};

export const tableHeader = [
  "Item Type",
  "Price",
  "Transaction No",
  "Time",
  "",
  "",
];

export const options = [
  "All",
  "Reconcilled",
  "Un-reconcilled",
  "Settled",
  "Unsettled",
];

export const count = ["20", "40", "60"];
