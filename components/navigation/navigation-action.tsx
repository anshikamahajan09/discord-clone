"use client";

import { Plus } from "lucide-react";
import { ActionTooltip } from "@/components/action-tooltip";
import { useModal } from "@/hooks/use-modal-store";

export const NavigationAction = () =>{
    const {onOpen} = useModal();
    return (
        <ActionTooltip label="Add a new server" side="right" align="center">
            <div>
            <button onClick={()=>onOpen("createServer")} className="group flex items-center">
                <div className="dark:bg-neutral-700 bg-background flex mx-3 h-[48px] w-[48px] rounded-[24px] group-hover:rounded-[16px] transition-all overflow-hidden items-center justify-center group-hover:bg-emerald-500">
                <Plus className="group-hover:text-white transition text-emerald-500" size={25}/>
                </div>
            </button>
        </div>
        </ActionTooltip>
    )
}