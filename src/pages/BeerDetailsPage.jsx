import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

function BeerDetailsPage() {
    const [beer, setBeer] = useState(null);

    const { beerId } = useParams();
    const beersApi = `https://ih-beers-api2.herokuapp.com/beers/${beerId}`;

    const getBeer = async () => {
        try {
            const data = await fetch(beersApi);
            const jsonData = await data.json();
            setBeer(jsonData);

        }
        catch (error) {
            console.error(error);
        }
    };

    useEffect(() => {
        getBeer();
        console.log("This is the MOUNT");

        return () => {
            console.log("This is the Unmounting");
        };
    }, []);

    if (!beer) {
        return <h2>Loading beer</h2>
    } else {
        return (
            <div >
                <h3>{beer.name}</h3>
                <img src={beer.image_url} alt={beer.name} />
                <p>{beer.tagline}</p>
            </div>
        )
    }


}

export default BeerDetailsPage;
