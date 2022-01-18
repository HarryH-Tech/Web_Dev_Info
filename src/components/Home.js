import React, { useEffect, useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [data, setData] = useState('');

  function fetchData() {
    axios.get(process.env.REACT_APP_API_HOME_INFO).then((res) => {
      console.log(res.data.body);
      setData(res.data.body);
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <div className="w-4/5">
        <h1 className="text-center underline font-bold">
          Web Development Information
        </h1>
      </div>

      {data && (
        <>
          <p className="text-justify p-3 text-last-center">
            {data.information}
          </p>
          <br />
          <div className="flex m-4 p-3 space-x-4">
            <div className="flex-1 w-30 border-rose-100 border-2 p-3">
              <h3 className="underline font-bold text-center">
                Reddit Threads
              </h3>
              <br />

              {data ? (
                <ul className="text-center">
                  {/* Weird behaviour below where if I used map to render the elements it
                    rendered each element out 5 times and the href would be undefined if I put 
                    text in the anchor tag so specified each href manually.
                    */}
                  <li>
                    <a
                      href={data.learn_more.reddit[0].HTML}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      HTML
                    </a>
                  </li>
                  <li>
                    <a
                      href={data.learn_more.reddit[1].web_dev}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      Web Development
                    </a>
                  </li>
                  <li>
                    <a
                      href={data.learn_more.reddit[2].javascript}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      Javascript
                    </a>
                  </li>
                  <li>
                    <a
                      href={data.learn_more.reddit[3].programming}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      Programming
                    </a>
                  </li>
                  <li>
                    <a
                      href={data.learn_more.reddit[4].frontend}
                      target="_blank"
                      rel="noreferrer"
                      className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                    >
                      Frontend
                    </a>
                  </li>
                </ul>
              ) : (
                'loading'
              )}
            </div>
            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Podcasts</h3>
            </div>
            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Websites</h3>
            </div>
          </div>
        </>
      )}
    </>
  );
}
