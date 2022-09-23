import icon from '../assets/happy.png';
import logo from '../assets/logo.png';
const Nav = () => {
    return (
        <div className="nevbar">
            <img src={icon} alt="dp" id='icon' />
            <h3>EMOjee</h3>
            
            <a href="https://github.com/cryo5551/emojee-react" className='git' target="blank"><img src={logo} alt="gihub" id='gitlogo' /><p>Github</p></a>  
        </div>
    );
}

export default Nav;
