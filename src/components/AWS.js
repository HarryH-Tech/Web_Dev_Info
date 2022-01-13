import React, { useEffect } from 'react';
import axios from 'axios';

function AWS() {
  useEffect(() => {
    axios
      .get(process.env.REACT_APP_API_URL_GET_AWS_INFO)
      .then((res) => console.log(res));
  }, []);
  return <>AWS</>;
}

export default AWS;
