import React from "react";

export const metadata = {
  title: "articles page",
};
const layout = ({ children }) => {
  return (
    <div>
      <h1 className="bg-gray-300 text-3xl">Articles</h1>
      <div className="mt-12 bg-blue-500 p-5 rounded-lg">{children}</div>
    </div>
  );
};

export default layout;
