import React, { useEffect } from "react";
import "react-toastify/dist/ReactToastify.css";
import Img from "../../../Componants/lazyLoadImage/Img";
import { useState } from "react";


const SmallSection = () => {
  const [Background, setBackground] = useState("");
  const [Storage, setStorage] = useState([
    {
      NameLOGO:
        "https://dx35vtwkllhj9.cloudfront.net/universalstudios/oppenheimer/images/regions/us/tt.png",
      Back: "https://v3img.voot.com/resizeMedium,w_2400,h_514/v3Storage/assets/oppenheimer-14x3-edpnew-1708510910757.jpg",
    },
    {
        // NameLOGO:
        //   "https://occ-0-2794-2219.1.nflxso.net/dnm/api/v6/LmEnxtiAuzezXBjYXPuDgfZ4zZQ/AAAABRM0w4d9vBrLEgk3FhvESGEVLpsmSOdXZKtm2_x_v-noR3pb7GFLqtjrYADrIFiI_NBbkuwssxytOv4RWJeDFdx8fU9GYCY-1LbvM31Np4cw.png?r=4d7",
        Back: "https://v3img.voot.com/resizeMedium,w_2400,h_514/v3Storage/assets/14x3-1705239701411.jpg",
      },
      {
        NameLOGO:
          "https://upload.wikimedia.org/wikipedia/commons/8/8e/True_Detective_Logo_2014.png",
        Back: "https://v3img.voot.com/resizeMedium,w_2400,h_514/v3Storage/assets/true-detective_14x3-1706785994406.jpg",
      },
      {
        // NameLOGO:
        //   "https://upload.wikimedia.org/wikipedia/commons/8/8e/True_Detective_Logo_2014.png",
        Back: "https://v3img.voot.com/resizeMedium,w_2400,h_514/v3Storage/assets/finalseason14x3-1708067887566.jpg",
      },
      {
        // NameLOGO:
        //   "https://upload.wikimedia.org/wikipedia/commons/8/8e/True_Detective_Logo_2014.png",
        Back: "https://v3img.voot.com/v3Storage/assets/bbo-ep---16x9-1692619130005.jpg",
      },
      {
        // NameLOGO:
        //   "https://upload.wikimedia.org/wikipedia/commons/8/8e/True_Detective_Logo_2014.png",
        Back: "https://v3img.voot.com/v3Storage/assets/perry_mason-1683939431926.png",
      },
      {
        // NameLOGO:
        //   "https://upload.wikimedia.org/wikipedia/commons/8/8e/True_Detective_Logo_2014.png",
        Back: "https://v3img.voot.com/v3Storage/assets/biglittlelies16_9-1683938204124.jpg",
      },
  ]);


  useEffect(() => {
    const bg = Storage?.[Math.floor(Math.random() * 7)];
    setBackground(bg);
  }, [Storage]);
  return (
    <>

        <h2 className="container text-white">Exclusive Digital Premier</h2>
      <div className="heroBanner" style={{ height: "450px",marginBottom:"30px" }}>
        <div className="backdrop-img">
          <Img src={Background.Back} />
        </div>
        <div className="mx-5 ">
          <Img src={Background?.NameLOGO} alt="name" />
        </div>
      </div>

     
    </>
  );
};

export default SmallSection;
