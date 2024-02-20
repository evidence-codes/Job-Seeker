// import React, { useEffect, useState } from "react";

import JobSearch from "../components/JobSearch";

const Home: React.FC = () => {
  // const [text, setText] = useState("");
  // const [index, setIndex] = useState(0);

  // useEffect(() => {
  //   const textToType = "Site is loading...";
  //   const typingInterval = setInterval(() => {
  //     if (index < textToType.length) {
  //       setText((prev) => prev + textToType.charAt(index));
  //       setIndex((prev) => prev + 1);
  //     } else {
  //       clearInterval(typingInterval);
  //     }
  //   }, 100);

  //   return () => {
  //     clearInterval(typingInterval);
  //   };
  // }, [index]);

  return (
    <div className="">
      <JobSearch />
    </div>
  );
};

export default Home;
