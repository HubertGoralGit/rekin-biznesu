import React, { useRef } from 'react';
import emailjs from 'emailjs-com';
import styled from 'styled-components';
import { media } from '../../utils/index';

const StyledForm = styled.form`
    display: flex;
    flex-direction: column;

    input {
        height: 36px;
        margin-bottom: 15px;
        padding-left: 5px;
    }

    textarea {
        margin-bottom: 15px;
        height: 150px;
        padding: 5px;
    }
    
    .submit-button {
        background: #74c4df;
        border: none;
        height: 40px;
    }
`

const InputGroup = styled.div`
    display: flex;
    width: 100%;
    flex-direction: column;

    ${media.desktop`
        flex-direction: row;
        justify-content: space-between;
    `}
`


const Form = () => {
    const form = useRef();
    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_cm7sfow', 'template_tdotjq4', form.current, 'user_TFaRAoWsDKOMLopY6AvC8')
          .then((result) => {
              console.log('Success', result.text);
          }, (error) => {
              console.log('Error', error.text);
          });
      };
    return (
        <StyledForm ref={form} onSubmit={sendEmail}>
            <InputGroup>
                <input type="text" name="user_name" placeholder='Imię'/>
                <input type="email" name="user_email" placeholder='Email'/>
            </InputGroup>
            <textarea name="message" placeholder='Wiadomość'/>
            <input type="submit" value="Send" className='submit-button'/>
        </StyledForm>
    )
};

export default Form;