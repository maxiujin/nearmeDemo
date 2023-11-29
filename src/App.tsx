import React from 'react';
import Navbar from './Components/Navbar';
import Body from './Components/Body';
import Gallery from './Components/Gallery';
import Video from './Components/Video';
import Header from './Components/Header';
import PhoneImage from './Components/PhoneImage';

function App() {
  return (
    <div className="App">
      <Navbar/>

      <Header/>
 

      <div style={{ display: 'flex', flexDirection: 'row' }}>
        <div style={{ flex: 0, marginRight: '20px' }}> {/* Gallery container */}
          <br></br>
         
          
<PhoneImage/>
<br></br>
<Gallery />
          
        </div>
        <div style={{ flex: 1 }}> {/* Body container */}
          <Body />
        </div>
      </div>
      <Video/>
    </div>
  );
}

export default App;
