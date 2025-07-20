import React from 'react';
import {Link, useRouteError} from 'react-router-dom';
import Wrappper from '../wrappers/ErrorPage';
import img from '../images/not-found.svg';

const Error = () => {
  const error = useRouteError();
  console.log(error);

  if(error.status === 404) { 
    return (
      <Wrappper>
        <div>
          <img src={img} alt="not found" />
          <h3>Page nt found</h3>
          <p>we con't seem to find the page you are looking for</p>
          <Link to ='/dashboard'>back home </Link>
        </div>
      </Wrappper>
    );
  }
  return (
    <Wrappper>
      <div>
        <h3>something went wrong</h3>
      </div>
    </Wrappper>
  );
}

export default Error;