import React from 'react'
import './myStyles.css'

function Stylesheet(props) {
  let className = props.primary ? 'primary' : ''
  return (
    <div>
      <h1 style={{color: 'red', fontSize: '72px'}}>Stylesheet</h1>
    </div>
  )
}

export default Stylesheet
