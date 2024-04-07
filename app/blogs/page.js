// pages/index.js

import React from "react";
import Link from "next/link";
import getAllPosts from "@/lib/getAllPosts";
export default async function Blogs() {
  const posts = await getAllPosts();
  console.log("Posts:", posts); // Log the posts prop

  if (!posts) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h1 className="my-5">Latest Posts</h1>
      <div className="grid grid-cols-3 grid-rows-3 gap-4">
        {posts.map((post) => (
          <div className="bg-gray-200 text-center hover:bg-violet-600 px-5 py-5">
            <Link href={`/blogs/${post.id}`}>{post.title.rendered}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
