import React from 'react'

export const CustomButton = (props) => {
  return (
    <button className='customButton' onClick={props.onClick} type="submit">
        <h2 className='buttonText'>{props.buttonText}</h2>
    </button>
  );
}
