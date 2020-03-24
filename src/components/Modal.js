import React, { useState, useEffect } from 'react';
import { useData } from '../context/DataProvider';
import styled from 'styled-components';
import { ButtonText } from './Buttons';

export const Modal = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const { modalContent, getModalContent } = useData();

  useEffect(() => {
    getModalContent();
    setIsOpen(modalContent.isOpen);
  }, [modalContent]);

  return (
    <StyledModalWrap visible={isOpen}>
      <StyledModalBase onClick={() => setIsOpen(false)} />
      <StyledModal>
        <h3>Safety Guidelines</h3>
        <p>{modalContent.data}</p>
        <ButtonText onClick={() => setIsOpen(false)}>Dismiss</ButtonText>
      </StyledModal>
    </StyledModalWrap>
  )
}

const StyledModalWrap = styled.div`
  position:fixed;
  display:flex;
  justify-content:center;
  align-items:center;
  top:0;
  left:0;
  width:100%;
  height:100%;
  padding:0 var(--spacing-sm);
  background-color:rgba(0,0,0,0.6);
  z-index:98;
  opacity:${props => props.visible ? '1' : '0'};
  pointer-events:${props => props.visible ? 'auto' : 'none'};
  transition:all .25 ease;
`;
const StyledModalBase = styled.div`
  position:fixed;
  display:block;
  top:0;
  left:0; 
  top:0;
  left:0;
  width:100%;
  height:100%;
  z-index:0;
`;
const StyledModal = styled.section`
  position:relative;
  display:flex;
  justify-content:center;
  align-items:center;
  flex-flow:column nowrap;
  text-align:center;
  padding:var(--spacing-md);
  border-radius:0.5rem;
  background-color:#fff;
  box-shadow:0 0 100px rgba(0,0,0,0.25);
  z-index:1;

  p {
    max-width:45ch;
    margin-left:auto;
    margin-right:auto;
  }
`;


