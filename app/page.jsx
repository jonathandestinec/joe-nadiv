"use client"

import React from 'react'
import { Inter, Montserrat, Poppins, Ubuntu } from 'next/font/google'
import { useEffect, useRef } from 'react'
import Image from 'next/image'
import { motion, useScroll } from 'framer-motion'
import { Input } from '@/components/ui/input'
import Navigation from '@/components/Navigation'


const inter = Inter({ weight: ["400", "500", "600"], subsets: ["latin"] })
const montserrat = Montserrat({ subsets: ["latin"], weight: ["500", "600", "700", "900"] })
const poppins = Poppins({ subsets: ["latin"], weight: ["400", "500"] })
const ubuntu = Ubuntu({ subsets: ["latin"], weight: ["500"] })

function page() {

  const { scrollYProgress } = useScroll()

  return (

    <div className=' relative overflow-hidden'>

      <div className=' md:p-20 md:pt-0 relative p-14 pt-0'>

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

      {/* Services Container Cars */}
      <div className=' h-max md:p-10 p-5 box-border md:mt-10 mt-0 md:grid md:grid-cols-2 gap-5 place-items-center relative'>

        <div className='servicesImgContainer w-full cars relative md:p-20 p-10 mb-16 col-span-1 h-max'>

          <motion.div
            className="img"
            whileInView={{ scale: 1.2 }}
            initial={{ filter: "blur(0px) brightness(100%)", scale: 1 }}
            transition={{ type: "just" }}
          ></motion.div>

          <motion.h1
            className={`text-white ${montserrat.className} text-6xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
          >Cars</motion.h1>
          <motion.h5
            className={`text-white ${poppins.className} mt-10`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "just" }}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit et nostrum quod atque, fugiat commodi fugit? Possimus, voluptas. Eligendi numquam accusantium assumenda eveniet repudiandae, quibusdam culpa? Vero, repudiandae ullam.</motion.h5>
        </div>

        {/* Shoes */}

        <div className='servicesImgContainer shoe relative w-full md:p-20 p-10 mb-16 col-span-1 h-max'>

          <motion.div
            className="img"
            whileInView={{ scale: 1.2 }}
            initial={{ filter: "blur(0px) brightness(100%)", scale: 1 }}
            transition={{ type: "just" }}
          ></motion.div>

          <motion.h1
            className={`text-white ${montserrat.className} text-6xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
          >Shoes</motion.h1>
          <motion.h5
            className={`text-white ${poppins.className} mt-10`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "just" }}
          >Lorem ipsum dolor, sit amet consectetur adipisicing elit. Voluptatem nihil, sunt molestiae magni cumque laboriosam iure animi dolore rem veritatis.</motion.h5>
        </div>

        {/* Clothes */}

        <div className='servicesImgContainer boutique relative w-full md:p-20 p-10 mb-16 md:col-span-2 h-max'>

          <motion.div
            className="img"
            whileInView={{ scale: 1.2 }}
            initial={{ filter: "blur(0px) brightness(100%)", scale: 1 }}
            transition={{ type: "just" }}
          ></motion.div>

          <motion.h1
            className={`text-white ${montserrat.className} text-6xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
          >Boutique</motion.h1>
          <motion.h5
            className={`text-white ${poppins.className} mt-10`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "just" }}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit et nostrum quod atque, fugiat commodi fugit? Possimus, voluptas. Eligendi numquam accusantium assumenda eveniet repudiandae, quibusdam culpa? Vero, repudiandae ullam.</motion.h5>
        </div>

        {/* Real Estate */}

        <div className='servicesImgContainer realestate relative w-full md:p-20 p-10 md:mb-16 md:col-span-2 h-max'>

          <motion.div
            className="img"
            whileInView={{ scale: 1.2 }}
            initial={{ filter: "blur(0px) brightness(100%)", scale: 1 }}
            transition={{ type: "just" }}
          ></motion.div>

          <motion.h1
            className={`text-white ${montserrat.className} text-6xl`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
          >Real Estate</motion.h1>
          <motion.h5
            className={`text-white ${poppins.className} mt-10`}
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, type: "just" }}
          >Lorem, ipsum dolor sit amet consectetur adipisicing elit. Harum impedit et nostrum quod atque, fugiat commodi fugit? Possimus, voluptas. Eligendi numquam accusantium assumenda eveniet repudiandae, quibusdam culpa? Vero, repudiandae ullam.</motion.h5>
        </div>

      </div>

      {/* Footer */}

      <div className=' w-screen h-screen relative m-0 p-0'>

        <div className="top-1/2 left-1/2 absolute -translate-x-1/2 -translate-y-1/2 w-full p-10 box-border">

          <motion.h1
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.3, type: "just" }}
            className={`text-black ${montserrat.className} font-bold text-5xl text-center mt-10`}
          >For more inquiries</motion.h1>

          {/* Email and social */}

          <motion.div
            initial={{ y: 50, opacity: 0 }}
            whileInView={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, type: "just" }}
            className='socialContianer md:pt-10 h-max md:pb-10 w-full md:w-3/6 ml-auto mr-auto mt-10 p-10 md:p-0 rounded-2xl border-l-2 border-t-2 border-r-2 border-b-2 border-black'
          >
            <div
              className=' md:flex items-center justify-between gap-5 ml-auto mr-auto md:w-4/5 block w-full mb-10'
            >
              <Input type="email" placeholder="Email" className="pt-3 pb-3 md:w-4/6 w-full bg-transparent ring-1 ring-black" />

              {/* Button */}
              <a href="/contact" className={`${poppins.className} p-5 rounded-md bg-black text-white pt-3 pb-3 text-sm md:w2/6 w-full text-center md:m-0 ml-auto mr-auto mt-5 block md:w-2/6`}>
                <div>Contact us</div>
              </a>


            </div>

            <div
              className='flex items-center justify-between ml-auto mr-auto md:w-1/2 md:gap-0 gap-5 w-max'
            >
              <a href="" className=' text-xl'>
                <i className="fi fi-brands-facebook text-black text-4xl"></i>
              </a>

              <a href="">
                <i className="fi fi-brands-whatsapp text-black text-4xl"></i>
              </a>

              <a href="">
                <i className="fi fi-sr-phone-call text-black text-4xl"></i>
              </a>
            </div>

          </motion.div>

        </div>

        <Image
          src={"/assets/ball.svg"}
          alt='Ball background'
          width={100}
          height={100}
          className=" md:w-1/2 w-full top-1/2 left-1/2 absolute -z-20 -translate-x-1/2 -translate-y-1/2"
        ></Image>

      </div>

    </div>
  )
}

export default page