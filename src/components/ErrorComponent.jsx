import React, { useState } from 'react';
import { css } from 'glamor'

const errorContainer = css({
  background: 'rgba(200, 20, 20, 0.6)',
  border: '2px solid rgba(200, 20, 20, 1)',
  borderRadius: '5px',
  padding: '5px 10px',
  boxSizing: 'border-box',
  color: '#fff',
  fontWeight: 'bold',
  position: 'fixed',
  left: 'calc(100vw - 320px)',
  width: '100vw',
  maxWidth: '300px',
  top: '20px'
})

const ErrorComponent = ({ message, setHide }) => {

  return (
    <div {...errorContainer}>
      {message}
      <span onClick={setHide} style={{ float: 'right' }}>X</span>
    </div>
  )

}

export default ErrorComponent