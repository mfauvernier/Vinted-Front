import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";

const Offer = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  // console.log(data);

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
      {" "}
      {isLoading ? (
        <p>Chargement ...</p>
      ) : (
        <main>
          <div>
            <img src={data.product_image.secure_url} alt={data.product_name} />
            <div>
              <h2>{data.product_price} €</h2>
              {data.product_details.map((detail, index) => {
                // console.log(detail);
                const keys = Object.keys(detail);
                const key = keys[0];
                return (
                  <div key={index}>
                    <p>{key}</p>
                    <p>{detail[key]}</p>
                  </div>
                );
              })}
            </div>
          </div>
        </main>
      )}{" "}
    </div>
  );
};

export default Offer;
