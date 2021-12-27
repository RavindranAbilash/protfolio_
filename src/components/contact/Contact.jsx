import './contact.scss'

import Shar from '../../images/shake.svg'
import {useState} from "react";

const Contact=()=>{

    const [message,setMessage]=useState(false);
    const submitHandler=(e)=>{
        e.preventDefault();
        setMessage(true)
    }
    return(
        <div className="contact" id="contact">
            <div className="left">
                <img src={Shar} alt=""/>
            </div>
            <div className="right">
                <h2>Contact</h2>
                <form onSubmit={submitHandler}>
                    <input type="text" placeholder="Enter Your Email..."/>
                    <textarea placeholder="Enter Your Massage..."/>
                    <button type="submit">Send</button>
                    {message && <span>Thank You for the Message. I'll reply ASAP :) </span>}
                </form>
            </div>
        </div>
        )

}

export default Contact;