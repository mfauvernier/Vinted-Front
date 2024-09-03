import { useLocation } from "react-router-dom";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import CheckoutForm from "../components/CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51HCObyDVswqktOkX6VVcoA7V2sjOJCUB4FBt3EOiAdSz5vWudpWxwcSY8z2feWXBq6lwMgAb5IVZZ1p84ntLq03H00LDVc2RwP"
);

const Payment = () => {
  const location = useLocation();
  const { title, price } = location.state;

  const options = {
    mode: "payment",
    amount: Number((price * 100).toFixed(0)),
    currency: "eur",
  };

  let total = price + 1 + 2;

  return (
    <div className="payment">
      <div className="container payment-box">
        <p className="title">Résumé de la commande</p>
        <div className="first-block">
          <div className="payment-line">
            <p>Commande</p>
            <p>{price} €</p>
          </div>
          <div className="payment-line">
            <p>Frais protection acheteurs</p>
            <p>1.00 €</p>
          </div>
          <div className="payment-line last-line">
            <p>Frais de port</p>
            <p>2.00 €</p>
          </div>
        </div>
        <div className="payment-line total">
          <p>Total</p>
          <p>{total} €</p>
        </div>
        <p className="payment-final">
          Il ne vous reste plus qu'une étape pour vous offrir{" "}
          <span className="bold">{title}</span>. Vous allez payer{" "}
          <span className="bold">{total}</span> € (frais de protection et frais
          de port inclus).
        </p>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm title={title} price={price} />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
