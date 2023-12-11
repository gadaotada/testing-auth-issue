'use client';
import { useState } from "react";
import { useRouter } from "next/navigation";

import { signIn } from 'next-auth/react'

export default function LoginPage () {

    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')

    const router = useRouter();

    const handleChange = (e, field) => {
        if (field === 'username') {
            setUsername(e.target.value)
        } else {
            setPassword(e.target.value)
        }
    }

    const handleSubmit = async () => {
       const res = await signIn('credentials', {
            username: username,
            password: password,
            redirect: false,
            callbackUrl: '/admin'
        });

        if (res?.error) {
            alert('wrong name or pass')
        } else {
            router.push('/admin');
            router.refresh();
        }
    }

    return (
        <>
            <input type='text' name='username' value={username} onChange={(e) => handleChange(e, 'username')}/>
            <input type='password' name='password' value={password} onChange={(e) => handleChange(e, 'password')}/>
            <button type='button' onClick={()=>handleSubmit()}> LOGIN BRO </button>
        </>
    )
}