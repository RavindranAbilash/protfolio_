import React from "react"
import { Heading } from "../common/Heading"
import { about } from "../data/dummydata"
import { saveAs } from "file-saver";
import CV from "../data/cv.pdf"
// import {Routes, Route, useNavigate} from 'react-router-dom'

export const About = () => {
    const saveFile = () => {
        saveAs(
            CV,
            "Abilash_Cv.pdf"
        );
    };

    // const navigate = useNavigate();
    //
    // const navigateToContacts = () => {
    //     // 👇️ navigate to /contacts
    //     navigate('/contacts');
    // };
  return (
    <>
      <section className='about'>
        <div className='container flex'>
          {about.map((val) => (
            <>
              <div className='left' data-aos='fade-down-right'>
                <img src={val.cover} alt='' />
              </div>
              <div className='right' data-aos='fade-down-left'>
                <Heading title='About Me' />
                <p>{val.desc}</p>
                <p>{val.desc1}</p>
                <button onClick={saveFile}>Download CV</button>
                {/*<button className='primaryBtn' onClick={navigateToContacts}>Contact Me</button>*/}
                <a className='contact_button'  href="contact">Contact Me</a>
              </div>
            </>
          ))}
        </div>
      </section>
    </>
  )
}
