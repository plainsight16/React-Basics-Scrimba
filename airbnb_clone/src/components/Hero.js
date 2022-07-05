import hero_img from "../assets/hero-img.png"
export default function Hero(){
    return (
        <section className="hero container flow">
            <img src={hero_img}/>
            <header className="flow">
            <h1 className="heading">Online Experiences</h1>
            <p className="flow-small">Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
            </header>
        </section>
    );
}