import CartWidget from "../CarWidget/CarWidget";
import { Link } from "react-router-dom"

const Navbar = () => {
    return (
      <header style={{display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
        <h1>Ecommerce</h1>
        <nav>
          <Link to='/category/celular'>Celulares</Link>
          <Link to='/category/tablet'>Tablets</Link>
          <Link to='/category/notebook'>Notebooks</Link>
        </nav>
        <CartWidget />
      </header>
    );
  };
export default Navbar