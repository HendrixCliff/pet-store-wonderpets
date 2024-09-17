'use client'

import NavLink from "next/link"
import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"
import  {FaShoppingCart} from "react-icons/fa"
 import  {GiImperialCrown} from "react-icons/gi"
import {RiAccountCircleFill} from "react-icons/ri"
import {FaRocketchat} from "react-icons/fa"
import { Badge } from "@/components/ui/badge"
import {IoMdMenu} from "react-icons/io"
//  import {useState} from "react"
 import Search from "../components/Search"


  export default function Header() {
    // const [badge, setBadge] = useState(0)

    // function handleBadge() {
    //     setBadge(prev => prev + 1)
    // }
    return (
        <header className="bg-[#090c9b] mb-[5em] w-full max-lg:h-32 h-44 fixed items-center  backdrop-blur-md z-20">
            <section className="flex mt-1 items-center max-lg:gap-1 gap-32 max-lg:px-1 px-5">
                <NavLink  className="font-mono flex max-lg:hidden hover:text-[#ffffff] items-center  text-[#e0c83d]" href="/">
                <GiImperialCrown size={130} />
                <h3 className=" text-[3rem] font-mono mt-[1em] font-bold">Monarch</h3>
                </NavLink>
                <NavLink  className=" font-mono flex-col  items-center mb-1 text-[1.5rem] hidden  max-lg:flex  hover:text-[#ffffff]  text-[#e0c83d]" href="/">
                <GiImperialCrown size={90} />
                <h3 className="mt-1 text-[1.3rem] h-10 w-10 mr-5 font-bold">Monarch</h3>
                </NavLink>
                <Search/>
                <nav className="flex text-[gold] max-lg:ml-3 ml-36 items-center max-lg:gap-1 gap-10 max-lg:text-[1rem] text-lg font-bold">
                    <HoverCard>
                        <HoverCardTrigger className="flex hover:text-[#ffffff] text-center items-center ">
                       <section className="flex flex-col"><h3> 24/7</h3> <h3>Help</h3> </section>  <FaRocketchat size={35}/>
                        </HoverCardTrigger>
                        <HoverCardContent>
                        <h3>Get help from our experts </h3>
                        <h3 className="font-bold text-[1.2rem]">1-800-672 4399</h3>
                        <section className="flex">
                            <NavLink href="/chat">chat live</NavLink>
                            <NavLink href="/chat">Contact Us</NavLink>
                        </section>
                       <section className="flex">
                       <NavLink href="/order">Track Order</NavLink>
                        <NavLink href="/faqs">  -  FAQs</NavLink>
                        <NavLink href="/shipinfo">  -   Shipping info</NavLink>
                       </section>
                       
                        </HoverCardContent>
                    </HoverCard>
                    <NavLink  className="flex hover:text-[#ffffff] items-center" href="/account" >
                    <RiAccountCircleFill size={35}/>  Account
                    </NavLink>
                    <NavLink  className="flex items-center hover:text-[#ffffff] relative animate-bounce " href="/cart">
                    <FaShoppingCart  size={35}/> Cart 
                    <Badge className="absolute rounded-full bottom-5 bg-[#000000] text-[gold]">0</Badge>
                    </NavLink>
                    <HoverCard>
                <HoverCardTrigger className="lg:hidden hover:text-[#ffffff] text-[gold]">
                 < IoMdMenu size={40}/>
                </HoverCardTrigger>
                <HoverCardContent className="flex flex-col gap-2 hover:text-[#ffffff] bg-[#000000] text-[gold] text-center font-bold">
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1 " href="/dog">Dogs</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/cat">Cats</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/bird">Birds</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/horse">Horses</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/pharmacy">Pharmacy</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/service">Services</NavLink>
                </HoverCardContent>
            </HoverCard>
                </nav>
            </section>
            <section className="">
            <nav className=" text-[gold] lg:flex  max-lg:hidden mb-2 gap-36 px-20  items-center text-xl font-bold">
                <NavLink className="hover:text-[#ffffff]"  href="/dog">
                  Dogs
                 </NavLink>
                <NavLink className="hover:text-[#ffffff]"  href="/cat">
                Cats
               </NavLink>
                <NavLink className="hover:text-[#ffffff]"   href="/bird">
                Birds
                </NavLink>
                <NavLink className="hover:text-[#ffffff]"   href="/fish">
                Fishes
               </NavLink>

                <NavLink className="hover:text-[#ffffff]"   href="/horse">
                Horses
               </NavLink>   
                <NavLink  href="/about" className="hover:text-[#ffffff]">
                Pharmacy
               </NavLink>     
                <NavLink  href="/services" className="hover:text-[#ffffff]">
                Services
               </NavLink>               
            </nav>
            </section>
           
        </header>
    )
  }