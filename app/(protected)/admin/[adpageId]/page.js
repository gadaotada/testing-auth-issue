'use client'
import { useParams } from "next/navigation"

const AutoGenAdminPage = () => {

    const id = useParams('adpageId')

    return (
        <>
            <h1>Page admin with id : {id.adpageId}</h1>
        </>
    )
}

export default AutoGenAdminPage;