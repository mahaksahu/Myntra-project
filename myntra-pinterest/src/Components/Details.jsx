// src/components/Details.jsx
import React from "react";
import { useParams } from "react-router-dom";
import Grid from "./Grid";
import Header from "./Header";
import Card from "./Card";
import Footer from "./Footer";
import RecommendedCard from "./RecommendedCard";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.css";

const Details = ({}) => {

  
  return (
    <>
      <Header />
      <div className="main-container bg-rose-50 min-h-screen p-4">
        <div className="detail-container bg-white p-2 rounded-2xl shadow-lg mb-8">
          <div className="white-section flex">
            <div className="left-section mr-4">
              <img
                src="https://i.pinimg.com/474x/da/ec/0c/daec0c0eae3b9024ad4ab5199054eca2.jpg"
                className="pin-image w-60 rounded-xl"
              />
            </div>
            <div className="right-section flex flex-col justify-between bg-rose-50 w-full max-w-lg ">
              <div className="recommended-products mb-4">
                <h2 className="text-xl font-semibold mb-2">
                  Recommended Products
                </h2>
                <div className="product-recommendation space-x-4 ">
                  <RecommendedCard
                    imageUrl="https://i.pinimg.com/736x/c5/6b/c2/c56bc2a517eaa7a9a9d995217a2bd21e.jpg"
                    price="720"
                    mrp="2000"
                    externalLink="https://www.myntra.com/coats/heart+up+my+sleeves/heart-up-my-sleeves-fur-trim-longline-over-coat/28536642/buy"
                  />
                  <RecommendedCard
                    imageUrl="https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcT4G7PXNSACVhmkd2Yubm1WuWD2aXINUolHj5C80excCjBKg6aBt-9HkGUqrh7VbuKnOSGlBLAwGkH2eUfqe2RuViW968kN6xorWA-FWpXYQ2yKlqTzgZ8N"
                    price="1034"
                    mrp="2500"
                    externalLink="https://www.myntra.com/dresses/athena/athena-white-fringed-detailed-sweetheart-neck-long-sleeves-bodycon-dress/25922134/buy"
                  />
                  <RecommendedCard
                    imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6LHAAeq-ZRp8cUA9Q4z-e5fLVV2SAmk-d7A&s"
                    price="950"
                    mrp="1500"
                    externalLink="https://www.myntra.com/handbags/allen+solly/allen-solly-textured-shoulder-bag/28971408/buy"
                  />
                </div>
              </div>
              <button className="wishlist-button text-bold py-2 px-4 rounded">
                <img src="wishlist.svg" className="h-6 mr-2" />
                <h2>Add to wishlist</h2>
              </button>
            </div>
          </div>
        </div>
        <img src="more-to-explore.png" alt="" />
        <div className="more-to-explore">
          <Grid />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Details;
