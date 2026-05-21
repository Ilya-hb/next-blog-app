import { createBlog } from "@/app/actions/blogs";

const NewBlog = () => {
  return (
    <form action={createBlog}>
      <div>
        <label>
          Title:
          <input
            type="text"
            name="title"
            required
          />
        </label>
      </div>
     
      <div>
        <label>
          Author:
          <input
            type="text"
            name="author"
            required
          />
        </label>
      </div>
      <div>
        <label>
          URL:
          <input
            type="text"
            name="url"
            required
          />
        </label>
      </div>
      <button type="submit">Create</button>
    </form>
  );
};

export default NewBlog;
