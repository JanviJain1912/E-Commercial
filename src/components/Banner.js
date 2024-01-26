import React from 'react'

const Banner = () => {
    return(
        <div className="banner">
          <div className="banner__contents">
            <h1 className="banner__title">Chic Choices Await!!</h1>
            <div className="banner__buttons">
              <button className="banner__button">Search</button>
              <button className="banner__button">My Cart</button>
            </div>
            <h1 className="banner__description">
            Explore a world of fashion at your fingertips with our diverse collection of clothing and accessories. Elevate your style and embrace the latest trends with ease.
            </h1>
          </div>
          <div className="banner--fadeBottom"></div>
        </div>
      )
}

export default Banner
