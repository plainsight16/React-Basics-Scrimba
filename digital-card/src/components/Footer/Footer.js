import './Footer.css'
import Twitter_icon from '../../assets/Footer/Twitter-Icon.svg';
import Github_icon from '../../assets/Footer/GitHub-Icon.svg';
import Instagram_icon from '../../assets/Footer/Instagram-Icon.svg';
import Facebook_icon from '../../assets/Footer/Facebook-Icon.svg';



export default function Footer(){
    return (
        <div className="Footer">
            <img src={Twitter_icon}/>
            <img src={Facebook_icon}/>
            <img src={Instagram_icon}/>
            <img src={Github_icon}/>
        </div>
    );
}