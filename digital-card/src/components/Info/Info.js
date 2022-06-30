import profile_img from '../../assets/Info/profile-img.png';
import mail_icon from '../../assets/Info/Mail.svg'
import linkedIn_icon from '../../assets/Info/linkedin.svg'
import './Info.css';
export default function Info(){
    return (
        <div className="Info">
            <img src ={profile_img} alt="profile"/>

            <div className="info-details container flow">
                <span className="name">Laura Smith</span>
                <span className="role">Frontend Developer</span>
                <span className="website">laura.website</span>

                <div className='links flex'>
                    <button className='email flex'>
                        <img src={mail_icon}/>
                        <span>Email</span>
                    </button>
                    <button className='linkedIn flex'>
                        <img src={linkedIn_icon}/>
                        <span>LinkedIn</span>
                    </button>
                </div>
            </div>

           

           
            
        </div>
    );
}