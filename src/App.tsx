import "./index.css"
import {pizzaData} from "../data"
import type { pizzaType } from "./types"
function App() {
  return (
    <div className="container">
      <Header/>
      <Menu/>
      <Footer/>
    </div>
  )
}

function Header (){
  return <header className="header"><h1>Fast React Pizza Co.</h1></header>
}
function Menu (){
  return <main className="menu">
    <h2>Our Menu</h2>
    {pizzaData.map(pizzaItem=> <Pizza key={pizzaItem.name} pizzaName={pizzaItem.name} PizzaIngredients={pizzaItem.ingredients}/>)}
  </main>
}
function Footer (){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  // if(hour >= openHour && hour <= closeHour) alert("We are currently open") ;else alert("we are closed")
  console.log(isOpen)
  
  return <footer className="footer">{new Date().toLocaleTimeString()}We are currently open</footer>
}

function Pizza({pizzaName, PizzaIngredients}: pizzaType ){
  return (
    <div>
      <img src={`/pizzas/${pizzaName.split(" ")[1]?.toLowerCase() || pizzaName.toLowerCase()}.jpg`} alt="spinxaci" />
      <h3>{pizzaName}</h3>
      <p>{PizzaIngredients}</p>
    </div>
  )
}

export default App



