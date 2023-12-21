// import React from 'react'
import Link from "next/link";

// export const metadata = {
//   title: "articles page",
// };
const ArticlesPage = () => {
  return (
    <div className="mx-auto flex justify-center items-center">
      <h1 className="text-green-400 text-3xl">Articles Page</h1>
      <Link href="/posts">
        <button>Take me to the posts page</button>
      </Link>
    </div>
  );
};

export default ArticlesPage;
