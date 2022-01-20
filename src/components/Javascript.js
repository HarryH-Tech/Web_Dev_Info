import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LoadingSpinner from '../utils/LoadingSpinner';

export default function Javascript() {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    axios.get(process.env.REACT_APP_API_URL_GET_JAVASCRIPT_INFO).then((res) => {
      console.log(res.data);
      setLoading(false);
      setData(res.data);
    });
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL_GET_JAVASCRIPT_INFO);
    fetchData();
  }, []);

  return (
    <>
      <div>
        {loading && <LoadingSpinner />}
        {data && (
          <>
            <h1 className="text-center font-bold text-2xl underline">
              Javascript
            </h1>
            <div className="text-justify w-4/5 m-auto text-last-center">
              {data.body.data_type_information}
            </div>
          </>
        )}
      </div>
    </>
  );
}
