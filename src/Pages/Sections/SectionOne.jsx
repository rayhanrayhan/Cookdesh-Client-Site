import React from "react";

const SectionOne = () => {
  return (
    <div>
      <section>
        <div className="w-full mx-auto py-10 md:w-9/12">
          <div className="grid grid-cols-1 gap-6 md:grid-cols-3 md:gap-4">
            {/* card details  */}
            <div>
              <div className="card card-compact border shadow-xl">
                <p className="text-3xl p-1 font-bold font-serif text-center text-red-800">
                  Fast Food Items
                </p>
                <figure>
                  <img
                    className="w-full p-6 md:h-52 object-cover object-center"
                    src="https://i.ibb.co/P6VhWbk/55.png"
                    alt="Fast Food Items"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">Nova Scotia Canadian Noodles</h2>
                  <p className="p-2">Cooking Method:</p>
                  <ul>
                    <li>
                      1. Rinse the quinoa in a fine mesh strainer under cold
                      water.
                    </li>
                    <li>
                      2. In a medium saucepan, bring the quinoa and water to a
                      boil. Reduce heat to low, cover, and simmer for 15-20
                      minutes, until the water is absorbed and the quinoa is
                      tender.
                    </li>
                    <li>
                      3. In a large bowl, combine the cooked quinoa, kale,
                      parsley, and feta cheese.
                    </li>
                    <li>4. Toss to combine and serve.</li>
                  </ul>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View More</button>
                  </div>
                </div>
              </div>
            </div>
            {/* card details  */}
            <div>
              <div className="card card-compact border shadow-xl">
                <p className="text-3xl p-1 font-bold font-serif text-center text-red-800">
                  Fish Recipes
                </p>
                <figure>
                  <img
                    className="w-full p-6 md:h-52 object-cover object-center"
                    src="https://i.ibb.co/w75PnMy/33.png"
                    alt="Fish Recipes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Grilled Salmon with Citrus Salsa
                  </h2>
                  <p className="p-2">Cooking Method:</p>
                  <ul>
                    <li>
                      1. Rinse the quinoa in a fine mesh strainer under cold
                      water.
                    </li>
                    <li>
                      2. In a medium saucepan, bring the quinoa and water to a
                      boil. Reduce heat to low, cover, and simmer for 15-20
                      minutes, until the water is absorbed and the quinoa is
                      tender.
                    </li>
                    <li>
                      3. In a large bowl, combine the cooked quinoa, kale,
                      parsley, and feta cheese.
                    </li>
                    <li>4. Toss to combine and serve.</li>
                  </ul>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View More</button>
                  </div>
                </div>
              </div>
            </div>

            {/* card details  */}

            <div>
              <div className="card card-compact border shadow-xl">
                <p className="text-3xl p-1 font-bold font-serif text-center text-red-800">
                  Fish Recipes
                </p>
                <figure>
                  <img
                    className="w-full p-6 md:h-52 object-cover object-center"
                    src="https://i.ibb.co/QQc7B6V/11.png"
                    alt="Fish Recipes"
                  />
                </figure>
                <div className="card-body">
                  <h2 className="card-title">
                    Grilled Salmon with Citrus Salsa
                  </h2>
                  <p className="p-2">Cooking Method:</p>
                  <ul>
                    <li>
                      1. Rinse the quinoa in a fine mesh strainer under cold
                      water.
                    </li>
                    <li>
                      2. In a medium saucepan, bring the quinoa and water to a
                      boil. Reduce heat to low, cover, and simmer for 15-20
                      minutes, until the water is absorbed and the quinoa is
                      tender.
                    </li>
                    <li>
                      3. In a large bowl, combine the cooked quinoa, kale,
                      parsley, and feta cheese.
                    </li>
                    <li>4. Toss to combine and serve.</li>
                  </ul>
                  <div className="card-actions justify-end">
                    <button className="btn btn-primary">View More</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SectionOne;
