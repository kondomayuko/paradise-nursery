import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem } from './CartSlice';
import Navbar from './Navbar';

function ProductList() {
  const dispatch = useDispatch();
  const [addedToCart, setAddedToCart] = useState({});

  // Mock Data: 6 plants across 3 categories
  const plantsArray = [
    {
      category: "Air Purifying Plants",
      plants: [
        { name: "Snake Plant", image: "/snake-plant.png", description: "Produces oxygen at night", cost: "$15" },
        { name: "Spider Plant", image: "/spider-plant.png", description: "Filters formaldehyde", cost: "$12" },
        { name: "Peace Lily", image: "/peace-lily.png", description: "Removes mold spores", cost: "$18" }
      ]
    },
    {
      category: "Aromatic Fragrant Plants",
      plants: [
        { name: "Lavender", image: "/lavender.png", description: "Calming scent", cost: "$20" },
        { name: "Jasmine", image: "/jasmine.png", description: "Sweet fragrance", cost: "$18" }
      ]
    },
    {
      category: "Succulents",
      plants: [
        { name: "Aloe Vera", image: "/aloe-vera.png", description: "Healing properties", cost: "$14" }
      ]
    }
  ];

  const handleAddToCart = (plant) => {
    dispatch(addItem(plant));
    setAddedToCart((prevState) => ({
      ...prevState,
      [plant.name]: true, // Set the added state for the specific plant
    }));
  };

  return (
    <div className="products-page">
      <Navbar />

      <div className="product-grid">
        {plantsArray.map((category, index) => (
          <section className="category-section" key={index}>
            <div className="category-heading-wrap">
              <h2>{category.category}</h2>
            </div>
            <div className="plant-list">
              {category.plants.map((plant, plantIndex) => (
                <div className="plant-card" key={plantIndex}>
                  <span className="plant-sale-badge">SALE</span>
                  <h3>{plant.name}</h3>
                  <img src={plant.image} alt={plant.name} className="plant-thumbnail" />
                  <p className="plant-price">{plant.cost}</p>
                  <p className="plant-description">{plant.description}</p>
                  <button
                    type="button"
                    disabled={addedToCart[plant.name]}
                    onClick={() => handleAddToCart(plant)}
                  >
                    {addedToCart[plant.name] ? "Added to Cart" : "Add to Cart"}
                  </button>
                </div>
              ))}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
}

export default ProductList;