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
        <section>
           
            <form className="relative w-1/4 max-lg:w-[8em] max-md:w-[3em] flex max-lg:hidden"  onSubmit={handleSubmit}>
            <Input  className="font-bold hidden max-lg:flex w-[8em] max-md:w-[3em] bg-[#ffffff] text-[1rem]  
                text-[#000000]"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
                <BsSearchHeartFill  className="absolute max-lg:flex max-md:right-[0] hidden max-lg:right-2 top-1" size={28}/> 


                <Input  className="font-bold flex max-lg:hidden bg-[rgb(255,255,255)]  text-2xl 
                text-[#000000] w-full"
                value={search}  type="text"   onChange={(e) => setSearch(e.target.value)}
                placeholder="Search for images"/>
               <BsSearchHeartFill  className="absolute max-lg:hidden right-0 top-1" size={35}/> 
           
            </form>
        </section>
           
    )
}