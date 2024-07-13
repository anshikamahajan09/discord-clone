"use client"

import { UploadDropzone } from "@/lib/uploadThing";
import "@uploadthing/react/styles.css";

import {X} from "lucide-react";
import Image from "next/image";

interface FileUploadProps {
    onChange: (url?: string) => void; 
    value: string;
    endpoint: "messageFile" | "serverImage";
}

export default function FileUpload({ onChange, value, endpoint }: FileUploadProps) {
    const fileType = value?.split(".").pop();
    if(value && fileType!=="pdf"){
        return (
            <div className="relative w-20 h-20">
                <Image src={value} fill alt="Server Image" className="rounded-full"/>
                <button className="bg-rose-500 text-white p-1 rounded-full absolute top-0 right-0 shadow-sm" onClick={()=>onChange()}>
                    <X className="w-4 h-4" />
                </button>
            </div>
        )
    }
  return (
    <UploadDropzone
      endpoint={endpoint}
      onClientUploadComplete={(res)=>{
        onChange(res?.[0].url);
      }}
      onUploadError={(err:Error)=>{
        console.error(err);
      }}
    />
  )
}
