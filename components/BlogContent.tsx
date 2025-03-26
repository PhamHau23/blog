"use client"
import { useRouter } from "next/navigation"
import { useCallback } from "react"

interface Blog{
    id: string,
    blog: string
}

interface Props{
    data: Blog[]
}

export default function BlogContent({data}: Props){
    console.log('render du lieu')
    const route = useRouter()

    const handleClick = useCallback((id: string) => {
        route.push(`/blog/${id}`)
    }, [])

    return(
        <div>
            {data.map((blog) => (
                <div key={blog.id}>
                    <span onClick={() => handleClick(blog.id)}>id: {blog.id}</span>
                    <span>content: {blog.blog}</span>
                </div>
            ))}
        </div>
    )
}