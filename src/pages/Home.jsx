import React, { useState } from 'react';
import FlowerImage from '.././assets/flower.png';
import Flower1Image from '.././assets/1.png';
import Flower2Image from '.././assets/2.png';
import Flower6Image from '.././assets/6.png';

function Home() {
  const [isPopupVisible, setPopupVisible] = useState(false);

  const togglePopup = () => {
    setPopupVisible(!isPopupVisible);
  };

  return (
    <div className="container flex flex-col justify-start p-6 mx-auto sm:py-4 lg:py-4 lg:flex-row lg:justify-between px-20">
      <div className="flex flex-col justify-start p-6  rounded-sm rlg:max-w-md xl:max-w-lg lg:text-left">
      <div className="flex flex-col"> 
        <img src={FlowerImage} alt="FlowerimageHomepage" style={{width: 300, height:400}}/>
      </div>
        <h1 className="text-2xl font-bold p-2">"Flowers... Nature's gift, bringing happiness and beautiful memories"</h1>
        <p className="p-4">Infuse your life with colors and vibrancy with flowers from PRIMEPROUD</p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
        <button className="px-3 py-2 text-lg font-semibold rounded bg-[#0f172a] text-white"
         onClick={() => window.location.href = './About'}>
          About us
        </button>
        </div>
    </div>
    <div className="flex flex-col "> 
     <img src={Flower2Image} alt="FlowerimageHomepage" style={{width: 300, height:500}}/>
    </div>
    <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
        <h1 className="text-2xl font-bold">❝ The Beauty of Flowers  </h1>
        <h2 className="text-2xl font-bold">An Enduring Charm ❞</h2>
        <p className="p-4">
            Flowers are intricately crafted by nature to add color and freshness to our world. Whether it’s wildflowers blooming amidst nature or flowers planted in a backyard garden, each flower possesses a unique beauty that never fails to captivate and enchant those who see it.
        </p>
        <img src={Flower1Image} alt="Flower1imageHomepage" style={{width:300, height:500}}/>
    </div>
    </div>
  );
}



export default Home;
