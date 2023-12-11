'use client'
import { useParams } from "next/navigation"

const AutoGenBlogPage = () => {

    const id = useParams('blogId')

    return (
        <>
            <h1>Page blog with id = {id.blogId}</h1>
        </>
    )
}

export default AutoGenBlogPage;