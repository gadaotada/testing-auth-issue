'use client';
import { useState, useContext } from "react";
import { useRouter } from "next/navigation";
import { signIn } from 'next-auth/react';
import { UserContext } from "@/context/global-context";

const LoginModal = ({notLoggedIn = false}) => {

    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [loading, setLoading] = useState(false);

    const { state, setState } = useContext(UserContext);

    const router = useRouter();

    const handleChange = (e, field) => {
        if (field === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async () => {
        setLoading(true);
       const res = await signIn('credentials', {
            username: username,
            password: password,
            redirect: false,
            callbackUrl: '/admin'
        });

        if (res?.error) {
            setLoading(false)
            alert('wrong name or pass')
        } else {
            setState(false);
            router.push('/admin');
            router.refresh();

        }
    }

    return (
        <>
            {state || notLoggedIn ? (
            <main className="w-full h-full flex justify-center items-center fixed top-0 left-0">
                <div className="flex flex-col gap-y-4 w-[500px] justify-start items-center shadow-md shadow-slate-500 p-10 bg-slate-300 ">
                    <h1>Simple login screen</h1>
                    <input type='text' name='username' value={username} onChange={(e) => handleChange(e, 'username')}/>
                    <input type='password' name='password' value={password} onChange={(e) => handleChange(e, 'password')}/>
                    <button type='button' disabled={loading} onClick={()=>handleSubmit()} className="p-4 bg-blue-400 rounded-md w-[50%] text-slate-50"> LOGIN BRO </button>
                </div>
            </main>
            ) : null}
        </>
    )
}

export default LoginModal