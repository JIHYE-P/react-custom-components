import styled from 'styled-components';
import FormField from './FormField';
import FormButton from './FormButton';
import { FormProvider } from '../utils/context';

const Section = styled.section`
  padding: 30px;
  text-align: center;
  border-radius: 15px;
  background: #edf2f0;
`;

const buttonStyle = {
  boxShadow: '2px 2px 4px #d1d9e6, -2px -2px 4px #f9f9f9',
  color: '#333'
}

const Form = () => {
  return <Section>
    <h4>Form</h4>
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
      <FormButton size="sm" color="#ecf0f3" style={buttonStyle}>Submit</FormButton>
    </FormProvider>
  </Section>
}

export default Form