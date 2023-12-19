import React from 'react'
import {LiaHomeSolid,LiaPencilAltSolid,LiaGraduationCapSolid,LiaBriefcaseSolid, LiaDev, LiaPhoneSolid} from 'react-icons/lia'
import {Link} from 'react-router-dom'
export default function Navigation() {
  return (
    <React.Fragment>
        <nav className='h-fit flex w-full md:w-auto p-1 fixed bottom-0 md:top-1/3 md:bottom-1/3 md:right-8 bg-slate-100/50 z-50 md:rounded-full'>
            <ul className='h-auto flex w-full justify-center md:flex-col text-whit'>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"/"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaHomeSolid/></Link>
                </li>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"about"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaPencilAltSolid/></Link>
                </li>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"graduation"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaGraduationCapSolid/></Link>
                </li>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"experience"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaBriefcaseSolid /></Link>
                </li>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"skills"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaDev/></Link>
                </li>
                <li className='w-12 h-12 p-2 rounded-full hover:bg-slate-200'>
                    <Link to={"contact"} className='text-white flex flex-col hover:text-slate-600 items-center justify-center w-full h-full'> <LiaPhoneSolid/></Link>
                </li>
            </ul>
        </nav>
    </React.Fragment>
  )
}
