import React from "react"

const Card = (formation) => {
  return (
    <>
      <div className='box btn_shadow'>
        <div className='title_content d_flex'>
          <div className='title'>
            <h2>{formation.title}</h2>
            <span>{formation.annee}</span>
          </div>
        </div>
        <hr />
        <p>{formation.desc}</p>
      </div>
    </>
  )
}

export default Card