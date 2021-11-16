import { Link } from 'react-router-dom';
import LogoutButton from './LogoutButton'

function Header({ logout }){
  return(
    <div>
      <Link to="/">
                    <button>Home</button>
                </Link>

                <Link to="/about">
                    <button>About</button>
                </Link>

                <Link to="/profile">
                    <button>Profile</button>
                </Link>

                <LogoutButton logout={logout} />
    </div>
  )
}

export default Header
