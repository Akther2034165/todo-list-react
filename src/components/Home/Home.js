import React from "react";
import img from "../../Media/banner.jpg";
import Footer from "../Footer/Footer";
import Todos from "../Todos/Todos";
const Home = () => {
  return (
    <div>
      <img className="img-fluid" width="100%" src={img} alt="" />
      <Todos />
      <Footer />
    </div>
  );
};

export default Home;
