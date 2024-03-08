import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import CommanTbl from "../Comman Componant/CommanTbl";
import Button from "@mui/material/Button";
import DrawIcon from "@mui/icons-material/Draw";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from "../Topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";
import axios from "axios";
import Sidebar from "./Sidebar";
import Slide from "@mui/material/Slide";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

function UserReqList() {
  const { loading } = useFetch();
  const [headName, setheadName] = useState("User Request");
  const [Action, setAction] = useState("");
  const [ID, setID] = useState();
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const columns = [
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
      reorder: true,
    },
    {
      name: "Plan",
      selector: (row) => row.plan,
      sortable: true,
      reorder: true,
    },
    {
      name: "Application",
      selector: (row) => row.application,
      sortable: true,
      reorder: true,
    },
    {
      name: "Transaction Id",
      selector: (row) => row.trationId,
      sortable: true,
      reorder: true,
    },
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
      reorder: true,
    },
    {
      name: "Card Number",
      selector: (row) => row.cardNumber,
      sortable: true,
      reorder: true,
    },
    {
      name: "Expiration",
      selector: (row) => row.expiration,
      sortable: true,
      reorder: true,
    },
    {
      name: "CVV",
      selector: (row) => row.cvv,
      sortable: true,
      reorder: true,
    },
    {
      name: "Status",
      selector: (row) => row.status,
      conditionalCellStyles: [
        {
          when: (row) => row.status == "pending",
          style: {
            color: "yellow",
          },
        },
        {
          when: (row) => row.status == "success",
          style: {
            color: "green",
          },
        },
        {
          when: (row) => row.status == "rejected",
          style: {
            color: "red",
          },
        },
      ],
      sortable: true,
      reorder: true,
    },

    {
      name: "Action",
      selector: (row) =>
        row.status == "pending" && (
          <div className="actionButtonGroup">
            <Button
              size="small"
              className="btn-edit"
              onClick={() => {
                setAction("Edit");
                setID(row._id);
                handleClickOpen();
              }}
            >
              <DrawIcon />
            </Button>
          </div>
        ),
      ignoreRowClick: true,
      allowOverflow: true,
    },
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
                  <CommanTbl
                    url={"payment"}
                    column={columns}
                    headName={headName}
                    handleClickOpen={() => {
                      handleClickOpen();
                    }}
                    open={open}
                    name="email"
                    searchQuery={searchQuery}
                    style="none"
                  />
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

      <Dialog
        open={open}
        TransitionComponent={Transition}
        keepMounted
        onClose={handleClickOpen}
        aria-describedby="alert-dialog-slide-description"
        className="del_popup"
      >
        <DialogTitle>{"Are You Sure ?"}</DialogTitle>
        <DialogContent>
          <Button
            variant="outlined"
            onClick={() => {
              axios
                .put(`http://localhost:5001/payment/${ID}`, { status: true })
                .then((res) => {
                  if (res.data.message == "User Not Found") {
                    toast.error(res.data.message);
                  } else {
                    toast.success("Payment Success");
                    setOpen(false);
                  }
                });
            }}
          >
            Approve
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              axios
                .put(`http://localhost:5001/payment/${ID}`, { status: false })
                .then((res) => {
                  if (res.data.message == "User Not Found") {
                    toast.error(res.data.message);
                  } else {
                    toast.error("Payment Rejected");
                    setOpen(false);
                  }
                });
            }}
          >
            Reject
          </Button>
        </DialogContent>
      </Dialog>
    </div>
  );
}

export default UserReqList;
