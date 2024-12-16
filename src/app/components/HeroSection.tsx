const HeroSection = () => {
    return (
      <section className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 md:px-8 py-8">
        {/* First Card */}
        <div className="bg-blue-100 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              The Best Platform for Car Rental
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Ease of doing car rental safely and reliably 
            </p>
            <p className="text-gray-600 text-sm mb-4">
              Of course at a low price.
            </p>
            <button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
              Rental Car
            </button>
          </div>
          {/* Placeholder for Image */}
          <img
             src="/image 7.png" 
             alt="Profile"
             width={350}
             height={108}
            />
          
        
        </div>
  
        {/* Second Card */}
        <div className="bg-blue-200 p-6 rounded-lg shadow-lg flex flex-col justify-between">
          <div>
            <h2 className="text-2xl font-semibold mb-2 text-gray-800">
              Easy way to rent a car at a low price
            </h2>
            <p className="text-gray-600 text-sm mb-4">
              Providing cheap car rental services and safe and comfortable facilities.
            </p>
            <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-500 transition">
              Rental Car
            </button>
          </div>
          {/* Placeholder for Image */}
          <img
             src="/image 8.png" 
             alt="Profile"
             width={406}
             height={118}
            />
         
         </div> 
      </section>
    );
  };
  
  export default HeroSection;
  