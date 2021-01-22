import styled from 'styled-components';
import RippleButton from './RippleButton';
import { withFormComponent } from '../utils/context';

const StyledField = styled.div`
  width: 100%;
  margin: 20px 0;
  color: #333;
  input {
    width: 100%;
    padding: 12px 20px;
    font-size: 15px;
    box-sizing: border-box;
    border-radius: 8px;
    border: 1px solid ${({isValid}) => isValid ? '#d32f2f' : 'transparent'};
    background: #ecf0f3;
    box-shadow: inset 2px 2px 4px #d1d9e6, inset -2px -2px 4px #f9f9f9;
  }
  .feedback {
    font-size: 13px;
    margin-top: 5px;
    padding-left: 10px;
    box-sizing: border-box;
    text-transform: capitalize;
    color: #d32f2f;
    text-align: left;
  }
`;

export const FormField = withFormComponent(({type, name, placeholder, isValid, setIsValid, validation, feedback}) => {
  return <StyledField isValid={isValid} >
    <input 
      type={type} 
      name={name} 
      placeholder={placeholder} 
      onBlur={({target}) => setIsValid(!validation(target.value))}
    />
    {isValid ? <p className="feedback">{feedback}</p> : null}
  </StyledField>
});

export const SubmitButton = withFormComponent(({onSubmit, ...props}) => {
  return <RippleButton {...props} onClick={onSubmit} />
})





  

