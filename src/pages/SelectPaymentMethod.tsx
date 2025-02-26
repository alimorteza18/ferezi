import BeforePaymentSummary from "components/cart/beforePaymentSummary/BeforePaymentSummary";
import TitleWithUnderline from "layouts/titleWithUnderline/TitleWithUnderline";
import React, { useState } from "react";
import { useTranslation } from "react-i18next";
import visaCard from "assets/images/temporaryImages/visacard.png";
import discoverCard from "assets/images/temporaryImages/discover.png";
import masterCard from "assets/images/temporaryImages/mastercard1.png";
import PaymentCardComponent from "components/paymentCard/PaymentCardComponent";
import { Link } from "react-router-dom";
const SelectPaymentMethod = () => {
  const { t } = useTranslation();
  const [selectedCard, setSelectedCard] = useState(null);
  const cards = [
    { img: visaCard, cardNumber: "1234567890123456", id: 0 },
    { img: masterCard, cardNumber: "1234567890123456", id: 1 },
    { img: discoverCard, cardNumber: "1234567890123456", id: 2 },
  ];
  return (
    <div>
      <TitleWithUnderline
        title={t("payment method")}
        className="all-center mt-3"
      />
      <div className="all-center flex-col w-full mt-8">
        {cards.map((item) => {
          return (
            <PaymentCardComponent
              img={item.img}
              cardNumber={item.cardNumber}
              id={item.id}
              selectedCard={selectedCard}
              setSelectedCard={setSelectedCard}
            />
          );
        })}
        <BeforePaymentSummary />
      </div>
      <div className="w-full all-center mt-3">
        <Link to="/order-details" className="fr-primary-button">
          {t("confirm payment")}
        </Link>
      </div>
    </div>
  );
};

export default SelectPaymentMethod;
