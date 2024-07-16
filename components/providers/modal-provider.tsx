"use client"

import CreateServerModal from "@/components/modals/create-server-modal"
import { useEffect, useState } from "react"

export const ModalProvider=()=>{
    const [isMounted, setMounted] = useState(false);
    useEffect(()=>{
        setMounted(true);
    },[]);

    if(!isMounted){
        return null;
    }

    return(
        <>
            <CreateServerModal/>
        </>
    )
}