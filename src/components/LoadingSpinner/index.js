/* eslint-disable react/jsx-fragments */
/* eslint-disable react/self-closing-comp */
/* eslint-disable linebreak-style */
/* eslint-disable react/react-in-jsx-scope */
import React from 'react';

export default function LoadingSpinner() {
  return (
    <>
      <div style={{ display: 'flex', flexDirection: 'column' }}>
        <div className="progress">
          <div className="indeterminate"></div>
        </div>
        <img
          src="https://media.giphy.com/media/fc4CgGnZOktRm/giphy.gif"
          width={200}
          height={110}
          alt="loading-gif"
          style={{ justifyContent: 'center' }}
        />
      </div>
    </>
  );
}
