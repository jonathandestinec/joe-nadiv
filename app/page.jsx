"use client"

import React from 'react'
import { Inter, Montserrat, Poppins, Ubuntu } from 'next/font/google'
import { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { usePathname } from 'next/navigation'

const inter = Inter({ weight: ["400"], subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400"] })
const poppinsBold = Poppins({ subsets: ["latin"], weight: ["500"] })
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] })

function page() {

  const currentPath = usePathname()
  console.log(currentPath)

  const navLinks = [
    { url: "/#about", text: "About" },
    { url: "/#services", text: "Services" },
    { url: "/#real-estate", text: "Real Estate" },
    { url: "/#cars", text: "Cars" }
  ]

  return (
    <div className=' p-20 pt-0 relative'>

      {/* Nav Desktop/Mobile */}
      <div className=' w-full h-14 fixed top-0 z-10 md:p-20 md:pt-0 left-0 flex items-center justify-between mdNavBar md:pb-0 p-7 pt-10 pb-0'>

        <div className=' w-max h-full flex items-center justify-center gap-3 cursor-pointer md:bg-blue-700 p-3 pt-0 pb-0 rounded-b-xl iconContainer md:shadow-lg md:shadow-blue-700/50 bg-transparent'>
          <i className="fi fi-br-fingerprint md:text-white text-black md:text-2xl text-4xl flex items-center justify-center"></i>
          <h1 className={`${poppinsBold.className} text-base text-white md:block hidden`}>Joe Nadiv Concepts</h1>
        </div>

        {/* Links */}

        <div className=' md:flex items-center justify-evenly gap-10 hidden'>
          {
            navLinks.map((link, k) => {
              return (
                <a href={`${link.url}`} className={`${poppins.className} text-sm hover:text-blue-700 ease-in-out transition duration-75 ${currentPath == link.url ? "text-blue-700" : "text-black"}`} key={k}>{link.text}</a>
              )
            })
          }
        </div>

        {/* Hamburger Btn */}

        <i className="fi fi-br-bars-staggered md:hidden text-3xl text-black"></i>

      </div>

    </div>
  )
}

export default page