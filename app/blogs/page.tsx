import Link from "next/link";
import { getBlogs, searchBlog } from "../services/blogs";
import React from "react";

const Blogs = async ({
  searchParams
}: {
  searchParams: Promise<{ filter?: string }>
}) => {
  const allBlogs = await getBlogs();
  const { filter } = await searchParams;
  const mostLikedblogs = [...allBlogs].sort((a, b) => (b.likes || 0) - (a.likes || 0));
  const blogs = filter ? await searchBlog(filter) : mostLikedblogs;


  return (
    <div>
      <h1>Blogs</h1>
      <h2>Search blogs...</h2>
      <form method="get" >
        <input type="text" name="filter" defaultValue={filter || ''} placeholder="Search blogs..." />
        <button type="submit">Search</button>
      </form>
      <ul>
        {blogs.map((blog) => (
          <React.Fragment key={blog.id}>
            <li >
              <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
              <p>Author: {blog.author}</p>
              <Link
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </Link>
              <p>Likes: {blog.likes} ❤️ </p>
            </li>
            <hr />
          </React.Fragment>
        ))}
      </ul>
    </div>
  );
};
export default Blogs;
