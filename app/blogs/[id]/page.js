import getAllPosts from "@/lib/getAllPosts";
import getPost from "@/lib/getPost";

export async function generateMetadata({ params }) {
  const { id } = params;
  const post = await getPost(id);

  return {
    title: post.title.rendered,
    description: post.content.rendered,
  };
}

export default async function PostPage({ params }) {
  const { id } = params;
  const postPromise = getPost(id);

  // const [post, comments] = await Promise.all([postPromise, commentsPromise]);
  const post = await postPromise;

  return (
    <div className="mt-6">
      <h2 className="text-blue-500">{post.title.rendered}</h2>
      <p className="mt-3">{post.content.rendered}</p>
      <hr />
    </div>
  );
}

export async function generateStaticParams() {
  const posts = await getAllPosts();

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}
