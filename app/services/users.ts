import { eq } from 'drizzle-orm';
import { db } from '../../db'
import { blogs, users } from '@/db/schema';

export const getUsers = async () => {
    return db.query.users.findMany();
}
export const getUserByName = async (name: string) => {
    return db.query.users.findFirst({ where: eq(users.username, name) })
}

export const getBlogsByUserId = async (id: number) => {
    return db.query.blogs.findMany({ where: eq(blogs.userId, id) })
}

export const getUserWithBlogs = async (name: string) => {
    return db.query.users.findFirst({ where: (eq(users.username, name)), with: { blogs: true } })
}