// import React from "react";

const ShowArticlePage = (props) => {
    console.log(props);
  return (
    <div>
      <h1 className="bg-yellow-300 text-3xl">Show Article</h1>
      <h1 className="bg-yellow-300 text-3xl">{props.params.title}</h1>
    </div>
  );
};

export default ShowArticlePage;
