import React, { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import pizzaData from "./data";

function App() {
  return (
    <div className="container">
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}

function Header() {
  return (
    <header className="header">
      <h1>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  const pizza = pizzaData;
  const numPizza = pizza.length;

  return (
    <menu className="menu">
      <h2>Pizza Menu</h2>
      <>
        <p>
          Delicious pizza with a perfect blend of gooey cheese and savory
          toppings, freshly baked to perfection and delivered hot to your
          doorstep. Satisfaction in every slice!
        </p>
        <ul>
          {numPizza > 0 && (
            <div className="pizzas">
              {pizza.map((pizza) => (
                <Pizza pizzaObj={pizza} key={pizza.name} />
              ))}
            </div>
          )}
        </ul>
      </>
    </menu>
  );
}

function Pizza(props) {
  return (
    <li className={`pizza ${props.pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>
          {props.pizzaObj.soldOut ? "SOLD OUT" : props.pizzaObj.price}
        </span>
      </div>
    </li>
  );
}

function Footer() {
  const hour = new Date().getHours();
  console.log(hour);
  const opearHour = 7;
  const closeHour = 20;
  const isOpean = hour >= opearHour && hour <= closeHour;

  return (
    <footer className="footer">
      {isOpean ? (
        <div className="order">
          <p>{`We're opean until ${opearHour}. Come visit us order online. `}</p>
          <button className="btn">Order</button>
        </div>
      ) : (
        <div className="order">
          <p>{`We're close now. please come back between ${opearHour}:00 - ${closeHour}:00 hours. `}</p>
          <button className="btn">Order</button>
        </div>
      )}
    </footer>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
