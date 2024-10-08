'use client'

import NavLink from "next/link"

import {
    Popover,
    PopoverContent,
    PopoverTrigger,
  } from "@/components/ui/popover"
  import { Button } from "@/components/ui/button"
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
        <header className="bg-[#090c9b] mb-[5em] max-lg:mb-[3em] w-full max-lg:h-32 h-44 fixed items-center  backdrop-blur-md z-20 ">
            <section className="flex mt-1 items-center max-md:gap-[0em] max-lg:gap-[1.3em] gap-32 max-lg:px-[0em] px-5">
                <NavLink  className="font-mono flex max-lg:hidden hover:text-[#ffffff] items-center  text-[#e0c83d]" href="/">
                <GiImperialCrown size={130} />
                <h3 className=" text-[3rem] font-mono mt-[1em] font-bold">Monarch</h3>
                </NavLink>
                <NavLink  className=" font-mono flex-col  items-center mb-1 text-[1.5rem] hidden  max-lg:flex  hover:text-[#ffffff]  text-[#e0c83d]" href="/">
                <GiImperialCrown size={70} />
                <h3 className="mt-1 text-[1.1rem] h-10 w-10 mr-3 font-bold">Monarch</h3>
                </NavLink>
                <Search/>
                <nav className="flex text-[gold] max-lg:ml-[1em] ml-36 items-center max-lg:gap-[2.7em] max-md:gap-[0em] max-md:ml-[0em] gap-10 max-lg:text-[1rem] text-lg font-bold">
                    <Popover>
                        <PopoverTrigger className="flex hover:text-[#ffffff] text-center items-center ">
                       <section className="flex flex-col max-lg:hidden"><h3> 24/7</h3> <h3>Help</h3> </section>  <FaRocketchat className="flex max-lg:hidden" size={35}/>
                       <section className=" max-lg:flex-col max-lg:flex hidden"><h3> 24/7</h3> <h3>Help</h3> </section>  <FaRocketchat className="hidden max-lg:flex" size={20}/>
                        </PopoverTrigger>
                        <PopoverContent>
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
                       
                        </PopoverContent>
                    </Popover>
                    <NavLink  className="flex max-lg:hidden hover:text-[#ffffff] items-center" href="/account" >
                    <RiAccountCircleFill size={35}/>  Account
                    </NavLink>
                     <NavLink  className="hidden max-lg:flex hover:text-[#ffffff] items-center" href="/account" >
                    <RiAccountCircleFill size={20}/>  Account
                    </NavLink>
                    <NavLink  className="flex max-lg:hidden items-center hover:text-[#ffffff] relative animate-bounce " href="/cart">
                    <FaShoppingCart  size={35}/> Cart 
                    <Badge className="absolute rounded-full bottom-5 bg-[#000000] text-[gold]">0</Badge>
                    </NavLink>
                    <NavLink  className="hidden max-lg:flex items-center hover:text-[#ffffff] relative animate-bounce " href="/cart">
                    <FaShoppingCart  size={20}/> Cart 
                    <Badge className="absolute rounded-full bottom-5 bg-[#000000] text-[gold]">0</Badge>
                    </NavLink>
                    <Popover>
                <PopoverTrigger  asChild className="max-lg:flex hidden  bg-[#000000] text-[gold]">
                <Button variant="outline">< IoMdMenu size={32}/></Button> 
                </PopoverTrigger>
                <PopoverContent className="flex flex-col gap-2 hover:text-[#ffffff] bg-[#000000] text-[gold] text-center font-bold">
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1 " href="/dog">Dogs</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/cat">Cats</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/bird">Birds</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/horse">Horses</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/pharmacy">Pharmacy</NavLink>
                    <NavLink className="border-solid border-[.2em] border-[gold]   py-1"  href="/service">Services</NavLink>
                </PopoverContent>
            </Popover>
                </nav>
            </section>
            <section className="">
            <nav className=" text-[gold] flex  max-lg:hidden mb-2 gap-[6em] px-[3em]  items-center text-xl font-bold">
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