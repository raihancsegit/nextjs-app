export default async function getPost(id) {
  const result = await fetch(
    `http://localhost/wp/wp-plugin-dev/wp-json/wp/v2/posts/${id}`
  );

  return result.json();
}
