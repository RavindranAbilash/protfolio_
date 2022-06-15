import React, { useEffect } from "react"
import { home } from "../data/dummydata"
import Typewriter from "typewriter-effect"
import { saveAs } from "file-saver";
import CV from "../data/cv.pdf"

export const Hero = () => {
    const saveFile = () => {
        saveAs(
            CV,
            "Abilash_Cv.pdf"
        );
    };
  return (
    <>
      <section className='hero'>
        {home.map((val, i) => (
          <div className='heroContent'>
            <h3 className='fontSize' data-aos='fade-right'>
              {val.text}
            </h3>
            <h1>
              <Typewriter
                options={{
                  strings: [`${val.name}`, `${val.post}`, `${val.design}`],
                  autoStart: true,
                  loop: true,
                }}
              />
            </h1>
            <p data-aos='fade-left'>{val.desc}</p>
            <button className='primaryBtn' data-aos='fade-up-right' onClick={saveFile}>
              Download CV
            </button>
          </div>
        ))}
      </section>
    </>
  )
}
