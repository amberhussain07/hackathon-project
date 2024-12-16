"use client"
import { IoIosHeartEmpty } from "react-icons/io";
import { FaHeart } from "react-icons/fa";
import Image from "next/image";
import { useState } from "react";

const cars = [
  {
    name: "Koenigsegg",
    type: "Sport",
    image: "/car1.png",
    price: 99,
    fuel: "90L",
    transmission: "Manual",
    seats: "2 People",
    isFavorite: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/car2.png",
    price: 80,
    oldPrice: 100,
    fuel: "80L",
    transmission: "Manual",
    seats: "2 People",
    isFavorite: false,
  },
  {
    name: "Rolls – Royce",
    type: "Sedan",
    image: "/Car3.png",
    price: 96,
    fuel: "70L",
    transmission: "Manual",
    seats: "4 People",
    isFavorite: true,
  },
  {
    name: "Nissan GT - R",
    type: "Sport",
    image: "/Car4.png",
    price: 80,
    oldPrice: 100,
    fuel: "80L",
    transmission: "Manual",
    seats: "2 People",
    isFavorite: false,
  },
];

const PopularCar= () => {
  const [favoriteCars, setFavoriteCars] = useState(cars);

  const toggleFavorite = (index: number) => {
    const updatedCars = [...favoriteCars];
    updatedCars[index].isFavorite = !updatedCars[index].isFavorite;
    setFavoriteCars(updatedCars);
  };

  return (
    <section className="p-6">
      {/* Header */}
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-xl font-bold">Popular Car</h2>
        <a href="#" className="text-blue-500 hover:underline">
          View All
        </a>
      </div>

      {/* Car Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {favoriteCars.map((car, index) => (
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
                  <FaHeart  className="w-6 h-6 text-red-500" />
                ) : (
                 <IoIosHeartEmpty  className="w-6 h-6 text-gray-400" />
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
              <div>
                <span>⛽ {car.fuel}</span>
              </div>
              <div>
                <span>⚙️ {car.transmission}</span>
              </div>
              <div>
                <span>👤 {car.seats}</span>
              </div>
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
    </section>
  );
};

export default PopularCar;
