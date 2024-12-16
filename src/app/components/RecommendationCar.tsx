"use client";
import { useState } from "react";
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";

const cars = [
  {
    name: "All New Rush",
    type: "SUV",
    image: "/car5.png",
    price: 72,
    oldPrice: 80,
    fuel: "70L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/Car6.png",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: true,
  },
  {
    name: "All New Terios",
    type: "SUV",
    image: "/Car7.png",
    price: 74,
    fuel: "90L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: false,
  },
  {
    name: "CR - V",
    type: "SUV",
    image: "/Car8.png",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: false,
  },
  {
    name: "MGZX Exclusive",
    type: "Hatchback",
    image: "/Car9.png",
    price: 76,
    oldPrice: 80,
    fuel: "70L",
    transmission: "Manual",
    capacity: "4 People",
    isFavorite: true,
  },
  {
    name: "New MGZS",
    type: "SUV",
    image: "/Car10.png",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: false,
  },
  {
    name: "MGZX Excite",
    type: "Hatchback",
    image: "/Car11.png",
    price: 74,
    fuel: "90L",
    transmission: "Manual",
    capacity: "4 People",
    isFavorite: true,
  },
  {
    name: "New MGZS",
    type: "SUV",
    image: "/Car12.png",
    price: 80,
    fuel: "80L",
    transmission: "Manual",
    capacity: "6 People",
    isFavorite: false,
  },
];

const RecommendationCar = () => {
  const [carList, setCarList] = useState(cars);

  const toggleFavorite = (index: number) => {
    const updatedCars = [...carList];
    updatedCars[index].isFavorite = !updatedCars[index].isFavorite;
    setCarList(updatedCars);
  };

  return (
    <section className="p-6 bg-gray-50">
      {/* Section Title */}
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Recommendation Car</h2>
      </div>

      {/* Car Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {carList.map((car, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-lg transition"
          >
            {/* Heart Icon */}
            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-lg font-semibold">{car.name}</h3>
                <p className="text-sm text-gray-500">{car.type}</p>
              </div>
              <button onClick={() => toggleFavorite(index)}>
                {car.isFavorite ? (
                   <FaHeart className="w-6 h-6 text-red-500" />
                ) : (
                    <IoIosHeartEmpty className="w-6 h-6 text-gray-400" />
                )}
              </button>
            </div>

            {/* Car Image */}
            <Image
              src={car.image}
              alt={car.name}
              width={300}
              height={150}
              className="object-contain my-4"
            />

            {/* Car Info */}
            <div className="flex justify-between text-gray-500 text-sm mb-4">
              <div>⛽ {car.fuel}</div>
              <div>⚙️ {car.transmission}</div>
              <div>👤 {car.capacity}</div>
            </div>

            {/* Price & Button */}
            <div className="flex justify-between items-center">
              <div>
                <p className="text-lg font-bold">${car.price}.00/day</p>
                {car.oldPrice && (
                  <p className="text-sm line-through text-gray-400">
                    ${car.oldPrice}.00
                  </p>
                )}
              </div>
              <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
                Rent Now
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Show More Button */}
      <div className="mt-6 flex justify-center">
        <button className="bg-blue-500 text-white px-6 py-2 rounded hover:bg-blue-600 transition">
          Show more car
        </button>
      </div>
    </section>
  );
};

export default RecommendationCar;
