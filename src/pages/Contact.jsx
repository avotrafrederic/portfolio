import React, { useRef } from 'react'
import styles from "./../components/module/home.module.css"
import emailjs from "@emailjs/browser"
import toast from 'react-hot-toast';
import { LiaCheckCircle } from 'react-icons/lia';
export default function Contact() {
    const form = useRef();
    const handleSubmit = (e)=>{
        e.preventDefault();
        emailjs.sendForm("service_q2p228u","template_jxth16d",form.current,"oUG9LH9W7RJu09DWh").then((result)=>{
            toast(result.text,{
                duration:1000,
                position: "top-right",
                icon:<LiaCheckCircle/>
            });
            form.current.reset()
        },(error)=>{
            console.log(error.text)
        });
    }
  return (
    <React.Fragment>
        <section className={styles.home}>
            <div className="container mx-auto grid sm:grid-cols-1 md:grid-cols-2 h-full text-slate-300">
                <div className='h-full flex flex-col justify-center'>
                    <h1 className='text-4xl md:text-7xl font-mono flex items-cente'>Contact</h1>
                    <form ref={form} className='flex flex-col gap-y-1' onSubmit={handleSubmit}>
                        <input type="text" name='username' className='bg-transparent border-2 py-2 px-2 rounded-lg focus:border-0 active:border-slate-200' placeholder='userrname' />
                        <input type="text" name="subject" className='bg-transparent border-2 py-2 px-2 rounded-lg' placeholder='subject' />
                        <input type="email" name='email' className='bg-transparent border-2 py-2 px-2 rounded-lg' placeholder='Email' />
                        <textarea name="message" id="" className='bg-transparent border-2 py-2 px-2 rounded-lg' cols="5" rows="5"></textarea>
                        <button type="submit" className='py-2 px-2 bg-slate-400 rounded-lg shadow-lg shadow-slate-600'>Envoyer</button>
                    </form>
                </div>
            </div>
        </section>
    </React.Fragment>
  )
}
