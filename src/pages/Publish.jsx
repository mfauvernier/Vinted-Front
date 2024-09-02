import axios from "axios";
import { useState } from "react";

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
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="container">
      <div>
        <h2>Vends ton article</h2>
      </div>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="file"
            onChange={(event) => {
              setPicture(event.target.files[0]);
            }}
          />
          <h3>Titre</h3>
          <input
            type="text"
            onChange={(event) => {
              setTitle(event.target.value);
            }}
          />
          <h3>Décris ton article </h3>
          <input
            type="text"
            onChange={(event) => {
              setDescription(event.target.value);
            }}
          />
          <h3>Marque</h3>
          <input
            type="text"
            onChange={(event) => {
              setBrand(event.target.value);
            }}
          />
          <h3>Taille</h3>
          <input
            type="text"
            onChange={(event) => {
              setSize(event.target.value);
            }}
          />
          <h3>Couleur</h3>
          <input
            type="text"
            onChange={(event) => {
              setColor(event.target.value);
            }}
          />
          <h3>Etat</h3>
          <input
            type="text"
            onChange={(event) => {
              setCondition(event.target.value);
            }}
          />
          <h3>Lieu</h3>
          <input
            type="text"
            onChange={(event) => {
              setCity(event.target.value);
            }}
          />
          <h3>Prix</h3>
          <input
            type="text"
            onChange={(event) => {
              setPrice(event.target.value);
            }}
          />
          <button>Ajouter</button>
        </form>
      </div>
    </div>
  );
};

export default Publish;
