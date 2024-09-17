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
                <Input  className="font-bold bg-[#ffffff] max-lg:text-lg text-2xl 
                text-[#000000] w-full"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
               <BsSearchHeartFill  className="absolute right-0 top-1" size={35}/> 
            </form>
    )
}