import React, { useState, useEffect } from "react";
import { HiOutlineSearch } from "react-icons/hi";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import { SlMenu } from "react-icons/sl";
import { VscChromeClose } from "react-icons/vsc";
import { useNavigate, useLocation, NavLink } from "react-router-dom";
import { Box, IconButton } from "@mui/material";
import PaidRoundedIcon from "@mui/icons-material/PaidRounded";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import Divider from "@mui/material/Divider";
import PersonAdd from "@mui/icons-material/PersonAdd";
import Settings from "@mui/icons-material/Settings";
import Logout from "@mui/icons-material/Logout";
import ContentWrapper from "../contentWrapper/ContentWrapper";
import logo from "../../../public/Images/Netflix-Logo.png";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import io from "socket.io-client";
import axios from "axios";
import useFetch from "../../Componants/hooks/useFetch";
import { useSelector } from "react-redux";

const Header = () => {
  const [show, setShow] = useState("top");
  const [lastScrollY, setLastScrollY] = useState(0);
  const [mobileMenu, setMobileMenu] = useState(false);
  const [showSearch, setShowSearch] = useState("");
  const [Favorites, setFavorites] = useState([]);
  const [loading, setLoading] = useState();
  const navigate = useNavigate();
  const location = useLocation();
  const [OPP, setOPP] = useState(false);
  const [maxWidth, setMaxWidth] = React.useState("lg");
  const { url } = useSelector((state) => state.home);
  const { data } = useFetch(`/notification`);
  // console.log(data);
  useEffect(() => {
    const socket = io("http://localhost:5001");
    socket.on("product", (productData) => {
      console.log("Received product data:", productData);
      var audio = document.getElementById("audioWITHDREW");
      audio.play();
    });
    socket.on("productDeleted", (productId) => {
      console.log("Product deleted:", productId);
    });
    return () => {
      socket.disconnect();
    };
  }, []);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location]);

  function handleClick() {
    localStorage.setItem("login", true);
    sessionStorage.clear();
    window.location.reload();
  }
  const [anchorEl, setAnchorEl] = React.useState(null);
  const [anchorEll, setAnchorEll] = React.useState(null);

  const open = Boolean(anchorEl);
  const ProfileOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const notific = Boolean(anchorEll);
  const NotificationOPen = (event) => {
    setAnchorEll(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
    setAnchorEll(null);
  };
  const popclose = () => {
    setOPP(false);
  };
  const handleClickOpen = () => {
    setOPP(true);
  };
  const controlNavbar = () => {
    if (window.scrollY > 200) {
      if (window.scrollY > lastScrollY && !mobileMenu) {
        setShow("hide");
      } else {
        setShow("show");
      }
    } else {
      setShow("top");
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => {
      window.removeEventListener("scroll", controlNavbar);
    };
  }, [lastScrollY]);

  const openSearch = () => {
    setMobileMenu(false);
    setShowSearch(true);
  };

  const openMobileMenu = () => {
    setMobileMenu(true);
    setShowSearch(false);
  };

  const navigationHandler = (type) => {
    if (type === "movie") {
      navigate("/explore/movie");
    } else {
      navigate("/explore/tv");
    }
    setMobileMenu(false);
  };

  useEffect(() => {
    setLoading(true);
   
    axios
      .post("http://localhost:5001/me", {
        token: JSON.parse(sessionStorage.getItem("token")),
      })
      .then((res) => {
        if (res.status == 200) {
          // console.log(res.data);
          setFavorites(res.data);
          setLoading(false);
        }
      })
      .catch((error) => {
        console.error("Exception:", error);
        localStorage.setItem("login", true);
        navigate("/");
        dispatch(loginChnage(true));
        sessionStorage.clear();
        window.location.reload();
      });
  }, []);

  return (
    <header className={`header ${mobileMenu ? "mobileView" : ""} ${show}`}>
      <ContentWrapper>
        <div className="logo" onClick={() => navigate("/")}>
          <img src={logo} alt="" style={{ height: "60px" }} />
        </div>
        <ul className="menuItems">
          {Favorites?.type == "freeUser" && (
            <li
              className="menuItem primine"
              onClick={() => navigate("/PlanForm")}
            >
              SUBSCRIBE
            </li>
          )}
          <li className="menuItem" onClick={() => navigate("/Trending_Today")}>
            Tranding Today
          </li>
          <li className="menuItem" onClick={() => navigate("/up_comming")}>
            Up Comming
          </li>
          <li className="menuItem" onClick={() => navigationHandler("movie")}>
            Movies
          </li>
          <li className="menuItem" onClick={() => navigationHandler("tv")}>
            TV Shows
          </li>
          <li className="menuItem">
            <FavoriteBorderIcon onClick={() => navigate("/favorite")} />
          </li>
          <Box display="flex" alignItems="center" gap={1} className="for_hide">
            <IconButton onClick={NotificationOPen}>
              <div class="ok_sidebar" style={{ display: "block" }}>
                {data?.length}
              </div>
              <NotificationsOutlinedIcon className="text-white" />
            </IconButton>

            <IconButton onClick={ProfileOpen}>
              <img
                src={
                  Favorites?.profile
                    ? Favorites?.profile
                    : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"
                }
                alt="Avatar"
                class="avatar"
              />{" "}
            </IconButton>
          </Box>
        </ul>

        <div className="mobileMenuItems">
          <HiOutlineSearch onClick={openSearch} />
          {mobileMenu ? (
            <VscChromeClose onClick={() => setMobileMenu(false)} />
          ) : (
            <SlMenu onClick={openMobileMenu} />
          )}
        </div>
        <Menu
          anchorEl={anchorEll}
          id="account-menu"
          open={notific}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          {data?.map((item) => (
            <NavLink to={`/${item.mediaType || "tv"}/${item.productId}`}>
              <MenuItem>
                <img
                  src={`${url.backdrop}${item.poster_path}`}
                  alt="Avatar"
                  class="avatar"
                  style={{ marginRight: "10px" }}
                />{" "}
                {item?.original_title?.length > 10
                  ? `${item?.original_title?.substring(0, 20)}...`
                  : item?.original_title || item?.original_name}
                <br />
                {item.release_date || item.first_air_date}
              </MenuItem>
            </NavLink>
          ))}
          <Divider />
        </Menu>
        <Menu
          anchorEl={anchorEl}
          id="account-menu"
          open={open}
          onClose={handleClose}
          onClick={handleClose}
          PaperProps={{
            elevation: 0,
            sx: {
              overflow: "visible",
              filter: "drop-shadow(0px 2px 8px rgba(0,0,0,0.32))",
              mt: 1.5,
              "& .MuiAvatar-root": {
                width: 32,
                height: 32,
                ml: -0.5,
                mr: 1,
              },
              "&:before": {
                content: '""',
                display: "block",
                position: "absolute",
                top: 0,
                right: 14,
                width: 10,
                height: 10,
                bgcolor: "background.paper",
                transform: "translateY(-50%) rotate(45deg)",
                zIndex: 0,
              },
            },
          }}
          transformOrigin={{ horizontal: "right", vertical: "top" }}
          anchorOrigin={{ horizontal: "right", vertical: "bottom" }}
        >
          <MenuItem
            onClick={() => {
              navigate("/Profile");
            }}
          >
            <img
              src={
                Favorites?.profile
                  ? Favorites?.profile
                  : "data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAOEAAADhCAMAAAAJbSJIAAAAjVBMVEWqAAH9+/v///+mAACkAACsAAD9+Pjy3d357u779PT46+vEZGTpyMj78fHHa2vBXV27SUnow8PkvLzu09PJd3faoKC9T0/Mf3/jtrbRjIy2PDyvCgv14+Px1tbbqKiuEhO2MDHSkZKzKCm5OTrTj4+wHyC5Q0PMenrBYGHWmZmwGxvit7fZoqKuERG+U1Njkco2AAAD20lEQVR4nO3ba3eaTBSGYZjhqCIqiCdi1SQ2Jnnz/3/ei5qD4iQtcSu0va8P7VpZ7V7PZmA4ZMayAAAAAAAAAAAAAAAAAAAAAAAAAACNpl81I4V4DG3F45tQqSiZ92rsUf9I+76nVJDMM0s0h05zpZRdKP7q1NajngT7GMWfyu8KxnD7+/b2lD1y5GpXcRxDDcQKz/yDwrvikzpGUffLMRKpykmpclE7FqpdJcbkNMZA5Ejr0UllW/kSlatxA0OOtkhpQ2VbSV7mv0Wnphi+wIxgrGyrztU7LF+F+xwLgcpPpsp2dH7lapzQFEMtBY50eSJ9Lb06v3IlrjnG+PwO3dxcuieQuoqFOUb/ch2+CKSuYm2OITEfNGQMs4udpYb7/a70ta/DW3OMjUCHS+Ms3RIIXY25w7VA5Z6xQ5nnpQoc07mkAol3AONpevWJxrJiU4w7kQNtmMWu/0hjfgEIXJnSm3JpFd6LVK5mEZ7kaAsdaD04Lq28aS3vh7FXyiFzju4MD16ulfJv6/mMoXuHrzlK9D1cZ756E03k6lY29N5zJGvZ46yzod9qtfx5V/YbV9UY7miQb3MML/A5TDuWa9X9uXT3wdS1GpADAAAAAAAAAAAAQKM0YPvHJWmr+5zkSVp/i5dJoH/Mw/2v82vZNnAoS3vyTerp+HWDi62iR+nqlZLslnDkE1eyR617hztL6tgY8WFl77fwBHdi46h1NzncOWOrn3Xuwxqrt8U93lBkHPXjsqVKC6O6AnW/yzlYwqS8+blLxfSs3Vel/orr8NpLeY8iHS21U3an/f3bl7YexuXh2x24h1oXMJXWSyrVer53qifSjm6Pg5Ph2y2xW9V6s9Ddk+WSRabNtMqKJq3d6aSjDO1tz9C6tgm+czam4678p/R3uiweyR7jSSc3dlfUCWVmr/Po9GTV675JL+8vuyvLMT1Zbn/m6FV7Ms4D8+BtS0Sb+/r7s7ZPV0+fRdz+PB/Mh2m2mr1vYHZniyzdzAf+278wKp4iRrUukTzirDufJrXfF4sqLwqi8GPx6Kf/Y3dz7cTfmK8uSGcD76vIlRTDt1zUPb+c0otNINFjMbs8Ce9SF6N1u3/eQG7P5H67oe3tObNREn55hX3ZXmuQNuDm8Atar7p907PJL9u7mcfNb29P61nv+ebryfK4ORUORotGn5yntGPFmyTyPrsrfNxBQn8+Kh5k/6z2XhVdTtNNx29FqsSLWrnvd+Z36cOt9Yd2966I/99inb3E7e7WQ/ySZevb1aP7t38nBAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAA+Nf9D3KSJy2nKoSaAAAAAElFTkSuQmCC"
              }
              alt="Avatar"
              class="avatar"
              style={{ height: "36px", width: "36px", marginRight: "10px" }}
            />{" "}
            {Favorites?.name}
          </MenuItem>
          <Divider />
          {/* <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <PersonAdd fontSize="small" />
            </ListItemIcon>
            Add another account
          </MenuItem> */}
          <MenuItem
            onClick={() => {
              navigate("/PlanForm");
              handleClose();
            }}
          >
            <ListItemIcon>
              <PaidRoundedIcon fontSize="small" />
            </ListItemIcon>
            Plans
          </MenuItem>
          <MenuItem onClick={handleClose}>
            <ListItemIcon>
              <Settings fontSize="small" />
            </ListItemIcon>
            {Favorites?.IP}
          </MenuItem>

          <MenuItem
            onClick={() => {
              handleClick();
              handleClose();
            }}
          >
            <ListItemIcon>
              <Logout fontSize="small" />
            </ListItemIcon>
            Logout
          </MenuItem>
        </Menu>
      </ContentWrapper>
    </header>
  );
};

export default Header;
