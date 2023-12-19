import React from 'react'
import {  DiDart, DiDjango,  DiLinux, DiNodejs} from "react-icons/di"
import { LiaAngular, LiaDocker, LiaGit, LiaGofore, LiaJava, LiaJenkins, LiaLaravel, LiaPhp, LiaPython, LiaReact, LiaSwift, LiaSymfony } from "react-icons/lia"
import styles from "./../components/module/home.module.css"
export default function Competance() {
  return (
    <React.Fragment>
        <section className={styles.home}>
            <div className="container flex flex-col justify-center h-full text-slate-300 px-5">
                <h1 className='text-4xl md:text-7xl font-semibold'>Skills</h1>
                <div className="grid grid-cols-1 md:grid-cols-2">
                    <div className='flex flex-wrap text-6xl md:text-7xl gap-5'>
                        <LiaPython/>
                        <LiaPhp/>
                        <LiaJava/>
                        <DiDart/>
                        <LiaGofore/>
                        <DiNodejs/>
                        <LiaLaravel/>
                        <LiaSymfony/>
                        <DiDjango/>
                        <LiaSwift/>
                        <LiaReact/>
                        <LiaAngular/>
                        <LiaDocker/>
                        <LiaJenkins/>
                        <LiaGit/>
                        <DiLinux/>
                        
                    </div>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
