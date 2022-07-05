import star from '../assets/Star.png'
import ellipse from '../assets/ellipse.svg';


export default function Card({item}){
    let status;
    if (item.openSpots === 0)
        status = "Sold Out";
    else if (item.location.toLowerCase() === "online")
        status = "online"

    return(
        <div className='card'>
            <img className="card--image" src={`./images/${item.coverImg}`} alt='activity'/>
            { status && <div className="card--status">{status}</div>}
            <div className="card--stats">
                <img src={star} alt="star"/>
                <span className="card--rating">{item.stats.rating}</span>
                <span>({item.stats.reviewCount})</span>
                <img src={ellipse} alt="ellipse"/>
                <span>USA</span>
            </div>
            <p className="card--name">{item.title}</p>
            <div className="card--pricing">
                <span className="bold">From ${item.price}</span>
                <span> / person</span>
            </div>
        </div>
    );
}