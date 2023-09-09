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
  const pizzas = pizzaData;
  // const pizzas = [];
  const numPizza = pizzas.length;
  return (
    <main className="menu">
      <h2>Our menu</h2>

      {numPizza > 0 ? (
        <>
          <p>
            Authentic Italian cuisine. 6 creative dishes to choose from. All
            from our stone oven, all organic, all delicious.
          </p>

          <ul className="pizzas">
            {pizzas.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're still working on our menu. Please come back later :)</p>
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

function Pizza({ pizzaObj }) {
  if (pizzaObj.soldOut) return null;
  return (
    <li className="pizza">
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.price}</span>
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

  // if (!isOpen) return <h1>Closed</h1>;

  return (
    <footer className="footer">
      {isOpen ? (
        <Order closedHor={closedHor} openHor={openHor} />
      ) : (
        <p>
          We're happy to welcome you between {openHor}:00 and {closedHor}:00
        </p>
      )}
    </footer>
  );
}

function Order({ closedHor, openHor }) {
  return (
    <div className="order">
      <p>
        We're open from {openHor}:00 to {closedHor}:00. Come visit us or order
        online
      </p>
      <button className="btn">Order</button>
    </div>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
// The Complete JavaScript Course 2022: From Zero to Expert!
// 5 / 52;
