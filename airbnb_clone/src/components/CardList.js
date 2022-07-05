import Card from './Card.js'
import data from '../data.js'

const cards =  data.map((item) => {
    return (
        <Card
        key = {item.id} 
        item = {item}
        />
    );
})
export default function CardList(){
    return (
        <section className="cardlist">
            {cards}
        </section>
    );
}