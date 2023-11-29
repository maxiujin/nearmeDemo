import React from 'react';

const PhoneImage = () => {
  return (
    <div>
    <img 
      src="/phoneImage.png" 
      alt="Phone" 
      style={{
        borderRadius: '10px', // Adjust the border radius as needed
        width:'1000px', // This ensures the image is responsive
        height: '700px' // Maintains the aspect ratio of the image
      }} 
    />
    <br></br>
    <img 
    src="/reviews.png" // Path to your image in the public folder
    alt="reviews" 
    style={{ 
  
        width:'1050px', // This ensures the image is responsive
        height: '300px' 
    }} 
  />
  </div>
  );
};

export default PhoneImage;
