import React from "react";

const SectionTwo = () => {
  return (
    <section className="   py-16">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap -mx-4">
          {/* card details */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-64 object-cover"
                src="https://i.ibb.co/bWzQLhR/22.png"
                alt="Lobster Salad"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Nova Scotia Lobster Chiken
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Freshly caught lobster, mixed greens, tomatoes, red onion, and
                  a tangy vinaigrette.
                </p>
                <button className="btn btn-primary px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Order now
                </button>
              </div>
            </div>
          </div>
          {/* card details */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-64 object-cover"
                src="https://i.ibb.co/w75PnMy/33.png"
                alt="Grilled Salmon with Citrus Salsa"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Grilled Salmon with Citrus Salsa
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  Freshly grilled salmon with a zesty citrus salsa on top,
                  served with a side of rice and vegetables.
                </p>
                <button className="btn btn-primary px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Order now
                </button>
              </div>
            </div>
          </div>
          {/* card details */}
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
            <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300">
              <img
                className="w-full h-64 object-cover"
                src="https://i.ibb.co/QQc7B6V/11.png"
                alt="Quinoa and Kale Salad"
              />
              <div className="p-6">
                <h2 className="text-2xl font-bold mb-2">
                  Quinoa and Kale Salad
                </h2>
                <p className="text-gray-700 leading-relaxed mb-4">
                  A refreshing salad with quinoa, kale, parsley, and feta
                  cheese, dressed with a light vinaigrette.
                </p>
                <button className="btn btn-primary px-4 py-2 rounded-full transition-colors duration-300 hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                  Order now
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SectionTwo;
