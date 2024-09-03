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

  return (
    <div className="payment">
      <div className="container payment-box">
        <p>Résumé de la commande</p>
        <p>Commande</p>
        <p>{price} €</p>
        <p>Frais protection acheteurs</p>
        <p>1.00 €</p>
        <p>Frais de port</p>
        <p>2.00€</p>
        <p>Total</p>
        <p>... €</p>
        <p>
          Il ne vous reste plus qu'une étape pour vous offrir {title}. Vous
          allez payer "TOTAL" (frais de protection et frais de port inclus).
        </p>
        <Elements stripe={stripePromise} options={options}>
          <CheckoutForm />
        </Elements>
      </div>
    </div>
  );
};

export default Payment;
