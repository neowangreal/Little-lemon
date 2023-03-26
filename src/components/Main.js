import React from "react";
import salad from "../assets/Salad.jpg";
import Bruchetta from "../assets/Bruchetta.svg";
import LemonDessert from "../assets/LemonDessert.jpg";
import { MdDeliveryDining } from "react-icons/md";
import "./Main.css";

function Main() {
  return (
    <div id="menu" className="main-body">
      <div className="main-heading">
        <h1>This weeks specials!</h1>
        <button>
          <a href="#Menu">Online Menu</a>
        </button>
      </div>
      <div className="main-content">
        <div className="first-content">
          <img width="300px" src={salad} alt="food-salad" />
          <div className="salad-top">
            <h3>Greek Salad</h3>
            <p>$12.99</p>
          </div>
          <div className="salad-bottom">
            <p>
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <span role="button" aria-label="On Click" className="specials-order-btn">
              Order a Delivery{" "}
              <MdDeliveryDining
                size={30}
                style={{
                  color: "#333",
                  marginLeft: "15px",
                  marginBottom: "-10px",
                }}
              />
            </span>
          </div>
        </div>
        <div className="second-content">
          <img width="300px" src={Bruchetta} alt="food-bruchetta" />
          <div className="bruchetta-top">
            <h3>Bruchetta</h3>
            <p>$5.99</p>
          </div>
          <div className="bruchetta-bottom">
            <p>
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <span role="button" aria-label="On Click" className="specials-order-btn">
              Order a Delivery{" "}
              <MdDeliveryDining
                size={30}
                style={{
                  color: "#333",
                  marginLeft: "15px",
                  marginBottom: "-10px",
                }}
              />
            </span>
          </div>
        </div>
        <div className="third-content">
          <img width="300px" src={LemonDessert} alt="food-lemonDessert" />
          <div className="desert-top">
            <h3>Lemmon Desert</h3>
            <p>$5.00</p>
          </div>
          <div className="desert-bottom">
            <p>
              This comes straight from grandma's recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <span role="button" aria-label="On Click" className="specials-order-btn">
              Order a Delivery{" "}
              <MdDeliveryDining
                size={30}
                style={{
                  color: "#333",
                  marginLeft: "15px",
                  marginBottom: "-10px",
                }}
              />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;
