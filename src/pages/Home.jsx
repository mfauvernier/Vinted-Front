import { Link } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import hero from "../img/hero.jpg";
import placeholder from "../img/placeholder.webp";

const Home = ({ search }) => {
  // console.log(data);
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const response = await axios.get(
        "https://lereacteur-vinted-api.herokuapp.com/v2/offers?title=" + search
      );
      setData(response.data);
      setIsLoading(false);
    };
    fetchData();
  }, [search]);

  return (
    <>
      {isLoading ? (
        <p>Chargement...</p>
      ) : (
        <main>
          <div className="img-container">
            <img src={hero} alt="hero" className="hero" />
          </div>
          <div className="container offers-block">
            {data.offers.map((offer) => {
              // console.log(offer);
              return (
                <Link key={offer._id} to={`/offer/${offer._id}`}>
                  <div className="offer-block">
                    <div className="user">
                      {offer.owner.account.avatar ? (
                        <img
                          src={offer.owner.account.avatar.secure_url}
                          alt={offer.owner.account.username}
                        />
                      ) : (
                        <img
                          src={placeholder}
                          alt={offer.owner.account.username}
                        />
                      )}

                      <p>{offer.owner.account.username}</p>
                    </div>
                    <img
                      src={offer.product_image.secure_url}
                      alt={offer.product_name}
                    />
                    <div className="under-pic">
                      <span className="price">{offer.product_price} €</span>
                      <p>{offer.product_details[1].TAILLE}</p>
                      <p>{offer.product_details[0].MARQUE}</p>
                    </div>
                  </div>
                </Link>
              );
            })}
          </div>
        </main>
      )}
    </>
  );
};

export default Home;
