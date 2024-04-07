export default async function getAllPosts() {
  const result = await fetch(
    "http://localhost/wp/wp-plugin-dev/wp-json/wp/v2/posts",
    {
      next: {
        revalidate: 10,
      },
    }
  );

  if (!result.ok) {
    throw new Error("There was an error fetching posts");
  }

  return result.json();
}
