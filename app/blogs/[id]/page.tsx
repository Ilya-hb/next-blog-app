import { likeBlog } from "@/app/actions/blogs";
import { getBlogById } from "@/app/services/blogs";


export default async function BlogPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  const blog = await getBlogById(Number(id));

  if (!blog) {
    return <p>Blog not found</p>
  }
  return (
    <div>

      <h1>{blog?.title}</h1>
      <p>Author: {blog?.author}</p>
      <a
        href={blog?.url}
        target="_blank"
        rel="noopener noreferrer"
      >
        Read more
      </a>
      <p>Likes: {blog?.likes} ❤️ </p>

      <form action={likeBlog} >
        <input type='hidden' name='id' value={blog?.id} />
        <button type="submit">Like</button>
      </form>
    </div>
  )
}
