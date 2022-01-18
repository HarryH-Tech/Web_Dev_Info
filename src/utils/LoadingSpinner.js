import React from 'react';

import spinner from './LoadingSpinner.gif';

export default function LoadingSpinner() {
  return (
    <img
      src={spinner}
      alt="Loading..."
      style={{ width: '40%', margin: '5rem auto' }}
    />
  );
}
