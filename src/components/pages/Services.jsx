import React from "react"
import { Heading } from "../common/Heading"
import { services } from "../data/dummydata"

export const Services = () => {
  return (
    <>
      <section className='services'>
        <div className='container'>
          <Heading title='Technical Skills' />
          <div className='content grid3'>
            {services.map((item) => (
              <div className='box' data-aos='flip-left'>
                <i>{item.icon}</i>
                <h3>{item.title}</h3>
                <p>&emsp;{item.desc}</p>
                  <p>&emsp;{item.desc1}</p>
                  <p>&emsp;{item.desc2}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
