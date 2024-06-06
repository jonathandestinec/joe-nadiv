"use client"

import React from 'react'
import { Montserrat, Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuLabel } from './ui/dropdown-menu'

const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "900"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })

function Navigation() {

    const currentPath = usePathname()

    const navLinks = [
        { url: "/#about", text: "About" },
        { url: "/#services", text: "Services" },
        { url: "/#real-estate", text: "Real Estate" },
        { url: "/#cars", text: "Cars" }
    ]

    return (
        <div>
            {/* Nav Desktop/Mobile */}
            <div className=' w-full md:h-20 h-16 fixed top-0 z-10 md:p-20 md:pt-0 left-0 flex items-center justify-between mdNavBar md:pb-0 p-7'>

                <div className=' w-max h-full flex items-center justify-center gap-3 cursor-pointer p-3 pt-0 pb-0 rounded-b-xl iconContainer bg-transparent'>

                    <i className="fi fi-br-fingerprint md:text-black text-black md:text-2xl text-3xl flex items-center justify-center"></i>

                    <h1 className={`${poppins.className} text-lg font-medium text-black md:block hidden`}>JNC</h1>

                    <h1 className={`${poppins.className} text-xl font-medium text-black md:hidden block`}>JNC</h1>

                </div>

                {/* Links */}

                <div className=' md:flex items-center justify-evenly gap-24 hidden'>
                    {
                        navLinks.map((link, k) => {
                            return (
                                <a href={`${link.url}`} className={`${poppins.className} text-sm hover:text-blue-700 ease-in-out transition duration-75 ${currentPath == link.url ? "text-blue-700" : "text-black"}`} key={k}>{link.text}</a>
                            )
                        })
                    }
                </div>

                {/* Nav Buttons */}

                <div className=' md:block hidden'>
                    <a href="/contact" className={`${poppins.className} p-7 rounded-md bg-black text-white pt-3 pb-3 text-sm`}>Contact Us</a>
                </div>

                {/* Hamburger Btn */}

                <div className=' md:hidden block'>
                    <DropdownMenu>

                        <DropdownMenuTrigger>
                            <i className="fi fi-br-bars-staggered md:hidden text-3xl text-black"></i>
                        </DropdownMenuTrigger>

                        <DropdownMenuContent>

                            <DropdownMenuLabel>
                                <a href="/about">Contact</a>
                            </DropdownMenuLabel>

                            <DropdownMenuLabel>
                                <a href="/services">Services</a>
                            </DropdownMenuLabel>

                            <DropdownMenuLabel>
                                <a href="/real-estate">Real Estate</a>
                            </DropdownMenuLabel>

                            <DropdownMenuLabel>
                                <a href="/cars">Cars</a>
                            </DropdownMenuLabel>

                        </DropdownMenuContent>

                    </DropdownMenu>
                </div>

            </div>
        </div>
    )
}

export default Navigation