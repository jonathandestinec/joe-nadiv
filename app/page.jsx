"use client"

import React from 'react'
import { Inter, Montserrat, Poppins, Ubuntu } from 'next/font/google'
import { useEffect } from 'react'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "900"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] })

function page() {

  const currentPath = usePathname()

  const navLinks = [
    { url: "/#about", text: "About" },
    { url: "/#services", text: "Services" },
    { url: "/#real-estate", text: "Real Estate" },
    { url: "/#cars", text: "Cars" }
  ]

  return (
    <div className=' md:p-20 md:pt-0 relative p-14 pt-0'>

      {/* Nav Desktop/Mobile */}
      <div className=' w-full md:h-20 h-16 fixed top-0 z-10 md:p-20 md:pt-0 left-0 flex items-center justify-between mdNavBar md:pb-0 p-7 pt-10 pb-10'>

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

        <i className="fi fi-br-bars-staggered md:hidden text-3xl text-black"></i>

      </div>

      {/* Main Page */}

      <div className=' mt-36 w-full md:flex items-center justify-between block relative'>

        <div className=' md:w-3/6 w-full'>

          <h1 className={`${montserrat.className} text-5xl font-bold leading-none`}>We Revolve Around <br /><span className=' text-indigo-700'>Versatility, Flexibility</span> <br />And Trust <span className='flex items-center justify-between gap-5 w-max mt-5 hover:translate-x-3 hover:gap-12 duration-500 ease-in-out'>
            <i className="fi fi-sr-play text-black text-2xl"></i>
            <i className="fi fi-sr-play text-black text-2xl"></i>
            <i className="fi fi-sr-play text-black text-2xl"></i>
          </span></h1>

          <h5 className={` text-sm ${poppins.className} mt-5`}>Join our network of multi talented partners as we grow in the vas world of commerce, bringing together different ideas into one concept</h5>

          {/* Buttons */}

          <div className=' md:flex md:items-center md:justify-left md:mt-10 gap-5 block md:w-max w-full mt-10'>

            <div className='md:w-max w-full md:mt-0 mt-3'>
              <a href="/work-with-us" className={`${poppins.className} md:p-7 rounded-md bg-black text-white md:pt-3 md:pb-3 md:text-sm pt-5 pb-5 md:flex block text-center text-base`}>Work with us</a>
            </div>

            <div className='md:w-max w-full md:mt-0 mt-3'>
              <a href="/contact-us" className={`${poppins.className} md:p-7 rounded-md border-2 border-black text-black md:pt-3 md:pb-3 md:text-sm text-base font-medium w-full pt-5 pb-5 md:flex block text-center`}>Contact Us</a>
            </div>

          </div>
        </div>

        {/* Image */}
        <div className=' md:absolute -z-10 relative md:right-0 md:top-0 md:-translate-y-24 flex items-center justify-center md:w-max w-full mt-10'>

          <Image
            src={"/assets/business-man.png"}
            width={330}
            height={330}
            alt='Marketing Image'
            className=' text-indigo-700 filter brightness-90'
            unoptimized
          ></Image>

          {/* Doodles */}

          <Image
            src={"/assets/doodles/box-2.svg"}
            width={200}
            height={200}
            alt='doodle'
            className=' absolute bottom-0 right-0 md:translate-x-20 translate-x-10 -z-10'
          ></Image>

          <Image
            src={"/assets/doodles/line-5.svg"}
            width={200}
            height={200}
            alt='doodle'
            className=' absolute bottom-0 left-0 -translate-x-16 translate-y-10'
          ></Image>

          <div className=' absolute -z-20 w-52 h-52 bg-amber-300 rounded-full imageCircle'></div>

        </div>

      </div>
    </div>
  )
}

export default page