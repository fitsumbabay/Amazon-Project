import React from "react";
import "./home.css";
import Product from "./Product";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <Carousel
          renderIndicator={false}
          showThumbs={false}
          className="home__image"
          // autoPlay
          // interval={2000}
          // infiniteLoop
        >
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/NzkzZDYxNTkt/NzkzZDYxNTkt-OWQwMzQwNDUt-w3000._CB663569411_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/AMAZON_FASHION/2021/journeys/MGY0YzMzNTMt/MGY0YzMzNTMt-ODJmYTRlZjEt-w3000._CB665832751_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/digital/video/merch/Movie/CIND_2021_GWBleedingHero_3000x1200_PRE_Final_en-US_PVD7333_Cinderella._CB664771797_.jpg" />
          </div>
          <div>
            <img src="https://images-na.ssl-images-amazon.com/images/G/01/kindle/journeys/Y2UwYWM0MDQt/Y2UwYWM0MDQt-YWViNmFlODkt-w3000._CB668786397_.jpg" />
          </div>
        </Carousel>

        <div className="home__row">
          <Product
            id="12321341"
            title="QuattroPod Mini | 5G WiFi Wireless Presentation Facility HDMI Transmitter & Receiver for Streaming 4K from Laptop, PC, Smartphone to HDTV/Projector (1T1R)"
            price={399.99}
            rating={5}
            image="	https://m.media-amazon.com/images/I/31pjZ-6DOaL._AC_SR320,320_.jpg"
          />
          <Product
            id="49538094"
            title="Fire HD 8 Kids tablet, 8 HD display ages, 3-7 32 GB Blue Kid-Proof Case"
            price={139.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61s3tGaiYtL._AC_SL1000_.jpg"
          />
          <Product
            id="49538093"
            title="Nulaxy Laptop Stand, Ergonomic Height Angle Adjustable Computer Laptop Holder Compatible with MacBook, Air, Pro, Dell XPS, Samsung, Alienware All Laptops 11-17"
            price={39.99}
            rating={4}
            image="https://m.media-amazon.com/images/I/61Y1Ff6l81S._AC_SL1500_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="4903850"
            title="Amazon Basics Low-Back, Upholstered Mesh, Adjustable, Swivel Computer Office Desk Chair, Black"
            price={45.7}
            rating={5}
            image="	https://m.media-amazon.com/images/I/81cu+XU1kWS._AC_SY220_.jpg"
          />
          <Product
            id="23445930"
            title="Roll over image to zoom in
          Meeting Owl Pro - 360-Degree, 1080p HD Smart Video Conference Camera, Microphone, and Speaker (Automatic Speaker Focus & Smart Zooming and Noise Equalizing)"
            price={929.97}
            rating={4}
            image="https://m.media-amazon.com/images/I/91-o+984YvL._AC_SL1500_.jpg"
          />
          <Product
            id="3254354345"
            title="New Apple iPad Pro (12.9-inch, Wi-Fi, 128GB) - Silver (4th Generation)"
            price={598.99}
            rating={4}
            image="https://images-na.ssl-images-amazon.com/images/I/816ctt5WV5L._AC_SX385_.jpg"
          />
        </div>
        <div className="home__row">
          <Product
            id="90829331"
            title="Amazon Basics Small Digital Alarm Clock with Nightlight and Battery Backup, LED Display"
            price={14.25}
            rating={4}
            image="https://m.media-amazon.com/images/I/61j17FjPhtL._AC_SL1500_.jpg"
          />
          <Product
            id="90829332"
            title="Dual-Core Processor Up to 2.8GHz, 4GB RAM, 64GB eMMC Storage, Webcam, Bluetooth, HDMI, Wi-Fi, Rose Gold, Windows 10 with 1 Year Microsoft 365"
            price={329.44}
            rating={4}
            image="https://m.media-amazon.com/images/I/71inmdVaC8S._AC_SL1500_.jpg"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
