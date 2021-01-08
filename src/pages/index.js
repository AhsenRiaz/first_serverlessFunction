import React, { useEffect, useState } from "react";

const Home = () => {
  const [data, setData] = useState("");

  useEffect(() => {
    (async () => {
      const response = await fetch(`.netlify/functions/hello`);
      const tempData = await response.json();
      setData(tempData);
    })();
  }, []);
  console.log(data);

  return (
    <div>
      <h1>
        Hello This is my first serverless function using lambda function
        provided by netlify {data.message}
      </h1>
    </div>
  );
};

export default Home;
