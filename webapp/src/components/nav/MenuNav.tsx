import { Link } from 'react-router-dom';

const MenuNav = () => {
  return (

    <div className='menuNav'>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>

        <li>
          <Link to="/Mapa">Mapa</Link>
        </li>

        <li>
          <Link to="/Login">Login</Link>
        </li>
        <li>
          <Link to="/Aboutus">About us</Link>
        </li>
      </ul>
    </div>

  )
}

export default MenuNav