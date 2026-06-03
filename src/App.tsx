import "./index.css"

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
    <Pizza/>
    <Pizza/>
    <Pizza/>
  </main>
}
function Footer (){
  const hour = new Date().getHours();
  const openHour = 12;
  const closeHour = 22;
  const isOpen = hour >= openHour && hour <= closeHour
  // if(hour >= openHour && hour <= closeHour) alert("We are currently open") ;else alert("we are closed")
  console.log(isOpen)
  
  return <footer>{new Date().toLocaleTimeString()}We are currently open</footer>
}

function Pizza() {
  return (
    <div>
      <img src="/pizzas/spinaci.jpg" alt="spinaci" />
      <h1>Pizza Spinachi</h1>
      <p>Tomato, mozarella, spinatch, ricotta cheese</p>
    </div>
  )
}

export default App