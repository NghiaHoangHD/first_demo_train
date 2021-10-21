import React from 'react'
import '../../assets/scss/_header.scss'
export default function Header() {
  return (
    <div className="header">
      <img className="header__img"
      src= 'https://content.asos-media.com/-/media/homepages/unisex/generic-hp/oct-2021/microsoftteams-image-(10).png'
      ></img>

      <div className="header__content">
        <h1 className="header__title">
          THIS IS MY SHOP
        </h1>
        <h4 className="header__description">
          850+ brands
        </h4>
        <button className='header__button'>
         GO TO SHOP
        </button>
      </div>
      <div className="header__slogan">
        <div className="header__slogan__left">
          EASY DELIVERY WORLDWIDE
        </div>

        <div className="header__slogan__rig">
          DISCOVER OVER 850 BRANDS
        </div>
      </div>
    </div>
  )
}
