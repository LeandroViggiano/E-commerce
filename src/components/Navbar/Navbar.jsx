import CartWidget from "../CarWidget/CarWidget";

const Navbar = () => {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Ecommerce</h1>
        <nav>
          <a>Clases</a>
          <a>Indumentaria</a>
          <a>Accesorios</a>
        </nav>
        <CartWidget />
      </header>
    );
  };
export default Navbar