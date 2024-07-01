import React, { useState } from 'react';
import PostcardImage from '.././assets/8.png';
import CardImage from '.././assets/FlowerCard.jpg';
import Flower7Image from '.././assets/7.png';

function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between px-20">
      <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
      <div className="flex flex-col"> 
        <img src={Flower7Image} alt="FlowerimageHomepage" style={{width: 250, height:250}}/>
      </div>
      <h1 className="text-2xl font-bold p-2">"Flowers... Nature's gift, bringing happiness and beautiful memories"</h1>
      <p className="p-4">Infuse your life with colors and vibrancy with flowers from PRIMEPROUD</p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <button
            className="px-8 py-3 text-lg font-semibold rounded bg-pink-600 text-white hover:bg-pink-600"
            onClick={togglePopup}
          >
            Show Letter
          </button>
        </div>
      </div>
      <div className="flex justify-center items-center">
        <img src={PostcardImage} alt="homepage" style={{ width: '700px', height: '500px' }} />
      </div>
      {isPopupVisible && (
        <div className="popup fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="relative p-6 bg-white rounded shadow-lg text-center">
            <button
              className="absolute -top-4 -right-4 px-2  text-lg font-semibold rounded bg-gray-200 text-gray-700"
              onClick={togglePopup}
            >
              ✕
            </button>
            <img src={CardImage} alt="homepage" style={{ width: '500px', height: '350px' }} />
          </div>
        </div>
      )}
    </div>
  );
}

export default Home;

