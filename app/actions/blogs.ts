"use server";

import { redirect } from "next/navigation";
import { addBlog, getBlogById } from "../services/blogs";
import { revalidatePath } from "next/cache";
import { db } from "@/db";
import { blogs } from "@/db/schema";
import { eq } from "drizzle-orm";

export const createBlog = async (formdata: FormData) => {
    const title = formdata.get('title') as string
    const author = formdata.get('author') as string
    const url = formdata.get('url') as string

    await addBlog(title, author, url)
    revalidatePath('/blogs')
    redirect('/blogs')
}

export const likeBlog = async (formdata: FormData) => {
    const id = formdata.get('id') as string;
    const blog = await getBlogById(Number(id));
    if (blog) {
        await db.update(blogs).set({ likes: (blog.likes || 0) + 1 }).where(eq(blogs.id, blog.id))
        revalidatePath(`/blogs/${id}`)
        revalidatePath(`/blogs`)
    }
}
