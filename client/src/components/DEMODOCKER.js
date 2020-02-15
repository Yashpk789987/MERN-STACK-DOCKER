import React, { useEffect } from 'react';

const DEMODOCKER = props => {
  useEffect(() => {
    async function GET() {
      console.log('I Called ..');
      const response = await fetch('/users/all');
      const result = await response.json();
      console.log(result);
    }
    GET();
  }, []);
  const getData = async () => {
    alert('I am calling ....');
    const response = await fetch('/users/all');
    console.log(response);
    const result = await response.json();
    console.log(result);
  };
  return (
    <center>
      <h1>Hello Docker , I am React</h1>
      <br />
      <button onClick={() => getData()}>Click Me ...</button>
    </center>
  );
};

export default DEMODOCKER;
