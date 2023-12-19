import { getServerSession } from "next-auth";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LoginModal from "@/components/login-modal";

const DumbCompBlog = ({session}) => {

    return (
        <div className="flex w-full p-10 justify-start items-center flex-col gap-y-4">
            <h1 className="uppercase text-2xl">Blog Main Page</h1>
            <p>Token is: <span className="text-blue-700">{session?.token}</span></p>
        </div>
    )
}

export default async function BlogPage () {

    const session = await getServerSession(authOptions);
    
    return (
        <>
            {session ? (
                <DumbCompBlog session={session} />
            ) : <LoginModal/>}
        </>
    );
}
