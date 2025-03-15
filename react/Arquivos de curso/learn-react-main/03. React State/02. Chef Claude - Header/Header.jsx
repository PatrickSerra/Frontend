import logo from './images/chef-claude-icon.png'

function Header() {
    return ( 
        <header>
            <img src={logo} alt="" />
            <h1>Chef Claude</h1>
        </header>
     );
}

export default Header;