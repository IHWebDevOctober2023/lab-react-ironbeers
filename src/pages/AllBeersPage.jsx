import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom"

const beersApi = "https://ih-beers-api2.herokuapp.com/beers"
function AllBeersPage() {
    // get all the beers info from the api
    const [allBeers, setAllBeers] = useState([]);

    const getAllBeers = async () => {
        try {
            const data = await fetch(beersApi);
            const jsonData = await data.json();
            setAllBeers(jsonData);

        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getAllBeers();
    }, [])


    return (
        <>
            <h1>All Beers</h1>
            {
                allBeers.map((eachBeer) => (
                    <div key={eachBeer._id}>
                        <Link to={`/beers/${eachBeer._id}`}>
                            <h3>{eachBeer.name}</h3>
                            <img src={eachBeer.image_url} alt={eachBeer.name} />
                            <p>{eachBeer.tagline}</p>
                        </Link>
                    </div>
                )
                )
            }
        </>

    )
}

export default AllBeersPage;
