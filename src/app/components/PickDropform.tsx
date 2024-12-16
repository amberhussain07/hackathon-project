

const PickDropform = () => {
  return (
    <div className="flex items-center justify-center gap-6 p-6 bg-gray-50">
      {/* Pick-Up Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-600 font-semibold mb-4">🔵 Pick-Up</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="font-semibold">Locations</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Date</label>
            <input type="date" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="font-semibold">Time</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>

      {/* Swap Icon */}
      <div className="flex items-center justify-center">
        <button className="bg-blue-500 text-white p-4 rounded-full shadow-lg hover:bg-blue-600">
          <img src="/Switch.png" className="w-6 h-6" />
        </button>
      </div>

      {/* Drop-Off Section */}
      <div className="flex-1 bg-white p-6 rounded-lg shadow-md">
        <h3 className="text-blue-600 font-semibold mb-4">🔵 Drop-Off</h3>
        <div className="grid grid-cols-3 gap-4">
          <div>
            <label className="font-semibold">Locations</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select your city</option>
            </select>
          </div>
          <div>
            <label className="font-semibold">Date</label>
            <input type="date" className="w-full p-2 border rounded mt-1" />
          </div>
          <div>
            <label className="font-semibold">Time</label>
            <select className="w-full p-2 border rounded mt-1">
              <option>Select your time</option>
            </select>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PickDropform;
