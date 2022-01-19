import React from 'react';

export default function Error({ errorMessage }) {
  return (
    <div className="flex m-4 p-3 space-x-4">
      <div className="w-30 border-2 border-rose-600  p-2 text-center m-auto rounded-2xl bg-red-100">
        {errorMessage}
      </div>
    </div>
  );
}
