import React from 'react';
import { Card } from '@mui/material';

const Video = () => {
  return (
    <Card
      sx={{
        maxWidth: 2160, // Adjust the width as needed
        borderRadius: '10px', // Rounded corners
        borderColor: '#784BC8', // Border color
        borderWidth: '2px',
        borderStyle: 'solid',
        overflow: 'hidden', // Ensures the video corners are also rounded
      }}
    >
      <video
        width="100%"
        height="auto"
        controls
        autoPlay
        loop
        muted // This is often required for autoplay to work in most browsers
        src="https://nearme-images.s3.ap-northeast-1.amazonaws.com/assets/airport-shuttle/nearme_shuttle_v2.0.mp4"
      >
        Your browser does not support the video tag.
      </video>
    </Card>
  );
};

export default Video;



// BLACK BACKGROUND 


// import React from 'react';

// const Video = () => {
//   return (
//     <div style={{
//       width: '100%', // Full width of the screen
//       backgroundColor: 'black', // Black background
//       display: 'flex',
//       justifyContent: 'center', // Center the video horizontally
//       alignItems: 'center', // Center the video vertically
//       padding: '20px 0' // Optional: Adds some vertical padding
//     }}>
//       <video
//         width="600" // Adjust the width as needed
//         height="auto"
//         controls
//         autoPlay
//         muted // Necessary for autoplay in most browsers
//         style={{
//           borderRadius: '10px', // Rounded corners
//           maxWidth: '100%', // Ensures responsiveness
//         }}
//         src="https://nearme-images.s3.ap-northeast-1.amazonaws.com/assets/airport-shuttle/nearme_shuttle_v2.0.mp4"
//       >
//         Your browser does not support the video tag.
//       </video>
//     </div>
//   );
// };

// export default Video;
