import { eq, like } from 'drizzle-orm';
import { db } from '../../db'
import { blogs } from '@/db/schema';

export const getBlogs = async () => {
  return db.query.blogs.findMany();
}

export const addBlog = async (title: string, author: string, url: string) => {
  await db.insert(blogs).values({ title, author, url });
}
export const getBlogById = async (id: number) => {
  return db.query.blogs.findFirst({ where: eq(blogs.id, id) })
}
export const searchBlog = async (query: string) => {
  return db.query.blogs.findMany({ where: like(blogs.title, `%${query}%`) })
}