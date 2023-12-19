import React from 'react'
import styles from "./../components/module/home.module.css"
import { Link } from 'react-router-dom'
import contact from "../components/helpers/Contact"

export default function Home() {
  return (
    <React.Fragment>
        <section id='home' className={styles.home}>
            <div className="container mx-auto p-5 text-slate-300 font-medium flex flex-col justify-center h-full ">
                <h1 className='text-4xl md:text-7xl font-bold'>Avotra Frederic</h1>
                <h1 className='text-4xl md:text-7xl font-bold'>RAKOTOMAMONJY</h1>
                <div className='flex flex-row text-4xl md:text-7xl'>
                  {contact.map((element,index)=>{
                    return(
                      <Link to={element.url} target='blank' key={index + 1}>
                        {element.icon}
                      </Link>
                    )
                  })}
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
