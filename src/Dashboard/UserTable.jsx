import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import CommanTbl from "../Comman Componant/CommanTbl";
import Button from "@mui/material/Button";
import DrawIcon from "@mui/icons-material/Draw";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import Slide from "@mui/material/Slide";
import Topbar from "../Topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";
import axios from "axios";
import Sidebar from "./Sidebar";
import NewDate from "../Comman Componant/NewDate";

function CustomTabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}
CustomTabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

function UserTable() {
  const { loading } = useFetch();
  const [headName, setheadName] = useState("Prime User");
  const [Action, setAction] = useState("");
  const [value, setValue] = useState(0);
  const [StoreID, setStoreID] = useState();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");


  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  
  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
      // grow: 0.7,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      reorder: true,
      // grow: 0.7,
    },
    {
      name: "Plan",
      selector: (row) => row.plan,
      sortable: true,
      reorder: true,
      grow: 0.5,
    },
    {
      name: "Start Date",
      selector: (row) => {
        return (
          <span title={row.planStartDate}>
            <NewDate newDate={row.planStartDate} />
          </span>
        );
      },
      sortable: true,
      reorder: true,
      grow: 0.5,
    },
    {
      name: "End Date",
      selector: (row) => {
        return (
          <span title={row.planEndDate}>
            <NewDate newDate={row.planEndDate} />
          </span>
        );
      },
      sortable: true,
      reorder: true,
      grow: 0.5,
    },
    {
      name: "IP Address",
      selector: (row) => row.IP,
    },
    // {
    //   name: "Action",
    //   selector: (row) => {
    //     return (
    //       <div className="actionButtonGroup">
    //         <Button
    //           size="small"
    //           className="btn-edit"
    //           // onClick={(event) => editGroup(row)}
    //           // {...row}
    //           onClick={() => {
    //             setAction("Edit");
    //             Get_One(row.id);
    //             handleClickOpen();
    //           }}
    //         >
    //           <DrawIcon />
    //         </Button>
    //       </div>
    //     );
    //   },
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    // },
  ];

  const columns_TV = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
      // grow: 0.7,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      reorder: true,
      // grow: 0.7,
    },
    {
      name: "Plan",
      selector: (row) => row.plan,
      // sortable: true,
      // reorder: true,
      grow: 0.5,
    },
    {
      name: "IP Address",
      selector: (row) => row.IP,
    },

    // {
    //   name: "Action",
    //   selector: (row) => {
    //     return (
    //       <div className="actionButtonGroup">
    //         <Button
    //           size="small"
    //           className="btn-edit"
    //           // onClick={(event) => editGroup(row)}
    //           // {...row}
    //           onClick={() => {
    //             setAction("Edit");
    //             Get_One(row.id);
    //             handleClickOpen();
    //           }}
    //         >
    //           <DrawIcon />
    //         </Button>
    //       </div>
    //     );
    //   },
    //   ignoreRowClick: true,
    //   allowOverflow: true,
    // },
  ];
  return (
    <div>
      <Topbar />

      <ToastContainer />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {!loading ? (
          <>
            <div className="app-content--inner container">
              <div className="app-content--inner__wrapper mh-100-vh">
                <div style={{ opacity: 1 }}></div>
                <Paper
                  elevation={2}
                  style={{
                    borderRadius: "10px",
                    display: "flex",
                    marginTop: "25px",
                  }}
                  className="pending-all-15px"
                >
                  <FormControl fullWidth sx={{ m: 1 }} variant="standard">
                    <InputLabel htmlFor="standard-adornment-amount">
                      Search
                    </InputLabel>
                    <Input
                      id="standard-adornment-amount"
                      value={searchQuery}
                      onChange={(e) => setSearchQuery(e.target.value)}
                    />
                  </FormControl>
                  <Button
                    variant="outlined"
                    color="error"
                    style={{ height: "35px", marginTop: "22px" }}
                  >
                    <SearchIcon />
                  </Button>
                </Paper>
                <p className="main-heading">{headName}</p>

                <Paper
                  elevation={2}
                  style={{ borderRadius: "10px" }}
                  className="pending-all-15px"
                >
                  <Box sx={{ width: "100%" }}>
                    <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
                      <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label="basic tabs example"
                        className="center_tabs"
                      >
                        <Tab
                          label="Prime User"
                          {...a11yProps(0)}
                          className="pading_tabs"
                          onClick={() => {
                            setheadName("Prime User");
                          }}
                        />
                        <Tab
                          label="Non-Prime User"
                          {...a11yProps(1)}
                          className="pading_tabs"
                          onClick={() => {
                            setheadName("Non-Prime User");
                          }}
                        />
                      </Tabs>
                    </Box>
                    <CustomTabPanel value={value} index={0}>
                      <CommanTbl
                        url={"user/prime"}
                        column={columns}
                        headName={headName}
                        handleClickOpen={() => {
                          handleClickOpen();
                        }}
                        open={open}
                        name="name"
                
                        searchQuery={searchQuery}
                        style="none"
                      />
                    </CustomTabPanel>
                    <CustomTabPanel value={value} index={1}>
                      <CommanTbl
                        url={"user/nonPrime"}
                        name="name"
                        column={columns_TV}
                        headName={headName}
                        handleClickOpen={() => {
                          handleClickOpen();
                        }}
                        open={open}
                        searchQuery={searchQuery}
                   
                        style="none"
                      />
                    </CustomTabPanel>
                  </Box>
                </Paper>
              </div>
            </div>
            <div class="sticky-button navigation_button">
              <Fab variant="extended" href="/AppClient" >
                <NavigationIcon sx={{ mr: 1 }} />
                Visit Client Side
              </Fab>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>

    </div>
  );
}

export default UserTable;
