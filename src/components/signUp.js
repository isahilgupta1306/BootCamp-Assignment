import React, { Fragment, useEffect, useState } from 'react'
import '../styles/signUp.css'
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import PersonIcon from '@mui/icons-material/Person';
import EmailIcon from '@mui/icons-material/Email';
import { CustomTextFormField } from './customTextFormField';
import { CustomButton } from './customButton';
import IconButton from '@mui/material/IconButton';
import  Snackbar  from '@mui/material/Snackbar';
import CloseIcon from '@mui/icons-material/Close';




// Make reusable component

const Signup = () => {

  const initialFormValues = {fname:"",lname:"",email:"",password:"",repeatPassword:""};
  const [formValues,setFormValues] = useState(initialFormValues);
  const [formErrors,setFormErrors] = useState({});
  const [isSubmit , setIsSubmit] = useState(false);
  const [showSnackBar , setShowSnackBar] = useState(false);

  const iconStyle = { 
    color: "white", 
    fontSize: "18" , 
    backgroundColor:'transparent',
    margin:"0.3rem",
    alignSelf:"center"
} 
  const handleChange = (e)=>{
    const {  name , value } = e.target;
    setFormValues({...formValues,[name]:value}); //[name] will take the data as key and assign inputted value to it   //need to understad this again
    console.log(formValues);
  };

  const handleSubmit = (e)=>{
    e.preventDefault();
    setFormErrors(validate(formValues)); 
    setIsSubmit(true);
  }

  useEffect(()=>{
    console.log(formErrors);
    if(Object.keys(formErrors).length === 0 && isSubmit){
      console.log(formValues);
      console.log("Values VALIDATED")
    }
  },[formErrors]);

  const validate = (values)=>{
    const errors = {};
    const emailRegex = /[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$/ ;
    const passwordRegex = /^[A-Za-z0-9]/ ;
     
    if(!values.fname){
      errors.fname = "Enter First Name !";
    }
    if(!values.lname){
      errors.lname = "Enter Last Name !";
    }
    if(!values.email){
      errors.email = "Please enter your E-mail !";
    }else if(!emailRegex.test(values.email)){
      errors.email = "This is not a valid Email address";
    }
    if(!values.password){
      errors.password = "Enter Password !";
    }else if(!passwordRegex.test(values.password)){
      errors.password = "Password should be alphanumeric !" ;
    }
    if(!values.repeatPassword){
      errors.repeatPassword = "Please repeat your password !";
    }

    if(values.password !== values.repeatPassword){
      errors.password = "Password does'nt match . Retry Again ";
    }

    return errors;
  }

  // snackBar methods
  const handleToClose = (event, reason) => {
    if ("clickaway" === reason) return;
    setShowSnackBar(false);
  };
  
  const handleClickEvent = () => {
    setShowSnackBar(true);
  };
  
  const [passwordType, setPasswordType] = useState("password");
  const [passwordInput, setPasswordInput] = useState("");
  const handlePasswordChange =(evnt)=>{
      setPasswordInput(evnt.target.value);
  }
  const togglePassword =()=>{
    if(passwordType==="password")
    {
     setPasswordType("text")
     return;
    }
    setPasswordType("password")
  }

  return (
    <div className='semi-window'>
      <div className='signUp-container'>
        {/* <pre style={{color:"white"}}>{JSON.stringify(formValues,undefined,2)}</pre> */}
        <h1 className='title'>Create new account.</h1>
        <div className='login-redirect'>
          <p id='preLogin'>Already a member ?</p>
          <p id='goToLogin'>Login</p>
        </div>

        <div className='signUpForm'>
          <form className='form' onSubmit={handleSubmit} autocomplete="off" >
            <div className='form-column'>
              {/* Start of Column */}
              <div className='form-row'>
                {/* Start of row */}
                
                <CustomTextFormField 
                  label = "First Name" 
                  icon ={<PersonIcon sx={iconStyle} 
                  value = {initialFormValues.fname}/>} 
                  onChange = {handleChange}
                  name = "fname"
                  // textFieldError = {formErrors.fname}
                /> 
                  {/* <p>{formErrors.fname}</p>  */}
                
                <CustomTextFormField 
                  label = "Last Name" 
                  icon ={<PersonIcon sx={iconStyle} 
                  value = {initialFormValues.lname}/>}
                  onChange = {handleChange}
                  name = "lname"
                  // textFieldError = {formErrors.lname}
                /> 
              </div>

              <CustomTextFormField 
                label = "Email" 
                icon ={<EmailIcon sx={iconStyle}/>}
                value = {initialFormValues.email}
                onChange = {handleChange}
                name = "email"
                // textFieldError = {formErrors.email}
              />   
              <CustomTextFormField 
                label = "Password" 
                icon ={ passwordType==="password" ? <VisibilityIcon sx={iconStyle} onClick={togglePassword}/>
                                                  : <VisibilityOffIcon sx={iconStyle} onClick={togglePassword}/>
                      }
                inputType = {passwordType}
                value={passwordInput}
                onChange = {handleChange}
                name = "password"
                // textFieldError = {formErrors.password}
              />
              <CustomTextFormField 
                label = "Repeat Password" 
                icon ={ passwordType==="password" ? <VisibilityIcon sx={iconStyle} onClick={togglePassword}/>
                                                  : <VisibilityOffIcon sx={iconStyle} onClick={togglePassword}/>
                      }
                inputType = {passwordType}
                value={passwordInput}
                onChange = {handleChange}
                name = "repeatPassword"
                // textFieldError = {formErrors.repeatPassword}
              />   
              <br/>
              <div className='button-form-row'>
                {/* Start of row */}
                <CustomButton buttonText = "Create Account" onClick = {handleClickEvent}/>
                <CustomButton buttonText = "Login" onClick = {handleSubmit}/>
                
              </div>      
            </div>
          </form>
        </div>
        <Snackbar
          bodyStyle = {{backgroundColor:"teal"}}
          severity = "success"
          anchorOrigin={{
            horizontal: "left",
            vertical: "bottom",
          }}
          open={showSnackBar}
          autoHideDuration={5000}
          message="Sample Warning"
          onClose={handleToClose}
          action={
            <Fragment sx = {{color:"transparent"}}>
              <IconButton
                size="small"
                aria-label="close"
                color="inherit"
                onClick={handleToClose}  
              >
              <CloseIcon fontSize="small" sx = {{color:"white"}} />
              </IconButton>
            </Fragment>
          }
        />
        
    </div>
    {Object.keys(formErrors).length === 0 && isSubmit ? (<p style={{color:"white"}}>Signed In Successfully</p>) 
                                                      :(<pre style={{color:"white"}}>{JSON.stringify(formErrors,undefined,2)}</pre>) }

  </div>

  )
}

export default Signup;
