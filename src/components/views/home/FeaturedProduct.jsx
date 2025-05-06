// src/components/view/FeaturePlants.jsx

import React from "react";
import PlantCard from "../props/PlantCard";
import SectionContainer from "../children/SectionContainer";

const FeaturePlants = () => {
  const featuredPlants = [
    {
      name: "Snake Plant",
      image: "https://i.ibb.co/6mGHJMP/plant3.jpg",
      description: "Air-purifying indoor plant.",
      price: "$25",
    },
    {
      name: "Peace Lily",
      image: "https://i.ibb.co/XZBPt9h/plant1.jpg",
      description: "Great for low light spaces.",
      price: "$30",
    },
    {
      name: "Aloe Vera",
      image: "https://i.ibb.co/YyfxPf2/plant2.jpg",
      description: "Healing and decorative.",
      price: "$15",
    },
  ];

  return (
    <SectionContainer>
      <h2 className="text-3xl font-bold text-center mb-6">Featured Plants</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featuredPlants.map((plant, index) => (
          <PlantCard
            key={index}
            name={plant.name}
            image={plant.image}
            description={plant.description}
            price={plant.price}
          />
        ))}
      </div>
    </SectionContainer>
  );
};

export default FeaturePlants;
