import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Img from "../../../Componants/lazyLoadImage/Img";
import Header from "../Header";
import Footer from "../Footer";
import Trending from "../../CompoHome/Trending";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import PropTypes from "prop-types";
import { useState } from "react";
import Video_onff from "../../../../public/Video/Netflix New Logo Animation 2019.mp4";
import About from "../../../Pages/About";
import { Countdown } from "../Coundown"
import ContentWrapper from "../../contentWrapper/ContentWrapper";
import video_animattion from "../../../../public/Video/Netflix Logo 2023.mp4"
import { NavLink } from "react-router-dom";
import Popular from "../../CompoHome/Popular";
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

const UpComming = () => {
    const [open, setOpen] = useState(false);
    const [maxWidth, setMaxWidth] = React.useState("lg");
    const [Background, setBackground] = useState("");
    const [Storage, setStorage] = useState([
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABct73m5eMUR8GLE0KkBubJ-qChflATmWKQKNGTURH2sLclqlW2Vhdy6rA1G-D3vwRfOoBDWD6bShVQN4cQAS5m_m1Z0_Ms3nVNZ-A9ZcMGDkEp9601RZStRardjy3dkssOiO1ec7xitJJwPARAqwGQr9cd7_jCla8qyJV1yRYC2C3FrYadv12w.webp?r=c41",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABT-gRT0J2kaA0UPX_7tgo_rnEuGl-LlDIM_HLHNuoUWRtuZ8njF-HD0dNNXJfjPO5Zh2m_HDdxkjl0tbS3Wvt2OvLSB2G0lGFcY4.webp?r=89e",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVYBNVsnjk6uT2qV5RSi-BfoFDfWqfUIGQo9B4dGy9aVQ4U5diQQPoVSebLs29enTCJq2bpzKlT8ZLsXQWtlWFFBr2NuShnS4guxy6EVSRG4.webp?r=aec",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABfsZlboG6R7nF2Fb4l-WeWNDDBnxC2d2c4q2EjGg3fu7Jiggb_pwICDDCAeNhhbMDNa1EuNb8YgOXWGYKOjGSojZocJq34_MT-TC.webp?r=227",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABcvXa1DBhOilwwcUxV92MEpFPzgPf9O7qqHP8D_tzs0q9D7Bqsstz0gt7fVYNkzq2j2afrwnlxPuZg3iTrUcnhqc5kUDO7sbCwWTXLDGOWtzJaxlCrF7l1o7gVwj8-8fPvYTlkiVyMeSqXQ7JkcEpcFPyBhaIuGuGOMMGNq7VPzX-jQ0RnqLJA.webp?r=ce9",
            Back: "	https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABcxpwy-3Ro80hSapeXR417NpC3Ehs7_VlS1OwEwJRb2U4Irmbx_Jahtokzbx6SAX0sI4aKEqaACWONA_JCx_rQE3EUJgVML3HLau.webp?r=01a",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABX1wzC7jRI_a8gTASoeTklkzXWvhZ5jwPKOcBEtG88Z1glNYLMzwt_jouJXNGaEJwbSYEhWxgM3EXQcIO2CEEmfBBq9H_CpdgUPjNswAqpxu.webp?r=aea",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABTlFnW9roEyP182OEfagWfB-5lIR1-pmljQ42CKaul4g_ntefExxPYe-EPkhbpM0iAXxqRWvmqgMsnIbr81g-k6vruaFf4q3e_q5.webp?r=a90",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABct73m5eMUR8GLE0KkBubJ-qChflATmWKQKNGTURH2sLclqlW2Vhdy6rA1G-D3vwRfOoBDWD6bShVQN4cQAS5m_m1Z0_Ms3nVNZ-A9ZcMGDkEp9601RZStRardjy3dkssOiO1ec7xitJJwPARAqwGQr9cd7_jCla8qyJV1yRYC2C3FrYadv12w.webp?r=c41",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYJaziarMl8y-6S1KF1Q2Cp44FekcZKzoWlYTZlxHe1e-Pd-F8wY0dLviWQXgx1Yzii54_FZgZLG6XNz6Hvrv92EosTGkPEi2nO1.webp?r=157",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABQ4uguhAxGr-PvcN9Ndge6gj50I8HiUvgyMLY_A5YeEJWn45emsxH0XEW7hvajhcH-F4pyx1bima0V2apju-6QdqNoVNhfkMRM-cnmnn3lzTDlud-xDnzwe_9HvV331IHebsKclJSIA8YaJ0Q44Am17koQMXF52hOZFobFPYYgXBsYyrRxGE5w.webp?r=3c8",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABSj01ej1gfzZCsm9Fh2uSqWH_A0P6HQiFBD3lt4NCNLyOAAHl5WJKPLNBlwskdwSQi3NXQUhod9ofpzeIq34Qd-dmlM7y_vrpr-D.webp?r=a28",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVKx0sSTp5OxajOblfVqXuetP241HlgD9C2t80Slo9i-FalBKtIP35pr9KBO46agR98EJnAUGtkskNMD2G4n338G2hO7c2AMAO_WW55dJInc0DEhFF_ZoTZK1B6VnvbIBcAzurHA78iPjJOJ-EZ21f5XOpIOY3ohaoDNrSY_j2ys-5_6kecv_A.webp?r=2b9",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABa6sIGGKzszsqjTxaiT389wX2hc750XlqbK9M_LlyrfO93Nl2iS8T9evSihqarwdG9ol2L0Rj_GSbjEQHeHc-65S2jkfDx0AByhn.webp?r=b1b",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABS24gTOb8NHT8PA-PLW28nhR2KhnGOU_KJMIJvLIw6EtEPoKh78XJ0Da-QcG43UOcVxrk9ZkRbekfiXt5lyxswuCVCMZIGaYbegQwiPCIdJ7.webp?r=52d",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABYhJ4a3AD9VpK61wjZ5HW0zldV_vbe5Cp9fAfeMC4asR8O-dvNQ0UyWvTqJSQU6hYElySVmIIU6VXNGm_QLnVFI2LKOK8kdijkVA.webp?r=7ba",
        },
        {
            NameLOGO:
                "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABVKx0sSTp5OxajOblfVqXuetP241HlgD9C2t80Slo9i-FalBKtIP35pr9KBO46agR98EJnAUGtkskNMD2G4n338G2hO7c2AMAO_WW55dJInc0DEhFF_ZoTZK1B6VnvbIBcAzurHA78iPjJOJ-EZ21f5XOpIOY3ohaoDNrSY_j2ys-5_6kecv_A.webp?r=2b9",
            Back: "https://occ-0-6246-2186.1.nflxso.net/dnm/api/v6/6AYY37jfdO6hpXcMjf9Yu5cnmO0/AAAABW35CGfJFaaKMmMJARezHUgi7bVBppELidw7X81PVjePR_EV3azckM8irO0gekxCwZN5IohB_0H_FGJ8NCqC91JqrOWdWWCk6crd.webp?r=422",
        },
    ]);

    const handleClickOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        const bg = Storage?.[Math.floor(Math.random() * 9)];
        setBackground(bg);
    }, [Storage]);
    return (
        <>
            <Header />
            <div className="heroBanner" style={{ height: "750px" }}>
                <div className="backdrop-img">
                <video width="100%" height="" controls autoPlay loop muted>
                        <source src={Background.Back} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>
                <div className="mx-5 ">
                    <Img src={Background.NameLOGO} alt="name" />
                </div>
                <div className="opacity-layer">

                    <div className="pt-3 px-5 d-flex justify-content-end ">
                        <h1 className="text-white d-flex" style={{ fontSize: "80px" }}>
                            <Countdown />
                        </h1>
                    </div>
                </div>
            </div>
            <div className="heroBanner">

                <div className="backdrop-img">
                    <video width="100%" height="" controls autoPlay loop muted>
                        <source src={video_animattion} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </div>


                <div className="opacity-layer"></div>
                <ContentWrapper>
                    <div className="heroBannerContent">
                        <span className="title">Watch Now</span>
                        <span className="h2">
                            Stories move us.
                            They make us feel more emotion, see new perspectives,
                            and bring us closer to each other.
                        </span>
                        <NavLink to="/home">
                            <button className="Next_button">NEXVIEW.COM </button>
                        </NavLink>
                    </div>
                </ContentWrapper>
            </div>
            <div className="client_conteint pb-1 pt-2">
                <Popular />
            </div>
            <Footer />
            <BootstrapDialog
                className="BAck_player"
                maxWidth={maxWidth}
                onClose={handleClose}
                aria-labelledby="customized-dialog-title"
                open={open}
            >
                <DialogContent>
                    <video width="1000" height="550" controls autoPlay loop>
                        <source src={Video_onff} type="video/mp4" quality="high" />
                        Your browser does not support the video tag.
                    </video>
                </DialogContent>
            </BootstrapDialog>
        </>
    );
};

export default UpComming;
