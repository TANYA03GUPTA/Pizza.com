import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
const pizzaData = [
  {
    name: "Focaccia",
    ingredients: "Bread with italian olive oil and rosemary",
    price: 6,
    photoName: "pizzas/focaccia.jpg",
    soldOut: true,
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
    soldOut: false,
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
  return (
    <header className="header">
      <h1>Jimie's and Rechels's Pizzeria</h1>
    </header>
  );
}

function Menu() {
  const pizzas = pizzaData;
  const numpizza = pizzas.length;

  return (
    <main className="menu">
      <h2>Our Menu </h2>

      {/*<Pizza
        name="Focaccia"
        ingredients="Bread with italian olive oil and rosemary"
        price="6"
        photoName="pizzas/focaccia.jpg"
      />*/}
      {numpizza > 0 ? (
        <>
          <p>
            WElcome to the authentic pizzeria in town , that serves delicous
            homegrown sauces and toppings
          </p>
          <ul className="pizzas">
            {pizzaData.map((pizza) => (
              <Pizza pizzaObj={pizza} key={pizza.name} />
            ))}
          </ul>
        </>
      ) : (
        <p>We're working on our menu at the moment.Will be back soon.</p>
      )}
    </main>
  );
}
function Pizza({ pizzaObj }) {
  console.log(pizzaObj);

  //if (pizzaObj.soldOut) return null;

  return (
    <li className={`pizza ${pizzaObj.soldOut ? "sold-out" : ""}`}>
      <img src={pizzaObj.photoName} alt={pizzaObj.name} />
      <div>
        <h3>{pizzaObj.name}</h3>
        <p>{pizzaObj.ingredients}</p>
        <span>{pizzaObj.soldOut ? "sold out" : pizzaObj.price}</span>
      </div>
    </li>
  );
}

function Footer() {
  const Hour = new Date().getHours();
  const openhrs = 10;
  const closehrs = 20;
  const isopen = Hour >= openhrs && Hour <= closehrs;
  console.log(isopen);

  return (
    <footer className="footer">
      {isopen ? (
        <Order closehour={closehrs} />
      ) : (
        <p>
          Store's open from {openhrs}:00 till {closehrs}:00 . Kindly visit us
          then.
        </p>
      )}
    </footer>
  );
}

function Order(props) {
  return (
    <div className="order">
      <p>
        We are open untill {props.closehour}:00. Come visit us or order online.
      </p>
      <button className="btn">Order</button>
    </div>
  );
}
const root = ReactDOM.createRoot(document.getElementById("root"));
//root.render(<App />);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
