'use client';
import { useContext, useEffect } from "react";

import LoginModal from "./login-modal";
import { UserContext } from "@/context/global-context";

export default function LoginComp ({isNotLoggedIn}) {

    const { state, setState } = useContext(UserContext);

    useEffect(() => {
        if (isNotLoggedIn === true) {
            setState(true)
        } else {
            return; // do nothing
        }
    }, [isNotLoggedIn, setState])

    return (
        <>
            <section className={`w-full flex justify-center items-center p-20` + (state ? " opacity-40 cursor-not-allowed" : " opacity-100")}>
                <h1>What is Lorem Ipsum?</h1>
                <div className="text-justify">
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,
                    when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, 
                    but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets 
                    containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                </div>
            </section>
            {state ? (<LoginModal />) : null}
        </>
    )
}