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
      <h1 className="text-3xl text-center underline font-bold">
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
                {/*REDDIT THREADS */}
                {data.learn_more.reddit.map((thread) => {
                  return (
                    <>
                      <li>
                        <a
                          href={thread.HTML}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          HTML
                        </a>
                      </li>
                      <li>
                        <a
                          href={thread.web_dev}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Web Development
                        </a>
                      </li>
                      <li>
                        <a
                          href={thread.javascript}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Javascript
                        </a>
                      </li>
                      <li>
                        <a
                          href={thread.programming}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Programming
                        </a>
                      </li>
                      <li>
                        <a
                          href={thread.frontend}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Frontend
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Podcasts</h3>
              <ul className="text-center">
                {/* PODCASTS */}
                {data.learn_more.podcasts.map((podcast) => {
                  return (
                    <>
                      <br />
                      <li>
                        <a
                          href={podcast.syntaxfm}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Syntax FM
                        </a>
                      </li>
                      <li>
                        <a
                          href={podcast.programming_throwdown}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Programming Throwdown
                        </a>
                      </li>
                      <li>
                        <a
                          href={podcast.bxjs}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          BxJS
                        </a>
                      </li>
                      <li>
                        <a
                          href={podcast.javascript_jabber}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Javascript Jabber
                        </a>
                      </li>
                      <li>
                        <a
                          href={podcast.web_platform_podcast}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Web Platform Podcast
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>

            <div className=" flex-1 w-30 border-rose-100  border-2 p-3 rounded-2xl ">
              <h3 className="underline font-bold text-center">Websites</h3>

              <ul className="text-center">
                {/* Websites */}
                {data.learn_more.podcasts.map((website) => {
                  return (
                    <>
                      <br />
                      <li>
                        <a
                          href={website.fcc}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Free Code Camp
                        </a>
                      </li>
                      <li>
                        <a
                          href={website.w3}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          W3 Schools
                        </a>
                      </li>
                      <li>
                        <a
                          href={website.udemy}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Udemy
                        </a>
                      </li>
                      <li>
                        <a
                          href={website.coursera}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Coursera
                        </a>
                      </li>
                      <li>
                        <a
                          href={website.medium}
                          target="_blank"
                          rel="noreferrer"
                          className="cursor-pointer text-blue-400 hover:text-blue-600 hover:underline"
                        >
                          Medium
                        </a>
                      </li>
                    </>
                  );
                })}
              </ul>
            </div>
          </div>
        </>
      )}

      {errorMessage && <Error errorMessage={errorMessage} />}
    </>
  );
}
