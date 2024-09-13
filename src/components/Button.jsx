/* eslint-disable no-unused-vars */
import React from 'react'
import { addCounter, minusCounter } from '../store/slices/counterSlice'
import { useDispatch } from 'react-redux'
import './Button.css'

const Button = () => {
  const dispatch = useDispatch()

  const handleAdd = () => {
    dispatch(addCounter())
  }

  const handleSubtract = () => {
    dispatch(minusCounter())
  }

  return (
    <div className="button-container">
      <button className="button add-btn" onClick={handleAdd}>Add</button>
      <button className="button subtract-btn" onClick={handleSubtract}>Subtract</button>
    </div>
  )
}

export default Button
