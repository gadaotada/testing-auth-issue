'use client';
import { signOut } from "next-auth/react";

export default function NavBar () {

    return (
        <>
            <div className="w-full h-16 flex justify-end items-center px-4">
                <button 
                    type="button"
                    className="p-4 bg-red-500 w-32 rounded text-slate-50"
                    onClick={() => signOut()}
                >
                    Log out
                </button>
            </div>
        </>
    )
}