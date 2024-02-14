import React, { useEffect, useState } from "react";

const Home: React.FC = () => {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 3000); // Change the timeout value as needed

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="flex justify-center items-center h-screen">
      {loading ? (
        <h1 className="text-4xl font-bold text-center">Site is Loading!!</h1>
      ) : null}
    </div>
  );
};

export default Home;
