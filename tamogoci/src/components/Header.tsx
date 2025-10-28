import { Link } from "react-router"
function Header() {
  return (
    <header>
        <ul>
            <li><Link to={'/'}>MAIN MENU</Link></li>
            <li><Link to={'/pets'}>CHOOSE A PET</Link></li>
        </ul>
    </header>
  )
}

export default Header