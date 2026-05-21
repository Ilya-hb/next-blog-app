"use server";

import {redirect} from "next/navigation";
import {addBlog, getBlogById, searchBlog} from "../services/blogs";
import { revalidatePath } from "next/cache";

export const createBlog = async(formdata: FormData) => {
    const title = formdata.get('title') as string
    const author = formdata.get('author') as string
    const url = formdata.get('url') as string

    addBlog(title, author, url)
    revalidatePath('/blogs')
    redirect('/blogs')
}

export const likeBlog = async(formdata:FormData)=>{
    const id = formdata.get('id') as string;
    const blog = getBlogById(Number(id));
    if(blog){
        blog.likes += 1;
        revalidatePath(`/blogs/${id}`)
         revalidatePath(`/blogs`)
    }
}
