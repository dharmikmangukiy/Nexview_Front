import React from 'react'
import Footer from '../Global/Footer'
import Header from '../Global/Header'
import Favorite from './Favorite'
import MyFavorite from './MyFavorite'

function FHome() {
  return (
    <div>
        <Header/>
        <Favorite/>
        <MyFavorite/>
        <Footer/>
    </div>
  )
}

export default FHome