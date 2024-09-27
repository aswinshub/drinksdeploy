import React, { useEffect, useState } from "react";
import axios from "axios";
import Navbar from "../components/Navbar";
import Footer from "../components/footer";

const Drinks = () => {
  const [drinks, setDrinks] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchDrinks = async () => {
      try {
        const response = await axios.get("http://localhost:5000/drinks");
        setDrinks(response.data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchDrinks();
  }, []);

  return (
    <div className="relative ">
      <Navbar /> 
      <div
        className="w-full h-[311px] bg-cover bg-center"
        style={{ backgroundImage: 'url("/src/assets/banner.png")' }}
      >
        <div className="text-white p-4 text-center">
          <h1
            className="mb-2 mt-8 text-4xl md:text-8xl font-bold dark:text-white font-oswald tracking-wide"
            style={{ textShadow: "4px 2px 4px #800020" }}
          >
            MENU
          </h1>
          <p className="font-kelly-slab">
            Please take a look at our menu featuring food, drinks, and brunch.
            If you'd like to <br /> place an order, use the "Order Online"
            button located below the menu.
          </p>
        </div>
      </div>

      <div
        className="w-full h-[79px] bg-cover bg-center flex items-center justify-center"
        style={{ backgroundImage: 'url("/src/assets/fdb.png")' }}
      >
        <div className="flex space-x-4">
          <button className="bg-black hover:bg-blue-500 text-white font-semibold py-3 px-4 border border-blue-500 hover:border-transparent">
            FOOD
          </button>
          <button className="bg-black bg-blue-500 text-white font-semibold py-3 px-4 border border-blue-500">
            DRINKS
          </button>
          <button className="bg-black hover:bg-blue-500 text-white font-semibold py-3 px-4 border border-blue-500 hover:border-transparent">
            BRUNCH
          </button>
        </div>
      </div>

      <div
        className="relative w-full bg-cover bg-center flex justify-center items-center"
        style={{ backgroundImage: 'url("/src/assets/body.png")' }}
      >
        <img
          src="src/assets/frame.png"
          alt="drink"
          className="absolute top-[-30] left-[-1px] "
        />
        <img
          src="src/assets/frame2.png"
          alt="drink"
          className="absolute top-[-30] right-[-1px]  "
        />

        <div className="flex flex-col items-center mt-20 space-y-20">
          <div className="relative w-full max-w-[1140px] bg-transparent border border-white p-5">
            <img
              src="src/assets/drink.png"
              alt="drink"
              className="absolute top-[50px] left-[30px] size-20 sm:top-[-100px] sm:size-44 sm:left-[-100px]  "
            />


<img
              src="src/assets/cocktail.png"
              alt="drink"
              className="absolute top-[50px] right-[30px] size-20 sm:top-[-100px] sm:size-44 sm:right-[-100px] "
            />


          
            <h1
              className="mb-2 mt-8 text-3xl md:text-4xl font-bold dark:text-white font-oswald text-center tracking-widest"
              style={{ textShadow: "4px 2px 4px #800020" }}
            >
              DRINKS
            </h1>
            <div className="divider">Default</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {drinks.map((drink) => (
                <div
                  key={drink._id}
                  className="p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-white font-oswald">
                    {drink.name}{" "}
                    <span className="float-right">{`$${drink.price}`}</span>
                  </h2>
                  <p className="text-gray-600 font-kelly-slab">
                    {drink.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full max-w-[1140px] bg-transparent border border-white p-5">
         

<img
              src="src/assets/lime.png"
              alt="drink"
              className="absolute top-[20px] left-[30px] size-20 sm:top-[-150px] sm:size-60 sm:left-[-80px]  "
            />



<img
              src="src/assets/lime 2.png"
              alt="drink"
              className="absolute top-[20px] right-[30px] size-20 sm:top-[350px] sm:size-60 sm:right-[-100px] "
            />

            <h1
              className="mb-2 mt-8 text-3xl md:text-4xl font-bold dark:text-white font-oswald text-center tracking-widest"
              style={{ textShadow: "4px 2px 4px #800020" }}
            >
              BRUNCH COCKTAILS
            </h1>
            <div className="divider">Default</div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              {drinks.map((drink) => (
                <div
                  key={drink._id}
                  className="p-4 hover:shadow-lg transition-shadow duration-200"
                >
                  <h2 className="text-xl md:text-2xl font-semibold text-white font-oswald">
                    {drink.name}{" "}
                    <span className="float-right">{`$${drink.price}`}</span>
                  </h2>
                  <p className="text-gray-600 font-kelly-slab">
                    {drink.description}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full max-w-[1140px] bg-transparent border border-white p-5">
  <div className="flex flex-col items-center">
    <img
      src="src/assets/hookah.png"
      alt="Hookah Logo"
      className="h-[100px] w-[100px]"
    />
  </div>

  <h1
    className="mb-2 mt-8 text-3xl md:text-4xl font-bold dark:text-white font-oswald text-center tracking-widest"
    style={{ textShadow: "4px 2px 4px #800020" }}
  >
    HOOKAH FLAVORS
  </h1>

  <div className="divider">Default</div>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
    {drinks.map((drink) => (
      <div
        key={drink._id}
        className="p-4 hover:shadow-lg transition-shadow duration-200"
      >
        <h2 className="text-xl md:text-2xl font-semibold text-white font-oswald">
          {drink.name}{" "}
          <span className="float-right">{`$${drink.price}`}</span>
        </h2>
        <p className="text-gray-600 font-kelly-slab">
          {drink.description}
        </p>
      </div>
    ))}
  </div>
</div>


          <button className=" bg-blue-500 hover:bg-transparent text-white font-semibold py-3 px-4 border border-blue-500">
            ORDER ONLINE
          </button>

          {/* sectionnnnn---------------- */}

          <div className="bg-[#C5A059]  	 w-full max-w-[1140px]  font-kelly-slab text-white flex justify-center items-center flex-col md:flex-row">
            <div className="flex-1 px-4 py-2">
              {" "}
              <p>
                Food may not be refunded. If your food was made incorrectly we
                will remake it for you.{" "}
              </p>
            </div>
            <div className="w-1 md:w-2 px-2 bg-black"></div>
            <div className="flex-1 px-4 py-2">
              {" "}
              <p>18% service charge will be added to all checks over $100.</p>
            </div>
            <div className="w-1 md:w-2 px-2 bg-black"></div>
            <div className="flex-1 px-4 py-2">
              {" "}
              <p>
                Consuming raw or undercooked meats, poultry, seafood, shellfish
                or eggs may increase your risk of foodborne illness
              </p>
            </div>
          </div>

          {/* end of section-------------    */}

          {/* contact sectionnn start -------------- */}

          <div className="grid grid-cols-1  lg:grid-cols-3 gap-4 pb-10">
            <div className="border w-full h-[134px] rounded-md border-gray-50 p-5 mx-auto">
              <p className="text-sky-600 text-center font-semibold mb-4">
                CONNECT WITH US
              </p>

              <div className="flex items-center justify-center space-x-2">
                <img
                  src="src/assets/phone.png"
                  alt="Phone Logo"
                  className="h-[20px] w-[20px]"
                />
                <span className="text-neutral-500 font-semibold">
                  +1 470-788-8255
                </span>
              </div>

              <div className="flex items-center justify-center space-x-2 mt-2">
                <img
                  src="src/assets/mail.png"
                  alt="Mail Logo"
                  className="h-[20px] w-[20px]"
                />
                <span className="text-neutral-500 font-semibold">
                  email@42barandgrill.com
                </span>
              </div>
            </div>

            {/* -----------end-------------- */}

            <div className="relative w-full h-[134px] border rounded-md border-gray-50">
              <img
                src="src/assets/logo.png"
                alt="Logo"
                className="absolute top-[-20px] left-1/2 transform -translate-x-1/2 h-[40px] w-[40px]"
              />

              {/* Content inside the border */}
              <div className="flex flex-col items-center space-y-2 mt-12">
                <div className="flex items-center justify-center space-x-2">
                  <span className="text-blue-500 font-semibold text-xl font-oswald">
                    DEP
                  </span>
                  <span className="text-white font-semibold text-xl font-oswald">
                    NET
                  </span>
                  <span className="text-neutral-500 font-semibold text-xl font-oswald">
                    SOFT
                  </span>
                </div>

                <div className="flex justify-center space-x-2 w-full">
                  <img src="src/assets/fb.png" className="h-[15px] w-[15px]" />
                  <img
                    src="src/assets/twitter.png"
                    className="h-[15px] w-[15px]"
                  />
                  <img
                    src="src/assets/youtube.png"
                    className="h-[15px] w-[15px]"
                  />
                  <img
                    src="src/assets/insta.png"
                    className="h-[15px] w-[15px]"
                  />
                </div>
              </div>
            </div>

            {/* ------------------------------ */}
            <div className="border w-full h-[134px] rounded-md border-gray-50">
              <div className="flex flex-col items-center justify-center text-center h-full">
                <p className="text-sky-600 font-semibold mb-4">FIND US</p>

                <div className="flex items-center justify-center space-x-2 space-y-3">
                  <img
                    src="src/assets/location.png"
                    alt="Location Logo"
                    className="h-[20px] w-[20px]"
                  />
                  <span className="text-neutral-500 font-semibold">
                    327 Memorial Dr SE, Atlanta,
                    <br />
                    GA 30312, USA
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Drinks;
