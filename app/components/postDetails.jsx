import React from "react";

export default async function PostDetails({ postId }) {

  await new Promise((resolve) => {
    setTimeout(() => {
      resolve();
    }, 2000);
  });

  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${postId}`,
    {
      next: {
        revalidate: 120,
      },
    }
  );
  const post = await response.json();
  return (
    <div className="flex justify-center w-full">
      <div className="w-[70%] bg-white p-2.5 rounded-lg">
        <h1 className="text-3xl font-semibold">{post.title}</h1>
        <hr />
        <p className="text-gray-600">{post.body}</p>
      </div>
    </div>
  );
}
