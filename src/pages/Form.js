import styled from 'styled-components';
import {FormField, SubmitButton} from '../components/FormField';
import { FormProvider } from '../utils/context';

const Section = styled.section`
  width: 450px;
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  background: #edf2f0;
  box-sizing: border-box;
  user-select: none;
`;

const StyledButton = styled(SubmitButton)`
  box-shadow: 2px 2px 4px #d1d9e6, -2px -2px 4px #f9f9f9;
  color: #333;
  &:hover {
    box-shadow: 2px 2px 4px #d1d9e6 inset, -2px -2px 4px #f9f9f9 inset;
  }
`;

const Form = () => {
  return <main>
    <h3>1. Form Validation</h3>
    <Section>
      <FormProvider>
        <FormField 
          type="text" 
          name="name" 
          placeholder="Name" 
          validation={(value) => Boolean(value.length > 1)}
          feedback="please enter name." 
        />
        <FormField 
          type="password" 
          name="password" 
          placeholder="Password" 
          validation={(value) => Boolean(value.length > 1)}
          feedback="please enter password." 
        />
        <FormField 
          type="text"
          name="phone"
          placeholder="Phone Number"
          validation={(value) => Boolean(value.length > 1)}
          feedback="please enter phone number." 
        />
        <FormField 
          type="text"
          name="email"
          placeholder="Email" 
          validation={(value) => Boolean(value.length > 1)}
          feedback="please enter email address." 
        />
        <StyledButton size="sm" color="#ecf0f3">Submit</StyledButton>
      </FormProvider>
    </Section>
  </main>
}

export default Form