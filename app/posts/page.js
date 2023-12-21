// import Todo from "../components/todo";
import Link from "next/link";

export default async function PostsPage() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts", {
    next: {
      revalidate: 120,
    },
  });
  const posts = await response.json();

  const postsJSX = posts.map((post) => {
    return (
      <Link href={`/posts/${post.id}`} className="w-[70%]">
        <div className="w-full bg-white p-2.5 rounded-lg">
          <h1 className="text-3xl font-semibold">{post.title}</h1>
          <p className="text-gray-600">{post.body}</p>
        </div>
      </Link>
    );
  }); 

  console.log(posts);
  return (
    <div className=" flex justify-center items-center gap-3 flex-col bg-black">
      <h1 className="text-red-400 text-3xl">Posts Page</h1>
      <div className="flex flex-col gap-y-5 items-center">{postsJSX}</div>
      {/* <Todo /> */}
    </div>
  );
}
