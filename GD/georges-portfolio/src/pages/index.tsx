import Head from 'next/head'
import { Inter } from 'next/font/google'
import { AiFillTwitterCircle, AiFillLinkedin, AiFillYoutube, AiFillGithub } from "react-icons/ai";
import Image from "next/image";
import flodd from '../public/avatar.jpeg';


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <Head>
        <title>George's Portfolio</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className='bg-blue-300 px-10'>
        <div className='min-h-screen'>
          <section>
            <nav className='py-10 mb-20 flex justify-between'>
              <h1 className='text-2xl font-'>   DoddDigitals</h1>
              <ul className='flex items-center'>
                <li>
                </li>
                <li> <a className='bg-gray-800 text-white px-3 py-2 rounded-lg ml-2' href="/"> Home </a> </li>
                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/skills"> Skills </a> </li>
                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/projects"> Projects </a> </li>
                <li> <a className='bg-gray-600 text-white px-3 py-2 rounded-lg ml-2' href="/contact"> Contact </a> </li>
              </ul>
            </nav>

            <div className='text-center p-5'>
              <h2 className='text-5xl py-2 text-gray-600 font-medium'>
                George's Portfolio Page
              </h2>
              <h3 className='text-2xl py-2'>Designer, Creator and Crypto Enthusiast</h3>
              <p className='text-md leading-5 text-gray-800 '>
                Hi I am George, As a diligent and highly self-motivated individual, I am eager to learn and develop my Web
                Development and design skills as I
                progress through my career. My time learning web development has cemented my enthusiasm for creating websites.
                Most of my experience has come from self teaching and the skill ex course.
              </p>

            </div>
            <div className="relative mx-auto rounded-full w-80 h-80 mt-10 overflow-hidden">
              <Image alt='logo' src={flodd} style={{ objectFit: "cover" }} />
            </div>
          </section>
        </div>
      </main>
    </>
  )
}
