import logo from './logo.svg';
import './Header.css'

export default function Header(){
    return(
        <nav className='container'>
            <div className='logo'>
                <img src= {logo}/>
                <span>ReactFacts</span>
            </div>

            <ul>
                <li className='extra-tile'>React Course - Project 1</li>
            </ul>
        </nav>
    )
}