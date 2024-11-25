// data.js
import skypherBlack from '../images/skypher/skyper-pro.png';
import skypherWhite from '../images/dealership/galexeon.webp';

const products = [
    {
      id: 1,
      slug: "skypher",
      name: "Skypher Pro",
      price: "₹70,000",
      cutedprice: "₹90,000",
      colors: ["White","Black"],
      description: "Reserve your ride to the future with Skypher Pro.",
      images: {
        Black: skypherBlack,
        White: skypherWhite,
      },
    },
    {
      id: 2,
      slug: "ecoride",
      name: "EcoRide",
      price: "₹60,000",
      cutedprice: "₹90,000",
      colors: ["Green", "Blue", "Yellow"],
      description: "Eco-friendly and stylish ride with EcoRide.",
      images: {
        Green: "path_to_ecoride_green_image",
        Blue: "path_to_ecoride_blue_image",
        Yellow: "path_to_ecoride_yellow_image",
      },
    },
    // Add more products here
  ];
  
  export default products;
  