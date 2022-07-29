import Logo from '../LogoAutoservicios.png'
import '../NavBar.css'
export default function NavBar(){
    return(
        <div className='navbar_div'>
            <img className='logo' src={Logo}></img>
            <ul className='navbar_list'>
                <li> <a href='#'> Almacen </a> </li>
                <li> <a href='#'> Kiosco </a> </li>
                <li> <a href='#'> Perfumeria </a> </li>
            </ul>
            <button onClick={ ()=> alert("Proximamente") }>Login</button>
        </div>
    )
}
