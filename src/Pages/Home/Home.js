import React, { useState } from 'react';
import Header from '../../Components/Header/Header';

const Home = () => {
  const [selectedTab, setSelectedTab] = useState("Art");

  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <>
      <div className="min-h-screen text-white bg-black">
        <Header />

        <section className="container flex flex-col-reverse items-center px-6 py-12 mx-auto md:flex-row">
          <div className="w-full text-center md:w-1/2 md:text-left px-7">
            <h1 className="mb-4 font-extrabold leading-tight text-4xl md:text-6xl lg:text-7xl">
              Discover <br></br> Collect, & Sell{' '}
              <p className="bg-gradient-to-r from-purple-700 via-purple-300 to-purple-50 bg-clip-text text-transparent">
                Extraordinary
              </p> NFTs
            </h1>
            <p className=" mt-6 mb-6 text-2xl text-gray-400 md:max-w-xl">
              The Leading NFT Marketplace On Ethereum. Home To The Next Generation
              Of Digital Creators. Discover The Best NFT Collections.
            </p>
            <div className="flex justify-center space-x-4 md:justify-start">
              <button className="px-14 py-3 text-white bg-purple-500 rounded-full hover:bg-purple-600">
                Explore
              </button>
              <button className="px-14 py-3 text-white border border-gray-500 rounded-full hover:bg-gray-800">
                Create
              </button>
            </div>
          </div>

          <div className="flex flex-col items-center w-full mb-8 md:w-1/2 md:mb-0">
            <div className="relative">
              <img
                src="/images/img1.jpg"
                alt="NFT"
                className="rounded-lg shadow-lg"
              />
              <div className="absolute px-4 py-2 text-sm rounded-lg bottom-4 left-4 bg-black/70">
                <p className="text-gray-400">Total ETH</p>
                <p className="font-bold text-white">12.35 ETH</p>
              </div>
            </div>
            <div className="mt-10 flex justify-around w-full text-gray-400">
              <div>
                <p className="text-2xl font-bold text-white">432K+</p>
                <p>Collections</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">200K+</p>
                <p>Artists</p>
              </div>
              <div>
                <p className="text-2xl font-bold text-white">10K+</p>
                <p>Community</p>
              </div>
            </div>
          </div>
        </section>

      </div>

      {/* Section 2 */}
      <div className="relative w-full py-12 overflow-hidden bg-black">
        {/* Subtle overlay for differentiation */}
        <div className="absolute inset-0">
          <div className="opacity-75 bg-gradient-to-b from-black via-gray-800 to-black"></div>
          <svg
            className="w-full h-full"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            viewBox="0 0 1200 120"
          >
            <path
              fill="rgba(255, 255, 255, 0.05)"
              d="M0,96L48,85.3C96,75,192,53,288,74.7C384,96,480,160,576,186.7C672,213,768,203,864,181.3C960,160,1056,128,1152,117.3C1248,107,1344,117,1392,122.7L1440,128L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative z-10 max-w-6xl px-4 mx-auto">
          <div className="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-3">
            <div className="flex items-center space-x-2 text-white">
              <img src="/images/logo1-removebg-preview.png" alt="Metamask" className="w-10" />
              <p className="text-xl font-semibold">METAMASK</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src="/images/logo2.jpg" alt="Trust Wallet" className="w-10" />
              <p className="text-xl font-semibold">Trust Wallet</p>
            </div>
            <div className="flex items-center space-x-2 text-white">
              <img src="/images/logo3-removebg-preview.png" alt="WalletConnect" className="w-10" />
              <p className="text-xl font-semibold">WalletConnect</p>
            </div>
          </div>

          {/* Second Row: 2 Items Centered with Extra Spacing */}
          <div className="grid grid-cols-1 gap-3 justify-items-center md:grid-cols-3 mt-11 mb-7">
            <div className="md:col-span-3 md:flex md:justify-center md:space-x-52">
              <div className="flex items-center space-x-2 text-white">
                <img src="/images/logo4.jpg" alt="Exodus" className="w-10" />
                <p className="text-xl font-semibold">EXODUS</p>
              </div>
              <div className="flex items-center space-x-2 text-white">
                <img src="/images/logo5.png" alt="SafePal" className="w-10" />
                <p className="text-xl font-semibold">SafePal</p>
              </div>
            </div>
          </div>
        </div>
      </div>


      {/* Section 3 */}
      <div className="min-h-screen px-4 py-12 text-white bg-black">
        {/* Header */}
        <div className="mb-8 text-center">
          <h1 className="text-3xl font-extrabold bg-gradient-to-r from-purple-700 via-purple-300 to-purple-50 bg-clip-text text-transparent md:text-4xl lg:text-5xl">
            Top Collections
          </h1>

        </div>

        {/* Tabs */}
        <div className="grid grid-cols-2 gap-4 mb-12 sm:grid-cols-3 lg:flex lg:justify-center">
          {
            ["Art", "Collectibles", "Metaverse", "Virtual Worlds", "Sports", "Music"].map(
              (tab, index) => (
                <button
                  key={index}
                  className={`px-12 py-2 text-sm font-semibold transition duration-200 border rounded-full sm:text-base lg:text-lg  ${selectedTab === tab
                    ? "text-white border-purple-500  bg-purple-500"
                    : "text-gray-300 border-gray-500 hover:text-purple-500 hover:border-purple-500"
                    }`}
                  onClick={() => handleTabClick(tab)}
                >
                  {tab}
                </button>
              )
            )
          }
        </div>

        <div className="grid grid-cols-1 gap-6 mx-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 lg:mx-16">
          {[
            {
              title: "COOLGUYZZ",
              image: "/images/img1.jpg", // Replace with actual image path
              floorPrice: "1.5 ETH",
              priceUSD: "$2045.12",
              change: "-12.4%",
              isPositive: false,
            },
            {
              title: "gangstaboi v.1",
              image: "/images/top1.jpg", // Replace with actual image path
              floorPrice: "2.53 ETH",
              priceUSD: "$4487",
              change: "+34.5%",
              isPositive: true,
            },
            {
              title: "HyperApe",
              image: "/images/top2.jpg", // Replace with actual image path
              floorPrice: "1.31 ETH",
              priceUSD: "$1734.4",
              change: "-5.0%",
              isPositive: false,
            },
            {
              title: "LyoddS1",
              image: "/images/top3.jpg", // Replace with actual image path
              floorPrice: "1.56 ETH",
              priceUSD: "$1670",
              change: "+12.4%",
              isPositive: true,
            },
            {
              title: "Azuki 3D",
              image: "/images/top4.jpg", // Replace with actual image path
              floorPrice: "1.5 ETH",
              priceUSD: "$1807",
              change: "+1.6%",
              isPositive: true,
            },
            {
              title: "CuteApe White",
              image: "/images/top5.jpg", // Replace with actual image path
              floorPrice: "0.045 ETH",
              priceUSD: "$245.6",
              change: "-6.5%",
              isPositive: false,
            },
            {
              title: "SneakerHead Vol.1",
              image: "/images/top6.jpg", // Replace with actual image path
              floorPrice: "1.4 ETH",
              priceUSD: "$1790",
              change: "+9.7%",
              isPositive: true,
            },
            {
              title: "cvltB3AR",
              image: "/images/top2.jpg", // Replace with actual image path
              floorPrice: "0.88 ETH",
              priceUSD: "$545",
              change: "+4.5%",
              isPositive: true,
            },
          ].map((item, index) => (
            <div
              key={index}
              className="max-w-xs p-4 mx-auto transition-shadow duration-300 transform bg-gray-900 shadow-lg rounded-xl hover:shadow-2xl hover:scale-105"
            >
              <div className="relative overflow-hidden rounded-lg">
                <img
                  src={item.image}
                  alt={item.title}
                  className="object-cover w-full h-48 transition-transform duration-300 ease-in-out hover:scale-110"
                />
              </div>
              <h3 className="mt-4 mb-2 text-lg font-bold">{item.title}</h3>
              <p className="mb-1 text-sm text-gray-400">Floor Price</p>
              <p className="mb-2 text-xl font-semibold">{item.floorPrice}</p>
              <div className="flex items-center justify-between">
                <p className="text-gray-400">{item.priceUSD}</p>
                <p
                  className={`text-sm font-semibold ${item.isPositive ? "text-green-500" : "text-red-500"
                    }`}
                >
                  {item.change}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Load More Button */}
        <div className="flex justify-center mt-12">
          <button className="px-12 py-3 text-lg font-semibold border border-gray-500 rounded-full hover:bg-purple-600">
            See More
          </button>
        </div>
      </div>

      {/* Section 4 */}
      <div className="flex items-center justify-center h-full px-4 bg-black lg:px-4">
        {/* Main Container */}
        <div className="flex flex-col items-center bg-gray-900  w-full max-w-6xl px-6 py-12 space-y-8 shadow-xl rounded-2xl lg:px-12 lg:py-16 lg:flex-row lg:space-y-0 lg:space-x-12"
        >
          {/* Text Section */}
          <div className="text-center lg:text-left lg:w-1/2">
            <h2
              className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-700 via-purple-300 to-purple-50 lg:text-4xl">
              Start Selling Now
            </h2>
            <p className="mt-4 text-sm text-gray-300 lg:text-base">
              Once you've set up your wallet of choice, connect it to OpenSea by
              clicking the wallet icon in the top right corner. Learn about the wallets we support.

            </p>
            <button className="px-5 py-1 mt-6 text-sm font-semibold text-white transition bg-purple-500 rounded-full shadow-lg hover:bg-purple-600 lg:px-6 lg:py-2 lg:text-lg">
              Enter Marketplace
            </button>
          </div>

          {/* Image Section */}
          <div className="relative flex justify-center lg:w-1/2">
            <img
              src="/images/top1.jpg"
              alt="Main"
              className="w-full max-w-xs rounded-lg shadow-lg lg:max-w-sm"
            />
            <img
              src="/images/top2.jpg"
              alt="Overlay 1"
              className="absolute w-1/2 max-w-xs rounded-lg shadow-lg opacity-75 top-4 left-8 lg:w-2/5 lg:left-10 lg:top-6"
            />
            <img
              src="/images/top3.jpg"
              alt="Overlay 2"
              className="absolute w-1/2 max-w-xs rounded-lg shadow-lg opacity-50 bottom-4 right-8 lg:w-2/5 lg:right-10 lg:bottom-6"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
