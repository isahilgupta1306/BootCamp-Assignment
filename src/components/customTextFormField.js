import React from 'react'

export const CustomTextFormField = (props) => {
  
  return (
    
    <div className='customTextFieldContainer'>
        <div className='customTextFieldRow'>
              <div className='customTextFieldColumn'>
                <label className='label' for = "fname">{props.label}</label>
                <input 
                  className='inputField' t
                  type={props.inputType} 
                  autocomplete="off" 
                  name={props.name}
                  onChange = {props.onChange}
                  >
                </input>
              </div>
              {props.icon}
        </div>
        
    </div>
    // <p>{props.textFieldError}</p>
  );
}
