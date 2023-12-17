'use client';
import { useState } from "react";
import LoginModal from "./login-modal";

export default function LoginComp () {

    const [isOpen, setIsOpen] = useState(false);


    return (
        <>
            <section className={isOpen ? " opacity-40 cursor-not-allowed" : " opacity-100"}>
                <h1>What is Lorem Ipsum?</h1>
                <div className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
                <button type="button" className="px-4 py-2 bg-blue-500 hover:bg-blue-700 rounded-md text-slate-50" onClick={() => setIsOpen(!isOpen)}>
                    Toggle Login
                </button>
            </section>
            <LoginModal isOpen={isOpen} setIsOpen={setIsOpen}/>
        </>
    )
}