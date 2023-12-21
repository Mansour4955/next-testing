import PostDetails from "@/app/components/postDetails";
import { Suspense } from "react";

export default async function PostDetailsPage({ params }) {
  const postId = params.postId;
  const loadingJSX = (
    <div className="flex justify-center w-full">
      <h3 className="text-3xl text-yellow-300">// Loading... //</h3>
    </div>
  );
  return (
    <div className="flex items-center flex-col gap-y-10 bg-black h-screen">
      <h1 className="text-white text-4xl font-semibold">Post Details</h1>
      <Suspense fallback={loadingJSX}>
        <PostDetails postId={postId} />
      </Suspense>
    </div>
  );
}
