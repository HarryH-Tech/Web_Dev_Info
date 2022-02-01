import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

import LoadingSpinner from '../utils/LoadingSpinner';
import Error from '../utils/Error';

function AWS() {
  const [data, setData] = useState();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function fetchData() {
    setLoading(true);
    axios
      .get(process.env.REACT_APP_API_URL_GET_AWS_INFO)
      .then((res) => {
        if (errorMessage) setErrorMessage('');
        setLoading(false);
        setData(res.data.body);
        console.log(res.data.body);
      })
      .catch(() => {
        setErrorMessage(
          "Sorry, we're unable to display this data right now, please try again later."
        );
      });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      {loading && <LoadingSpinner />}
      {errorMessage && <Error errorMessage={errorMessage} />}
      {data ? (
        <>
          <h1 className="text-center text-3xl font-bold underline mb-4">
            Amazon Web Services
          </h1>
          <div className="text-justify w-4/5 m-auto text-last-center mb-3">
            <p>{data.information}</p>
          </div>
          <div className="overflow-auto">
            <table className="text-center table-auto  border-2 border-rose-100  m-3 mb-32 ">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center underline" colSpan="3">
                    AWS PRODUCTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Product</th>
                  <th>Description</th>
                  <th>
                    <a
                      href="https://www.amazon.science/"
                      target="_blank"
                      rel="noreferrer"
                      className="text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      Learn More
                    </a>
                  </th>
                </tr>

                {data.products &&
                  data.products.map((product) => (
                    <>
                      <tr className=" border-2 border-rose-100">
                        <td className="p-2 font-bold w-6">{product.name}</td>
                        <td className="p-2 text-justify text-last-center">
                          {product.description}
                        </td>
                        <td className="p-2">
                          {product.learn_more.map((item) => (
                            <>
                              {item.wiki && (
                                <a
                                  className="text-blue-400 hover:text-blue-600 hover:underline"
                                  href={item.wiki}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Wikipedia
                                </a>
                              )}
                              <br />
                              {item.docs && (
                                <a
                                  className="text-blue-400 hover:text-blue-600 hover:underline"
                                  href={item.docs}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Documentation
                                </a>
                              )}
                              <br />
                              {item.docs && (
                                <a
                                  className="text-blue-400 hover:text-blue-600 hover:underline"
                                  href={item.youtube_tutorial}
                                  target="_blank"
                                  rel="noreferrer"
                                >
                                  Youtube Tutorial
                                </a>
                              )}
                            </>
                          ))}
                        </td>
                      </tr>
                    </>
                  ))}
              </tbody>
            </table>
          </div>
        </>
      ) : (
        setErrorMessage(
          'Sorry, this data is not available at the moment. Please try again later.'
        )
      )}
    </>
  );
}

export default AWS;
