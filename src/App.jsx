import { useEffect, useState } from "react";
import {
  Routes,
  Route,
  useLocation,
  Navigate,
  BrowserRouter,
} from "react-router-dom";
import Dashboard from "./Dashboard/Dashboard";
import Explore from "./ClientSite/Global/explore/Explore";
import Login from "./Forms/Login";
import AppClient from "./AppClient";

import { fetchDataFromApi } from "../src/Componants/utils/api";
import { useSelector, useDispatch } from "react-redux";
import {
  getApiConfiguration,
  getGenres,
} from "../src/ClientSite/Global/store/homeSlice";
import Details from "./ClientSite/Global/Details";
import Trending_Today from "./ClientSite/Global/Trending today/Trending_Today";
import PlanForm from "./Forms/PlaneForm";
import Step1 from "./Forms/Step1";
import Step3 from "./Forms/Step3";
import Registration from "./Forms/Registration";
import UserTable from "./Dashboard/UserTable";
import axios from "axios";
import TermsOfUse from "./Pages/TermsOfUse";
import Privacy from "./Pages/Privacy";
import About from "./Pages/About";
import FAQ from "./Pages/FAQ";
import UpComming from "./ClientSite/Global/Trending today/UpComming";
import ForgetPassword from "./Forms/ForgetPassword";
import Step4 from "./Forms/Step4";
import Step5Card from "./Forms/Step5Card";
import Step6 from "./Forms/Step6";
import Step5Upi from "./Forms/Step5Upi";
import UserReqList from "./Dashboard/UserReqList";
import Total from "./Dashboard/Total";


function useScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
}
function App() {
  const [login, setLogin] = useState(localStorage.getItem("login"));
  const [Author, setAuthor] = useState(localStorage.getItem("Author"));
  useScrollToTop();

  const dispatch = useDispatch();
  useEffect(() => {
    fetchApiConfig();
    genresCall();
  }, []);

  const fetchApiConfig = () => {
    fetchDataFromApi("/configuration").then((res) => {
      const url = {
        backdrop: res[0].images.secure_base_url + "original",
        poster: res[0].images.secure_base_url + "original",
        profile: res[0].images.secure_base_url + "original",
      };

      dispatch(getApiConfiguration(url));
    });
  };

  const genresCall = async () => {
    let promises = [];
    let endPoints = ["tv", "movie"];
    let allGenres = {};

    endPoints.forEach((url) => {
      promises.push(fetchDataFromApi(`/genre/${url}/list`));
    });

    const data = await Promise.all(promises);
    dispatch(getGenres(data[1]));
  };
  const [GetUser, setGetUser] = useState();
  useEffect(() => {
    axios
      .post("http://localhost:5001/me", {
        _id: JSON.parse(sessionStorage.getItem('User_id')),
      })
      .then((res) => {
        setGetUser(res.data);
      })
  }, [])
  // console.log(Author);
  if (login === "true" || login === null || login === 0) {
    return (
      <Routes>
        <Route path="/" element={<Login setLogin={setLogin} />} />
        <Route path="/Registration" element={<Registration />} />
        <Route path="forget_password" element={<ForgetPassword />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    );
  } else if (Author == "admin") {
    return (
      <div className="app">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/" element={<Dashboard />} />
          <Route path="/use_table" element={<UserTable />} />
          <Route path="/user_req" element={<UserReqList />} />
          <Route path="/total" element={<Total />} />
          <Route path="/terms_of_use" element={<TermsOfUse />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AppClient" element={<AppClient />} />
          <Route path="/Trending_Today" element={<Trending_Today />} />
          <Route path="/up_comming" element={<UpComming />} />
          <Route path="/PlanForm" element={<PlanForm />} />
          <Route path="/" element={<Step1 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/final_pay" element={<Step6 />} />
          <Route path="/step5_upi" element={<Step5Upi />} />
          <Route path="/step5_card" element={<Step5Card />} />
          <Route path="/Explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
        </Routes>
      </div>
    );
  } else {
    return (
      <div className="app">
        <Routes>
          <Route path="*" element={<Navigate to="/" replace />} />
          <Route path="/home" element={<AppClient />} />
          <Route path="/terms_of_use" element={<TermsOfUse />} />
          <Route path="/Privacy" element={<Privacy />} />
          <Route path="/About" element={<About />} />
          <Route path="/FAQ" element={<FAQ />} />
          <Route path="/AppClient" element={<AppClient />} />
          <Route path="/Trending_Today" element={<Trending_Today />} />
          <Route path="/up_comming" element={<UpComming />} />
          <Route path="/PlanForm" element={<PlanForm />} />
          <Route path="/" element={<Step1 />} />
          <Route path="/step3" element={<Step3 />} />
          <Route path="/step4" element={<Step4 />} />
          <Route path="/final_pay" element={<Step6 />} />
          <Route path="/step5_upi" element={<Step5Upi />} />
          <Route path="/step5_card" element={<Step5Card />} />
          <Route path="/Explore/:mediaType" element={<Explore />} />
          <Route path="/:mediaType/:id" element={<Details />} />
        </Routes>
      </div>
    );
  }
}

export default App;
