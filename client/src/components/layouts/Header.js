import React from 'react'
import "./header.css"

const Header = () => {

  const menu = [
    "ASOSIY",
    "LOYIHA HAQIDA",
    "AFZALLIKLARIMIZ",
    "GALEREYA",
    "BLOG",
    "A'LOQA"
  ]

  return (
    <header>
      <div className="headerTop container">
        <a href="/"><img src="/images/logo.png" alt="O'zbegim Logo" className="headerLogo" /></a>
          <ul className="navbar__list">
          {menu.map(menuItem => (
          <li key={menuItem} className="navbar__item">
            <a href={`#${menuItem.replace(/\s/g, '').toLowerCase()}`}  className="text navbar__link">
            {menuItem}
           </a>
          </li> 
          ))}
        </ul>
        <a href="tel:+998712317313" className="text telephoneNum">998 71 231-73-13</a>
      </div>
      <div className="headerInner">
        <div className="headerInnerLeft">
          <h2 className="title headerInnerTitle">
          O‘zbegim xonadonlariga xush kelibsiz
        </h2>
        <p className="text headerInnerText">
          Biz asosiy e'tiborimizni aynan sifatga va narxlarga qaratamiz, sizning didingizga mos tushuvchi uylarni bizdan topishingiz mumkun
        </p>
        </div>
      </div>
    </header>  
  )
}

export default Header
