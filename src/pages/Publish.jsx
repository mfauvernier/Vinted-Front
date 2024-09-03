import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { ImCross } from "react-icons/im";

const Publish = ({ token }) => {
  const [picture, setPicture] = useState(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [brand, setBrand] = useState("");
  const [size, setSize] = useState("");
  const [color, setColor] = useState("");
  const [condition, setCondition] = useState("");
  const [city, setCity] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const formData = new FormData();
      formData.append("picture", picture);
      formData.append("title", title);
      formData.append("description", description);
      formData.append("brand", brand);
      formData.append("size", size);
      formData.append("color", color);
      formData.append("condition", condition);
      formData.append("city", city);
      formData.append("price", price);
      const response = await axios.post(
        "https://lereacteur-vinted-api.herokuapp.com/offer/publish",
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
            "Content-type": "multipart/form-data",
          },
        }
      );
      console.log(response.data);
      navigate(`/offers/${response.data._id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return token ? (
    <div className="publish">
      <div className="container">
        <h2>Vends ton article</h2>
        <div>
          <form onSubmit={handleSubmit}>
            <div className="input-img">
              {picture ? (
                <div className="picture">
                  <img src={URL.createObjectURL(picture)} alt="preview photo" />
                  <ImCross
                    className="cross"
                    onClick={() => {
                      setPicture(null);
                    }}
                  />
                </div>
              ) : (
                <>
                  <label htmlFor="add-picture" className="add-picture">
                    <span className="sign">+</span>
                    <span>Ajoute ta photo</span>
                  </label>
                  <input
                    id="add-picture"
                    type="file"
                    style={{ display: "none" }}
                    onChange={(event) => {
                      setPicture(event.target.files[0]);
                    }}
                  />
                </>
              )}
            </div>
            <div className="input-text">
              <div className="inside-text">
                <h3>Titre</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setTitle(event.target.value);
                  }}
                  placeholder="ex : Chemise Octobre en Velours"
                />
              </div>
              <div className="inside-text">
                <h3>Décris ton article </h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setDescription(event.target.value);
                  }}
                  placeholder="Décris ici ton article en détail"
                />
              </div>
            </div>
            <div className="input-text">
              <div className="inside-text">
                <h3>Marque</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setBrand(event.target.value);
                  }}
                  placeholder="ex : Octobre Editions"
                />
              </div>
              <div className="inside-text">
                <h3>Taille</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setSize(event.target.value);
                  }}
                  placeholder="ex : S / M / L"
                />
              </div>
              <div className="inside-text">
                <h3>Couleur</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setColor(event.target.value);
                  }}
                  placeholder="ex : Vert"
                />
              </div>
              <div className="inside-text">
                <h3>Etat</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setCondition(event.target.value);
                  }}
                  placeholder="ex : Neuf "
                />
              </div>
              <div className="inside-text">
                <h3>Lieu</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setCity(event.target.value);
                  }}
                  placeholder="ex : Paris "
                />
              </div>
            </div>
            <div className="input-text">
              <div className="inside-text">
                <h3>Prix</h3>
                <input
                  type="text"
                  onChange={(event) => {
                    setPrice(event.target.value);
                  }}
                  placeholder="0,00 €"
                />
              </div>
            </div>
            <div className="publish-button">
              <button>Ajouter</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export default Publish;
