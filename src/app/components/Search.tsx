"use client"

import { useState, FormEvent} from "react"
import  { useRouter } from 'next/navigation'
import { Input } from "@/components/ui/input"
import {  BsSearchHeartFill } from 'react-icons/bs'





export default function Search() {
    const [ search, setSearch] = useState('')
    const router = useRouter()

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        router.push(`/results/${search}`)
        setSearch('')
    }

    return (
            <form className="relative ml-5 w-1/4 "  onSubmit={handleSubmit}>
                <Input  className="font-bold max-lg:hidden flex  bg-[rgb(255,255,255)]  text-2xl 
                text-[#000000] w-full"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
               <BsSearchHeartFill  className="absolute max-lg:hidden right-0 top-1" size={35}/> 
           
               <Input  className="font-bold hidden w-[8em] max-lg:flex bg-[#ffffff] text-[1rem]  
                text-[#000000]"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
                <BsSearchHeartFill  className="absolute max-lg:flex hidden right-2 top-1" size={28}/> 
            </form>
    )
}