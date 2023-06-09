async function getData() {
  const res = await fetch("http://127.0.0.1:10058/wp-json/wp/v2/posts");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Page() {
  const data = await getData();

  return (
    <main>
      <ul>
        {data.map((post) => (
          <li key={post.id}>
            <a href={`/blog/${post.slug}`}>{post.title.rendered}</a>
          </li>
        ))}
      </ul>
    </main>
  );
}
