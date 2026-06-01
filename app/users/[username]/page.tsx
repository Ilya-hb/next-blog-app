import { getBlogsByUserId, getUserByName, getUserWithBlogs } from "@/app/services/users"
import Link from "next/link";

const User = async ({ params }: { params: Promise<{ username: string }> }) => {
    const { username } = await params;
    // 2 query approach
    // const user = await getUserByName(username);
    // const blogs = await getBlogsByUserId(user!.id);

    // 1 query approach using join (preferrable)
    const user = await getUserWithBlogs(username)


    return (
        <div>
            <h1>User</h1>
            <p>{user?.name}</p>
            Blogs:
            <ul>
                {user?.blogs.map((blog) => (
                    <li key={blog.id}>
                        <Link href={`/blogs/${blog.id}`}>{blog.title}</Link>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default User;