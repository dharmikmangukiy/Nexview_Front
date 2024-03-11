import { Fab } from "@mui/material";
import React from "react";
import useFetch from "../Componants/hooks/useFetch";
import Topbar from "../Topbar";
import Sidebar from "./Sidebar";
import NavigationIcon from "@mui/icons-material/Navigation";
import Button from "@mui/joy/Button";
import Card from "@mui/joy/Card";
import CardContent from "@mui/joy/CardContent";
import CardActions from "@mui/joy/CardActions";
import CircularProgress from "@mui/joy/CircularProgress";
import Typography from "@mui/joy/Typography";
import SvgIcon from "@mui/joy/SvgIcon";
import Spinner from "../ClientSite/Global/spinner/Spinner";
import { useNavigate } from "react-router-dom";
function Total() {
  const navigate=useNavigate()
  const { data, loading } = useFetch("/payment-length");

  return (
    <div>
      <Topbar />
      <div style={{ display: "flex" }}>
        <Sidebar />
        {!loading ? (
          <>
            <div className="app-content--inner container">
              <div className="app-content--inner__wrapper mh-100-vh p-3">
                <div style={{ opacity: 1 }}></div>
                {!loading && (
                  <div className="d-flex justify-content-between gap-4 flex-wrap">
                    <Card variant="solid" invertedColors className="w-48">
                      <CardContent orientation="horizontal">
                        <CircularProgress
                          size="lg"
                          determinate
                          value={(data?.primeUser * 100) / data?.user}
                        >
                          <SvgIcon>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          </SvgIcon>
                        </CircularProgress>
                        <CardContent>
                          <Typography level="h2">User</Typography>
                          <Typography level="h2">{data?.user}</Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className="d-flex justify-content-between" onClick={()=>navigate("/use_table")}>
                        <Button variant="soft" size="sm">
                          Prime User : {data?.primeUser}
                        </Button>
                        <Button variant="solid" size="sm">
                          Free User : {data?.freeUser}
                        </Button>
                      </CardActions>
                    </Card>
                    <Card
                      variant="solid"
                      color="warning"
                      invertedColors
                      className="w-48"
                    >
                      <CardContent orientation="horizontal">
                        <CircularProgress
                          size="lg"
                          determinate
                          value={(data?.primeMovies * 100) / data?.movies}
                        >
                          <SvgIcon>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          </SvgIcon>
                        </CircularProgress>
                        <CardContent>
                          <Typography level="h2">Movies</Typography>
                          <Typography level="h2">{data?.movies}</Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className="d-flex justify-content-between" onClick={()=>navigate("/total")}>
                        <Button variant="soft" size="sm">
                          Prime Movies : {data?.primeMovies}
                        </Button>
                        <Button variant="solid" size="sm">
                          Free Movies : {data?.freeMovies}
                        </Button>
                      </CardActions>
                    </Card>
                    <Card
                      variant="solid"
                      color="danger"
                      invertedColors
                      className="w-48"
                    >
                      <CardContent orientation="horizontal">
                        <CircularProgress
                          size="lg"
                          determinate
                          value={(data?.primeTVshow * 100) / data?.tVshow}
                        >
                          <SvgIcon>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          </SvgIcon>
                        </CircularProgress>
                        <CardContent>
                          <Typography level="h2">TV Show</Typography>
                          <Typography level="h2">{data?.tVshow}</Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className="d-flex justify-content-between" onClick={()=>navigate("/total")}>
                        <Button variant="soft" size="sm">
                          Prime TV Show : {data?.primeTVshow}
                        </Button>
                        <Button variant="solid" size="sm">
                          Free TV Show : {data?.freeTVshow}
                        </Button>
                      </CardActions>
                    </Card>
                    <Card
                      variant="solid"
                      color="success"
                      invertedColors
                      className="w-48"
                    >
                      <CardContent orientation="horizontal">
                        <CircularProgress
                          size="lg"
                          determinate
                          value={(data?.successPayment * 100) / data?.payment}
                        >
                          <SvgIcon>
                            <svg
                              xmlns="http://www.w3.org/2000/svg"
                              fill="none"
                              viewBox="0 0 24 24"
                              strokeWidth={1.5}
                              stroke="currentColor"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M2.25 18L9 11.25l4.306 4.307a11.95 11.95 0 015.814-5.519l2.74-1.22m0 0l-5.94-2.28m5.94 2.28l-2.28 5.941"
                              />
                            </svg>
                          </SvgIcon>
                        </CircularProgress>
                        <CardContent>
                          <Typography level="h2">Payment</Typography>
                          <Typography level="h2">{data?.payment}</Typography>
                        </CardContent>
                      </CardContent>
                      <CardActions className="d-flex justify-content-between" onClick={()=>navigate("/user_req")}>
                        <Button variant="soft" size="sm">
                          Success Payment : {data?.successPayment}
                        </Button>
                        <Button variant="solid" size="sm">
                          Pending Payment : {data?.pendingPayment}
                        </Button>
                      </CardActions>
                    </Card>
                  </div>
                )}
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
    </div>
  );
}

export default Total;
