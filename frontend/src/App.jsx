import React from 'react';

import './App.scss';
import photos from "mocks/photos";
import topics from "mocks/topics";

import HomeRoute from 'components/HomeRoute';
// const photoArr = new Array(3).fill(sampleDataForPhotoListItem)

// Note: Rendering a single component to build components in isolation
const App = () => {
  return (
    <div className="App">
      {/* {photoArr.map((photo, index) => {
        return <>
          <PhotoListItem key={index} photo={photo} />
        </>
      }
      )} */}
      <HomeRoute photos={photos} topics={topics}/>
    </div>
  );
};

export default App;
