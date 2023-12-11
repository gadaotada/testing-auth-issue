import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";

const AutoGenAdminPage = async ({ params }) => {
    const session = await getServerSession(authOptions);
    const id = params

    return (
        <>
            {session ? (
                <div className="flex w-full p-10 justify-start items-center flex-col gap-y-4">
                    <h1 className="uppercase text-2xl">Dynamic admin Page ID : {id.adpageId}</h1>
                    <ul>
                        <li>User Id is : <span className="text-blue-700">{session.user?.id}</span></li>
                        <li>User Name is : <span className="text-blue-700">{session.user?.name}</span></li>
                        <li>User Role is : <span className="text-blue-700">{session.user?.role}</span></li>
                    </ul>
                    <p>Token is: <span className="text-blue-700">{session?.token}</span></p>
                </div>
            ) : null}
        </>
    )
}

export default AutoGenAdminPage;