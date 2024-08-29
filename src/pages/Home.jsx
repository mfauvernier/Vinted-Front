import { Link } from "react-router-dom";

const Home = ({ data }) => {
  // console.log(data);
  return (
    <main>
      <div className="img-container">
        <img src="src/img/hero-24963eb2.jpg" alt="" className="hero" />
      </div>

      <div className="container offers-block">
        {data.offers.map((offer) => {
          // console.log(offer);
          return (
            <Link key={offer._id} to={`/offer/${offer._id}`}>
              <div className="offer-block">
                <div className="user">
                  <img
                    src={offer.owner.account.avatar.secure_url}
                    alt={offer.owner.account.username}
                  />
                  <p>{offer.owner.account.username}</p>
                </div>
                <img
                  src={offer.product_image.secure_url}
                  alt={offer.product_name}
                />
                <span>{offer.product_price} €</span>
                <div>
                  {offer.product_details.map((details, index) => {
                    return (
                      <div key={index}>
                        <span>{details.TAILLE}</span>
                        <span>{details.MARQUE}</span>
                      </div>
                    );
                  })}
                </div>
              </div>
            </Link>
          );
        })}
      </div>
    </main>
  );
};

export default Home;
