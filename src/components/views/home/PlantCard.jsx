import React from "react";

const PlantCard = ({ name, image, description, price }) => {
  return (
    <div className="bg-white shadow-md rounded-2xl p-4 text-center">
      <img src={image} alt={name} className="w-full h-48 object-cover rounded-xl mb-4" />
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-600 mb-2">{description}</p>
      <p className="text-green-600 font-bold">{price}</p>
    </div>
  );
};

export default PlantCard;
