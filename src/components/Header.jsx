/* eslint-disable no-unused-vars */
import React from 'react'
import { useSelector } from 'react-redux'
import Button from './Button'

const Header = () => {
  const { counter } = useSelector((state) => state.counterReducer)

  return (
    <div className="header">
      <h1 className="counter-text">Counter: {counter}</h1>
      <Button />
    </div>
  )
}

export default Header
