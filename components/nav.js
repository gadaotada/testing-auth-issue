'use client';
import { signOut } from "next-auth/react";
import { useContext } from "react";
import { useRouter } from 'next/navigation'

import { UserContext } from "@/context/global-context";

export default function NavBar () {

    const { state, setState } = useContext(UserContext);
    const router = useRouter();

    const handleLogout = async () => {
        try {
            const res = await signOut({redirect: false})
            if (res.url) {
                setState(true);
                router.refresh();
            }
        } catch(err) {
            console.log(err)
        }
    }

    return (
        <>
            {!state ? (
            <div className="w-full h-16 flex justify-end items-center px-4">
                <button 
                    type="button"
                    className="p-4 bg-red-500 w-32 rounded text-slate-50"
                    onClick={() => handleLogout()}
                >
                    Log out
                </button>
            </div>
            ) : null }
        </>
    )
}