import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';

function AWS() {
  const [data, setData] = useState();

  useEffect(() => {
    axios.get(process.env.REACT_APP_API_URL_GET_AWS_INFO).then((res) => {
      setData(res.data.body);
      console.log(res.data.body);
    });
  }, []);
  return (
    <>
      <h1 className="text-center text-3xl font-bold underline mb-4">
        Amazon Web Services
      </h1>
      {data && (
        <>
          <div className="text-justify m-auto text-last-center p-3">
            <p>{data.information}</p>
          </div>
          <div>
            <table className="aws-table text-center table-fixed  border-2 border-rose-100">
              <thead>
                <tr>
                  <th className="px-4 py-2 text-center underline" colspan="3">
                    AWS PRODUCTS
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="table-row">
                  <th>Product</th>
                  <th>Description</th>
                  <th>Learn More</th>
                </tr>

                {data.products &&
                  data.products.map((product) => {
                    return (
                      <>
                        <tr className="table-row">
                          <td className="font-bold p-3">{product.name}</td>
                          <td className="aws-product-description text-justify text-last-center">
                            {product.description}
                          </td>
                          <td>
                            {product.learn_more &&
                              product.learn_more.map((item) => {
                                return (
                                  <div>
                                    <p>
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
                                    </p>
                                    <p>
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
                                    </p>
                                  </div>
                                );
                              })}
                          </td>
                        </tr>
                      </>
                    );
                  })}
              </tbody>
            </table>
          </div>
        </>
      )}
    </>
  );
}

export default AWS;
