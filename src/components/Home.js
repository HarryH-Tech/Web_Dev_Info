import React, { useEffect, useState } from 'react';
import axios from 'axios';

import LoadingSpinner from '../utils/LoadingSpinner';
import Error from '../utils/Error';

export default function Home() {
  const [data, setData] = useState('');
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  function fetchData() {
    setLoading(true);
    axios.get(process.env.REACT_APP_API_HOME_INFO).then((res) => {
      if (res.data.statusCode === 200) {
        setData(res.data.body);
        setLoading(false);
        setErrorMessage('');
      } else {
        setErrorMessage(
          'Sorry, there was an error loading this page ☹ \n Please try again later.'
        );
      }
    });
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h1 className="text-center underline font-bold">
        Web Development Information
      </h1>
      {loading && <LoadingSpinner />}
      {data && (
        <>
          <p className="text-justify p-3 text-last-center">
            {data.information}
          </p>
          <br />
          <div className="flex m-4 p-3 space-x-4">
            <div className="flex-1 w-30 border-rose-100 border-2 p-3 rounded-2xl">
              <h3 className="underline font-bold text-center">
                Reddit Threads
              </h3>
              <br />
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
            </div>
            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Podcasts</h3>
              <ul className="text-center">
                {/* PODCASTS */}
                <br />
                <li>
                  <a
                    href={data.learn_more.podcasts[0].syntaxfm}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Syntax FM
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.podcasts[1].programming_throwdown}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Programming Throwdown
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.podcasts[2].bxjs}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    BxJS
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.podcasts[3].javascript_jabber}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Javascript Jabber
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.podcasts[4].web_platform_podcast}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Web Platform Podcast
                  </a>
                </li>
              </ul>
            </div>

            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Websites</h3>

              <ul className="text-center">
                {/* Websites */}

                <br />
                <li>
                  <a
                    href={data.learn_more.websites[0].fcc}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Free Code Camp
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.websites[1].w3}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    W3 Schools
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.websites[2].udemy}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Udemy
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.websites[3].coursera}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Coursera
                  </a>
                </li>
                <li>
                  <a
                    href={data.learn_more.websites[4].medium}
                    target="_blank"
                    rel="noreferrer"
                    className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                  >
                    Medium
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </>
      )}

      {errorMessage && <Error errorMessage={errorMessage} />}
    </>
  );
}
