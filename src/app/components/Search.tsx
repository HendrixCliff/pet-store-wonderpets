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
            <form className="relative w-[15em] max-lg:w-[8em] max-md:w-[3em] flex"  onSubmit={handleSubmit}>
                <Input  className="font-bold max-lg:w-[8em] max-md:w-[2em]  min-xl:w-[15em] bg-[hsl(0,0%,100%)] max-lg:text-[1em] max-md:text-[.4em] text-2xl 
                text-[#000000]"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
              <BsSearchHeartFill  className="absolute max-lg:hidden flex right-0 top-1" size={35}/>
           
            </form>
     
           
    )
}