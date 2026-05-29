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
              <h2>{blog.title}</h2>
              <p>Author: {blog.author}</p>
              <a
                href={blog.url}
                target="_blank"
                rel="noopener noreferrer"
              >
                Read more
              </a>
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
