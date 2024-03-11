import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import CommanTbl from "../Comman Componant/CommanTbl";
import Button from "@mui/material/Button";
import DrawIcon from "@mui/icons-material/Draw";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import Fab from "@mui/material/Fab";
import NavigationIcon from "@mui/icons-material/Navigation";
import Input from "@mui/material/Input";
import FormControl from "@mui/material/FormControl";
import InputLabel from "@mui/material/InputLabel";
import SearchIcon from "@mui/icons-material/Search";
import Topbar from "../Topbar";
import PropTypes from "prop-types";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import TextField from "@mui/material/TextField";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";
import axios from "axios";
import Sidebar from "./Sidebar";
import Slide from "@mui/material/Slide";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";
import { NativeSelect } from "@mui/material";
import { Base_URL } from "../../Global";

const Transition = React.forwardRef(function Transition(props, ref) {
  return <Slide direction="up" ref={ref} {...props} />;
});

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));
function BootstrapDialogTitle(props) {
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
}

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};
function Notification() {
  const { loading } = useFetch();
  const [headName, setheadName] = useState("Notification");
  const [Action, setAction] = useState("");
  const [data, setdata] = useState({
    id: "",
    type: "",
  });
  const [open, setOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [delte, setdelte] = React.useState(false);
  const [Row, setRow] = React.useState();
  const [maxWidth, setMaxWidth] = React.useState("md");

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const DeletePopUp = () => {
    setdelte(false);
  };
  const DeletePopUpopen = () => {
    setdelte(true);
  };
  const columns = [
    {
      name: "id",
      selector: (row) => row.productId,
    },
    {
      name: "Name",
      selector: (row) => row.original_title || row.original_name,
      sortable: true,
      reorder: true,
    },
    {
      name: "Release Date",
      selector: (row) => row.release_date || row.first_air_date,
      sortable: true,
      reorder: true,
    },

    {
      name: "Action",
      selector: (row) => {
        return (
          <div className="actionButtonGroup">
            <Button
              size="small"
              className="btn-closee"
              onClick={() => {
                setAction("Delete");
                DeletePopUpopen();
                setRow(row);
              }}
            >
              <DeleteForeverIcon />
            </Button>
          </div>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];
  const input = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setdata((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };
  const PopUpContent = () => {
    if (headName === "Notification") {
      return (
        <>
          <div className="d-flex ">
            <TextField
              sx={{ mx: "2%", width: "300px" }}
              id="standard-basic"
              label=" ID"
              variant="standard"
              value={data.id}
              onChange={input}
              name="id"
              type="number"
            />

            <FormControl>
              <InputLabel variant="standard" htmlFor="uncontrolled-native">
                Type
              </InputLabel>
              <NativeSelect
                sx={{ mx: "2%", width: "300px" }}
                value={data.type}
                onChange={input}
                InputLabelProps={{
                  shrink: true,
                }}
                inputProps={{
                  name: "type",
                  id: "uncontrolled-native",
                }}
              >
                <option value="tv">TV</option>
                <option value="movie">Movie</option>
              </NativeSelect>
            </FormControl>
          </div>
        </>
      );
    } else if (Action == "Delete") {
      return (
        <>
          <h3>Are you sure?</h3>
          <p>Do you want to Unlink Client?</p>
        </>
      );
    }
  };
  const PopUpAction = () => {
    return (
      <>
        <Button
          variant="outlined"
          color="success"
          onClick={() => {
            axios
              .post(`${Base_URL}/notification`, {
                status: "true",
                id: data.id,
                type: data.type,
              })
              .then((res) => {
                toast.success(res.data.message);
                setOpen(false);
              })
              .catch((error) => {
                console.error("Error making get request:", error);
                toast.error(error.message);
              });
          }}
        >
          Add Notification
        </Button>
      </>
    );
  };

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
                    url={"notification"}
                    column={columns}
                    headName={headName}
                    handleClickOpen={() => {
                      handleClickOpen();
                    }}
                    open={open}
                    delte={delte}
                    name="original_title"
                    searchQuery={searchQuery}
                    // style="none"
                  />
                </Paper>
              </div>
            </div>
            <div className="sticky-button navigation_button">
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
        open={delte}
        TransitionComponent={Transition}
        keepMounted
        onClose={DeletePopUp}
        aria-describedby="alert-dialog-slide-description"
        className="del_popup"
      >
        <DialogTitle>{"Are You Sure ?"}</DialogTitle>
        <DialogContent>
          <Button variant="outlined" onClick={DeletePopUp}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="error"
            onClick={() => {
              axios
                .post(`${Base_URL}/notification`, {
                  status: "false",
                  id: Row.productId,
                  type: Row.mediaType,
                })
                .then((res) => {
                  toast.success(res.data.message);
                  setdelte(false);
                })
                .catch((error) => {
                  console.error("Error making get request:", error);
                  toast.error(error.message);
                  setdelte(false);
                });
            }}
          >
            Delete
          </Button>
        </DialogContent>
      </Dialog>

      <BootstrapDialog
        maxWidth={maxWidth}
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <BootstrapDialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
        >
         {headName}
        </BootstrapDialogTitle>
        <DialogContent dividers>{PopUpContent()}</DialogContent>
        <DialogActions>{PopUpAction()}</DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default Notification;
