import React from "react";
import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      price: 30.0,
      features: [
        "Access to cardio and weightlifting areas",
        "Locker room access",
        "Basic fitness classes",
        "Open 6 days a week",
        "Guest pass for a friend once a month",
        "Access to online workout videos",
      ],
    },
    {
      id: 2,
      name: "Silver Membership",
      price: 50.0,
      features: [
        "All Basic Membership benefits",
        "Access to sauna and steam room",
        "Personalized fitness assessment",
        "Discounts on personal training",
        "Unlimited access to spin classes",
        "Monthly nutrition workshops",
      ],
    },
    {
      id: 3,
      name: "Gold Membership",
      price: 75.0,
      features: [
        "All Silver Membership benefits",
        "Unlimited access to all fitness classes",
        "Priority booking for classes",
        "Nutritional counseling",
        "Access to swimming pool",
        "Complimentary sports massage",
      ],
    },
    {
      id: 4,
      name: "Platinum Membership",
      price: 100.0,
      features: [
        "All Gold Membership benefits",
        "24/7 gym access",
        "Exclusive access to VIP lounge",
        "Complimentary personal training sessions",
        "Free smoothie bar access",
        "Quarterly body composition analysis",
      ],
    },
  ];

  return (
    <div>
      <h1 className="text-5xl text-center">Best price in the town</h1>
      <div className="grid md:grid-cols-4 gap-6 ">
        {priceOptions.map((option) => (
          <PriceOption key={option.id} option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
