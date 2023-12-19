import { getServerSession } from "next-auth";
import { redirect } from "next/navigation";

import { authOptions } from "@/app/api/auth/[...nextauth]/options";
import LoginComp from "@/components/login";

export default async function LoginPage () {

    const session = await getServerSession(authOptions)
    
    if (session) {
        redirect('/admin')
    }

    return (
       <LoginComp isNotLoggedIn={false} />
    )
}