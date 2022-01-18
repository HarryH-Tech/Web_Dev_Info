import React, { useEffect, useState } from 'react';
import axios from 'axios';
import '../styles/main.css';
import LoadingSpinner from '../utils/LoadingSpinner';

function Frameworks() {
  const [framework, setFramework] = useState('');
  const [data, setData] = useState('');

  const [loading, setLoading] = useState(false);

  const params = { framework };

  const fetchData = (selectedFramework) => {
    setData('');
    setLoading(true);
    params.framework = selectedFramework || 'react';
    axios
      .post(process.env.REACT_APP_API_URL_GET_FRAMEWORKS, params)
      .then((res) => {
        setData(res.data);
        setLoading(false);
        console.log(res.data);
      });
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="mb-10">
        <header className="bg-white shadow flex justify-center">
          <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold text-gray-900">Frameworks</h1>
            <br />
            <select onChange={(e) => fetchData(e.target.value.toLowerCase())}>
              <option>React</option>
              <option>Angular</option>
              <option>Vue</option>
              <option>Svelte</option>
              <option>Node</option>
            </select>
          </div>
        </header>
        {loading && <LoadingSpinner />}
        {data && (
          <>
            <h2 className="text-3xl text-center font-bold underline mb-3">
              {data.framework}
            </h2>
            <img
              className="w-14 m-auto mb-4"
              src={'data:image/jpg;base64,' + data.image}
              alt={`${data.framework} icon`}
            />

            <div className=" flex p-3 w-4/6 m-auto border-2 border-rose-100 rounded-lg">
              <ul>
                <li>
                  <span className="font-bold">Created By: </span> {data.creator}
                </li>
                <li>
                  <span className="font-bold">Release Date: </span>{' '}
                  {data.initialReleaseDate}
                </li>
                <li>
                  <span className="font-bold"> Github Repo: </span>
                  <a
                    href={data.repo}
                    target="_blank"
                    rel="noreferrer"
                    className="text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    {data.repo}
                  </a>
                </li>
              </ul>
            </div>
            <p className="m-auto w-5/6 text-justify p-3 text-last-center">
              {data.description}
            </p>

            <ul className="text-center">
              <h4 className="font-bold text-l">Read More:</h4>
              <li>
                <a
                  href={data.links.wiki}
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-600 hover:underline"
                >
                  Wikipedia
                </a>
              </li>
              <li>
                <a
                  href={data.links.docs}
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-600 hover:underline"
                >
                  Official Documentation
                </a>
              </li>
              <li>
                <a
                  href={data.links.w3}
                  rel="noreferrer"
                  target="_blank"
                  className="text-blue-400 hover:text-blue-600 hover:underline"
                >
                  W3
                </a>
              </li>
            </ul>
          </>
        )}
      </div>
    </>
  );
}

export default Frameworks;
