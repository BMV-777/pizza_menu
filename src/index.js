import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";

const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Margherita",
    ingredients: "Tomato and mozarella",
    price: 10,
    photoName: "pizzas/margherita.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Spinaci",
    ingredients: "Tomato, mozarella, spinach, and ricotta cheese",
    price: 12,
    photoName: "pizzas/spinaci.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Funghi",
    ingredients: "Tomato, mozarella, mushrooms, and onion",
    price: 12,
    photoName: "pizzas/funghi.jpg",
    soldOut: false,
  },
  {
    name: "Pizza Salamino",
    ingredients: "Tomato, mozarella, and pepperoni",
    price: 15,
    photoName: "pizzas/salamino.jpg",
    soldOut: true,
  },
  {
    name: "Pizza Prosciutto",
    ingredients: "Tomato, mozarella, ham, aragula, and burrata cheese",
    price: 18,
    photoName: "pizzas/prosciutto.jpg",
    soldOut: false,
  },
];

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
  const style = {};
  return (
    <header className="header">
      <h1 style={style}>Fast React Pizza Co.</h1>
    </header>
  );
}

function Menu() {
  // const pizza = pizzaData;
  const pizzaArray = [];
  const pizza = pizzaData.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>
      {pizza && (
        <ul className="pizzas">
          {pizzaArray.map((pizza) => (
            <Pizza pizzaObj={pizza} key={pizza.name} />
          ))}
        </ul>
      )}
      {/* <h2>Our menu</h2>
      <Pizza
        name="Pizza Spinaci"
        ingredients="Tomato, mozarella, mushrooms, and onion"
        photoName="pizzas/spinaci.jpg"
        price={10}
      />
      <Pizza
        name="Pizza Funghi"
        ingredients="Tomato, mushrooms"
        price={12}
        photoName="pizzas/funghi.jpg"
      /> */}
    </main>
  );
}

function Pizza(props) {
  return (
    <li className="pizza">
      <img src={props.pizzaObj.photoName} alt={props.pizzaObj.name} />
      <div>
        <h3>{props.pizzaObj.name}</h3>
        <p>{props.pizzaObj.ingredients}</p>
        <span>{props.pizzaObj.price}</span>
      </div>
    </li>
  );
}

// {
//   props.map((pizza) => (
//     <div>
//       <image src={pizza.photoName} alt={pizza.name} />
//       <h3>{pizza.name}</h3>
//       <p>{pizza.ingredients}</p>
//       <p>{pizza.price}</p>
//     </div>
//   ));
// }
{
}

function Footer() {
  // const [counter, setCounter] = useState(0);

  // useEffect(() => {
  //   setInterval(() => {
  //     setCounter(new Date().toLocaleTimeString());
  //   }, 1000);
  // });
  const hour = new Date().getHours();
  const openHor = 9;
  const closedHor = 20;
  const isOpen = hour >= openHor && hour <= closedHor;

  // isOpen ? alert("We are open!") : alert("We are Closed!");

  // if (hour >= openHor && hour <= closedHor) {
  //   alert("We are open!");
  // } else {
  //   alert("We are Closed!");
  // }

  // console.log(hour);

  return (
    <footer className="footer">
      {isOpen && (
        <div className="order">
          <p>
            We're currently open until {closedHor}:00. Come visit us or order
            online
          </p>
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
// The Complete JavaScript Course 2022: From Zero to Expert!
// 5 / 47;
