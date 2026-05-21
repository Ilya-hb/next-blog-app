import { get } from "http"

const blogs = [
  {id:1, title:'test blog 1',  author:'ilya', url:'https://example.com/blog1', likes: 10, },
  {id:2, title:'test blog 2', author:'ilya', url:'https://example.com/blog2', likes: 15, },
  {id:3, title:'test blog 3', author:'ilya', url:'https://example.com/blog3', likes: 5, },
]

let nextId = 4

export const getBlogs = () => {
  return blogs
}

export const addBlog = ( title: string, author: string, url: string) => {
  blogs.push({ id: nextId++, title, author, url, likes: 0 })
}
export const getBlogById = (id: number) =>{
    return blogs.find(b=>b.id === id)
}
export const searchBlog = (query:string)=>{
    return blogs.filter((b)=>b.title.toLowerCase().includes(query?.toLowerCase() || ''))
}