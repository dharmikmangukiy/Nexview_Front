import React, { useState } from "react";
import Paper from "@mui/material/Paper";
import PropTypes from "prop-types";
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
import Topbar from "../Topbar";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import useFetch from "../Componants/hooks/useFetch";
import axios from "axios";
import Sidebar from "./Sidebar";



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

function UserReqList() {
  const { loading } = useFetch();
  const [headName, setheadName] = useState("User Request");
  const [Action, setAction] = useState("");
  const [StoreID, setStoreID] = useState();
  const [open, setOpen] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("md");
  const [delte, setdelte] = React.useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const [AddMovies, setAddMovies] = useState({
    original_title: "",
    id: "",
    poster_path: "",
    backdrop_path: "",
    runtime: "",
    vote_average: "",
    overview: "",
    release_date: "",
    original_language: "",
    genre_ids: [36, 10751, 10770, 16, 10402, 53, 28, 14, 27, 12, 35, 18, 80, 9648, 99, 10749, 37, 10752, 878],
    status: "Released",
    tagline: "Unite or fall.",
    director: "Johny Since",
    writer: "Lena Anderson",
    genres: [,
      { id: 36, name: 'History' },
      { id: 10751, name: 'Family' }
      ,
      { id: 10770, name: 'TV Movie' }
      ,
      { id: 16, name: 'Animation' }
      ,
      { id: 10402, name: 'Music' }
      ,
      { id: 53, name: 'Thriller' }
      ,
      { id: 28, name: 'Action' }
      ,
      { id: 14, name: 'Fantasy' }
      ,
      { id: 27, name: 'Horror' }
      ,
      { id: 12, name: 'Adventure' }
      ,
      { id: 35, name: 'Comedy' }

      ,
      { id: 18, name: 'Drama' }

      ,
      { id: 80, name: 'Crime' }

      ,
      { id: 9648, name: 'Mystery' }

      ,
      { id: 99, name: 'Documentary' }

      ,
      { id: 10749, name: 'Romance' }

      ,
      { id: 37, name: 'Western' }

      ,
      { id: 10752, name: 'War' }

      ,
      { id: 878, name: 'Science Fiction' }
    ],
  });


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



  const Get_One = (id) => {
    setStoreID(id);
    axios
      .get(`http://localhost:5001/movie/${id}`)
      .then((res) => {
        console.log("get request successful:", res.data);
        setAddMovies({
          original_title: res.data.original_title,
          poster_path: res.data.poster_path,
          backdrop_path: res.data.backdrop_path,
          runtime: res.data.runtime,
          vote_average: res.data.vote_average,
          overview: res.data.overview,
          release_date: res.data.release_date,
          original_language: res.data.original_language,
          genre_ids: [36, 10751, 10770, 16, 10402, 53, 28, 14, 27, 12, 35, 18, 80, 9648, 99, 10749, 37, 10752, 878],
          status: "Released",
          tagline: "Unite or fall.",
          director: "Johny Since",
          writer: "Lena Anderson",
          genres: [
            { id: 36, name: 'History' },
            { id: 10751, name: 'Family' }
            ,
            { id: 10770, name: 'TV Movie' }
            ,
            { id: 16, name: 'Animation' }
            ,
            { id: 10402, name: 'Music' }
            ,
            { id: 53, name: 'Thriller' }
            ,
            { id: 28, name: 'Action' }
            ,
            { id: 14, name: 'Fantasy' }
            ,
            { id: 27, name: 'Horror' }
            ,
            { id: 12, name: 'Adventure' }
            ,
            { id: 35, name: 'Comedy' }

            ,
            { id: 18, name: 'Drama' }

            ,
            { id: 80, name: 'Crime' }

            ,
            { id: 9648, name: 'Mystery' }

            ,
            { id: 99, name: 'Documentary' }

            ,
            { id: 10749, name: 'Romance' }

            ,
            { id: 37, name: 'Western' }

            ,
            { id: 10752, name: 'War' }

            ,
            { id: 878, name: 'Science Fiction' }
          ],
        });
      })
      .catch((error) => {
        console.error("Error making get request:", error);
      });
  };

  const Update_Movie = () => {
    if (
      AddMovies.original_title !== "" &&
      AddMovies.poster_path !== "" &&
      AddMovies.vote_average !== "" &&
      AddMovies.overview !== "" &&
      AddMovies.runtime !== "" &&
      AddMovies.backdrop_path !== "" &&
      AddMovies.release_date !== "" &&
      AddMovies.original_language !== ""
    ) {
      axios
        .put(`http://localhost:5001/product/${StoreID}`, AddMovies)
        .then((res) => {
          console.log("Update request successful:", res.data);
          toast.success("Movie Update successfully");
        })
        .catch((error) => {
          console.error("Error making Update request:", error);
        });
      handleClose();
      setAddMovies(
        AddMovies.original_title == "",
        AddMovies.poster_path == "",
        AddMovies.vote_average == "",
        AddMovies.overview == "",
        AddMovies.runtime == "",
        AddMovies.backdrop_path == "",
        AddMovies.release_date == "",
        AddMovies.original_language == ""
      );
    } else {
      toast.warn("Please first enter all detail");
    }
  };

  const input = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    setAddMovies((prevalue) => {
      return {
        ...prevalue,
        [name]: value,
      };
    });
  };

  const PopUpContent = () => {
    if (Action == "Edit") {
      if (headName === "User Request") {
        return (
          <>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Name"
                variant="standard"
                value={AddMovies.original_title}
                onChange={input}
                name="original_title"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Poster Link"
                variant="standard"
                value={AddMovies.poster_path}
                onChange={input}
                name="poster_path"
              />
              <TextField
                sx={{ mx: "2%", width: "300px" }}
                id="standard-basic"
                label=" Background Link"
                variant="standard"
                value={AddMovies.backdrop_path}
                onChange={input}
                name="backdrop_path"
              />
            </div>
            <div className="d-flex ">
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Time"
                variant="standard"
                value={AddMovies.runtime}
                onChange={input}
                name="runtime"
                type="number"
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label=" Rating"
                variant="standard"
                value={AddMovies.vote_average}
                onChange={input}
                name="vote_average"
                type="number"
              />
            </div>
            <div className="d-flex my-1">
              <TextField
                label="Release Date"
                type="date"
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                variant="standard"
                value={AddMovies.release_date}
                onChange={input}
                name="release_date"
                InputLabelProps={{
                  shrink: true,
                }}
              />
              <TextField
                sx={{ mx: "2%", width: "48%" }}
                id="standard-basic"
                label="Language"
                variant="standard"
                value={AddMovies.original_language}
                onChange={input}
                name="original_language"
              />
            </div>
            <div className="mt-3">
              <TextField
                sx={{ mx: "2%", width: "96%" }}
                id="standard-multiline-static"
                label=" Description"
                multiline
                rows={4}
                variant="standard"
                value={AddMovies.overview}
                onChange={input}
                name="overview"
              />
            </div>
          </>
        );
      }
    }
  };

  const PopUpAction = () => {
    if (Action == "Edit") {
      return (
        <>
          <Button variant="outlined" color="error" onClick={handleClose}>
            Cancel
          </Button>
          <Button
            variant="outlined"
            color="success"
            onClick={() => {
              if (headName === "User Request") {
                Update_Movie();
              }
            }}
          >
            Update
          </Button>
        </>
      );
    }
  };
  const columns = [
    {
      name: "No",
      selector: (row) => row.id,
    },
    {
      name: "Name",
      selector: (row) => row.original_title,
    },
    {
      name: "Status",
      selector: (row) => row.status,
    },
    {
      name: "Release Date",
      selector: (row) => row.release_date,
    },
    {
      name: "Rating",
      selector: (row) => row.vote_average,
    },
    {
      name: "Language",
      selector: (row) => row.original_language,
    },

    {
      name: "Action",
      selector: (row) => {
        return (
          <div className="actionButtonGroup">
            <Button
              size="small"
              className="btn-edit"
              // onClick={(event) => editGroup(row)}
              // {...row}
              onClick={() => {
                setAction("Edit");
                Get_One(row.id);
                handleClickOpen();
              }}
            >
              <DrawIcon />
            </Button>
          </div>
        );
      },
      ignoreRowClick: true,
      allowOverflow: true,
    },
  ];


  return (
    <div>
      <Topbar />

      <ToastContainer />
      <div style={{ display: 'flex' }}>
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
                    url={"discover/movie"}
                    column={columns}
                    headName={headName}
                    handleClickOpen={() => {
                      handleClickOpen();
                    }}
                    open={open}
                    name="original_title"
                    delte={delte}
                    searchQuery={searchQuery}
                    style="none"
                  />
                </Paper>
              </div>
            </div>
            <div class="sticky-button navigation_button">
              <Fab variant="extended" href="/AppClient" target="_blank">
                <NavigationIcon sx={{ mr: 1 }} />
                Visit Client Side
              </Fab>
            </div>
          </>
        ) : (
          <Spinner />
        )}
      </div>


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
          {Action} {headName}
        </BootstrapDialogTitle>
        <DialogContent dividers>{PopUpContent()}</DialogContent>
        <DialogActions>{PopUpAction()}</DialogActions>
      </BootstrapDialog>
    </div>
  );
}

export default UserReqList;
