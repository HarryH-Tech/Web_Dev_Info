import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LoadingSpinner from '../utils/LoadingSpinner';
import Error from '../utils/Error';

export default function Javascript() {
  const [data, setData] = useState();
  const [errorMessage, setErrorMessage] = useState();
  const [loading, setLoading] = useState(false);

  function fetchData() {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL_GET_JAVASCRIPT_INFO)
      .then((res) => {
        console.log(res.data);
        setLoading(false);
        setData(res.data);
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  }

  useEffect(() => {
    console.log(process.env.REACT_APP_API_URL_GET_JAVASCRIPT_INFO);
    fetchData();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {data && (
        <>
          <h1 className="text-center font-bold text-3xl underline mb-1">
            Javascript
          </h1>
          <div className="text-justify w-4/5 m-auto text-last-center mb-3">
            {data.body.data_types_information}
          </div>

          <div>
            <table className="text-center table-auto  border-2 border-rose-100 mb-3  m-auto mb-32  w-10/12">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center underline" colSpan="3">
                    JAVASCRIPT DATA TYPES AND STRUCTURES
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Name</th>
                  <th>Description</th>
                  <th>Learn More</th>
                </tr>
                {data.body.data_structures_and_types ? (
                  data.body.data_structures_and_types.map((dataType) => (
                    <tr className=" border-2 border-rose-100">
                      <td className="p-1 font-bold">{dataType.name}</td>
                      <td className="p-2 text-justify text-last-center">
                        {dataType.information}
                      </td>
                      <td className="p-1">
                        <a
                          className="text-blue-400 hover:text-blue-600 hover:underline"
                          href={dataType.mdn}
                          target="_blank"
                          rel="noreferrer"
                        >
                          Mozilla Web Docs
                        </a>
                      </td>
                    </tr>
                  ))
                ) : (
                  <Error
                    errorMessage={
                      "Sorry, we're unable to display this data right now, please try again later."
                    }
                  />
                )}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}
