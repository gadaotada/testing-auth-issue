import { getServerSession } from "next-auth"

import NavBar from "@/components/nav"
import { authOptions } from "../api/auth/[...nextauth]/options"
import LoginModal from "@/components/login-modal";

export default async function ProtectedLayout({ children }) {

    const session = await getServerSession(authOptions);

    if (!session) {

        return ( <>
            <LoginModal notLoggedIn={true}/>
            {children}
        </>)
    }

    return (
        <>
            <NavBar />
            {children}
        </>
    )
  }