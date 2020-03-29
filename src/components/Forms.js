import React, { useRef, useEffect, useState } from 'react';
import styled from 'styled-components';
import { toast } from 'react-toastify';
import { ButtonPrimary } from './Buttons';

export const CustomForm = ({ status, message, onValidated }) => {
  const email = useRef();
  const [buttonLabel, setButtonLabel] = useState('Signup');
  const [inputVal, setInputVal] = useState('');

  useEffect(() => {
    if (status === "sending") {
      setButtonLabel('Sending...');
    } else if (status === 'error') {
      toast.error(message);
      setButtonLabel('Signup');
    } else if (status === 'success') {
      toast.success(message);
      setButtonLabel('Signup');
    } else {
      return
    }
  }, [status])

  const validateEmail = (email) => {
    let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }

  const submit = () => {
    inputVal &&
      onValidated({
        EMAIL: email.current.value,
      });
  }



  return (
    <StyledForm>
      <StyledInputWrap>
        <input ref={email} value={inputVal} type="email" placeholder="Your email address" onChange={(e) => { setInputVal(e.target.value) }} required />
        <ButtonPrimary onClick={submit} className={inputVal.length < 1 && 'disabled'}>{buttonLabel}</ButtonPrimary>
      </StyledInputWrap>
      <small>You can unsubscribe from these communications at anytime. We won't spam you. For more information on how to unsubscribe, our privacy practices, and how we are committed to protecting and respecting your privacy, please review our Privacy Policy.</small>
    </StyledForm>
  )
}

const StyledForm = styled.div`
  display:block;
  margin:0 auto;
  text-align:center;
  padding:0 var(--spacing-sm);

  small {
    max-width:480px;
    margin:0 auto;
    color:var(--text-low-white);
  }
`


const StyledInputWrap = styled.div`
  position:relative;
  display:block;
  justify-content:flex-start;
  align-items:center;
  max-width:420px;  
  margin:var(--spacing-sm) auto;
  color:#d8d8d8;

  @media(min-width:48rem){
    display:flex;
  }

  button {    
    width:100%;
    font-size:1.125rem;
    line-height:1.25;        
    margin:var(--spacing-xs) 0;

    @media(min-width:48rem){   
      flex:0 0 30%;   
      width:auto;
      border-top-left-radius:0;
      border-bottom-left-radius:0;
      margin:0;
    }
  }
  input {
    display:block;
    width:100%;
    flex:1;
    padding:var(--spacing-xs);
    border-radius:0.25rem;    
    background-color:#fff;
    border:1px solid var(--base-light);
    box-shadow:0 0.5rem 1rem rgba(0,0,0,0.08);
    font-size:1rem;
    line-height:1;
    font-family:var(--font-stack);
    color:var(--text-med);

    &:focus {
      outline:0;
      box-shadow:0 0 0 4px rgba(255,255,255,0.2) ,0 0.5rem 1rem rgba(0,0,0,0.08);
    }

    @media(min-width:48rem){
      border-top-right-radius:0;
      border-bottom-right-radius:0;

      &:focus {
        outline:0;      
        box-shadow:0 0.5rem 1rem rgba(0,0,0,0.08);  
      }
    }
  }
`