import Info from "./components//Info/Info.js"
import About from "./components//About/About.js"
import Interests from "./components//Interests/Interests.js"
import Footer  from "./components/Footer/Footer.js"
import './App.css'

export default function App(){
    return (
        <div className="app flow">
            <Info/>
            <About/>
            <Interests/>
            <Footer/>
        </div>
    );
} 