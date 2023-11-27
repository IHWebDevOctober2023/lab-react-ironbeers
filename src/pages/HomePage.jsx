import { Link } from "react-router-dom"
import allBeersImg from "../assets/beers.png" 
import newBeerImg from "../assets/new-beer.png" 
import randomBeerImg from "../assets/random-beer.png" 

function HomePage() {
    return (
        <>
            <h1>All beers you can drink at Ironhack Bootcamp party</h1>
            <Link to="/beers">
                <section>
                    <img src={allBeersImg} alt="" />
                    <h2>All Beers</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis mollitia debitis consequuntur ut minus voluptatum odio distinctio soluta? Nisi, incidunt nesciunt. Vitae molestiae deserunt, debitis inventore at necessitatibus eaque.</p>
                </section>
            </Link>
            <Link to="/random-beer">
                <section>
                    <img src={randomBeerImg} alt="" />
                    <h2>Random beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis mollitia debitis consequuntur ut minus voluptatum odio distinctio soluta? Nisi, incidunt nesciunt. Vitae molestiae deserunt, debitis inventore at necessitatibus eaque.</p>
                </section>
            </Link>
            <Link to="/new-beer">
                <section>
                    <img src={newBeerImg} alt="" />
                    <h2>New Beer</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro perferendis mollitia debitis consequuntur ut minus voluptatum odio distinctio soluta? Nisi, incidunt nesciunt. Vitae molestiae deserunt, debitis inventore at necessitatibus eaque.</p>
                </section>
            </Link>
        </>
    )
}

export default HomePage;
