import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import placeholder from "../img/placeholder.webp";
import { Link } from "react-router-dom";

const Offer = ({ token }) => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);
  console.log("token ===> ", token);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://lereacteur-vinted-api.herokuapp.com/v2/offers/" + id
        );
        setData(response.data);
        setIsLoading(false);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, [id]);

  return (
    <div>
      {isLoading ? (
        <p>Chargement ...</p>
      ) : (
        <div className="offer-body">
          <div className="offer-container">
            <div className="offer-pic">
              <img
                src={data.product_image.secure_url}
                alt={data.product_name}
              />
            </div>
            <div className="offer-infos">
              <div>
                <p className="price">{data.product_price} €</p>
                <ul className="list">
                  {data.product_details.map((detail, index) => {
                    // console.log(detail);
                    const keys = Object.keys(detail);
                    const key = keys[0];
                    return (
                      <li key={index}>
                        <p>{key}</p>
                        <p className="detail">{detail[key]}</p>
                      </li>
                    );
                  })}
                </ul>
              </div>
              <div className="offer-content">
                <p>{data.product_name}</p>
                <p>{data.product_description}</p>
                <div className="user-offer">
                  {data.owner.account.avatar ? (
                    <img
                      src={data.owner.account.avatar.secure_url}
                      alt={data.owner.account.username}
                    />
                  ) : (
                    <img src={placeholder} alt={data.owner.account.username} />
                  )}

                  <p>{data.owner.account.username}</p>
                </div>
              </div>
              <Link
                to={token ? "/payment" : "/login"}
                state={{ title: data.product_name, price: data.product_price }}
              >
                <button>Acheter</button>
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Offer;
