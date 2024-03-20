import CartWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Ecommerce</h1>
        <nav>
          <Link to='/category/clases'>Clases</Link>
          <Link to='/category/indumentaria'>Indumentaria</Link>
          <Link to='/category/accesorios'>Accesorios</Link>
        </nav>
        <CartWidget />
      </header>
    );
  };
export default Navbar