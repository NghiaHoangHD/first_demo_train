import React from 'react'
import '../../assets/scss/_topbar.scss';
import { Link } from 'react-router-dom';

export default function Topbar() {
  return (
    <div className="topbar">
        <div className="topbar__logo">
          <Link to='/' className="topbar__logo__link">SHOP</Link>
        </div>
        <div className="topbar__left">
          <ul className="topbar__left__list">
            <li className="topbar__left__item">
              <Link to= '/products' className='topbar__left__link'>PRODUCTS</Link>
            </li>
            <li className="topbar__left__item">
              <Link to= '/add-new' className='topbar__left__link'>ADD NEW</Link>
            </li>
          </ul>

        </div>

        <div className="topbar__right">
          <ul className="topbar__right__list">
            <li className="topbar__right__item">
              <Link to = '/login' className='topbar__right__link'>
                LOGIN
              </Link>

            </li>
            <li className="topbar__right__item">
              <Link to = '/sign-up'  className='topbar__right__link'>
                SIGN UP
              </Link>
            </li>
            <li className="topbar__right__item">
              <img className="topbar__right___item__img" src= 'https://media.istockphoto.com/photos/happy-smiling-africanamerican-child-girl-yellow-background-picture-id1168369629?k=20&m=1168369629&s=612x612&w=0&h=cOqiMS2ibSZPXOTy6OkRZrGJRUNmIKkv89iVO4TjW3M='></img>
            </li>
          </ul>
        </div>
    </div>
  )
}
