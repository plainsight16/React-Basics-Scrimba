import logo from '../Troll_Face.png'

export default function Header (){
    return(
        <header>
            <img className="header--logo" src={logo} alt="troll face"/>
            <h2 className = "header--title">MemeGenerator</h2>
            <h3 className = "header--project">React Course - Project 3</h3>
        </header>
        
    )
}