import React, { useEffect, useState } from 'react';

import axios from 'axios';

export default function DataStructures() {
  const [data, setData] = useState();

  function fetchData() {
    axios
      .get(process.env.REACT_APP_API_URL_GET_DATA_STRUCTURES_INFO)
      .then((res) => {
        console.log(res.data);
        setData(res.data);
      });
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL_GET_DATA_STRUCTURES_INFO);
    fetchData();
  }, []);

  return (
    <>
      <div>
        {data && <div className="">{data.body.arrays.information}</div>}
      </div>
    </>
  );
}
