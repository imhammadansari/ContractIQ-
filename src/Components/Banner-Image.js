import React from 'react';

const BannerImage = () => {
  return (
    <div
      className="w-full h-[80vh] bg-cover bg-center"
      style={{
        backgroundImage: "url('/banner-01.jpg')",
      }}
    ></div>
  );
};

export default BannerImage;
