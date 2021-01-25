import styled from 'styled-components';
import {FormField, SubmitButton} from '../components/FormField';
import { FormProvider } from '../utils/context';

const Section = styled.section`
  width: 450px;
  margin-top: 20px;
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

const initState = {
  name: false,
  password: false,
  phone: false,
  email: false
}
const Form = () => {
  return <main>
    <h3>1. Form Validation</h3>
    <Section>
      <FormProvider initState={initState}>
        <FormField 
          type="text" 
          name="name" 
          placeholder="Name" 
          validation={(value) => /^[가-힣]+$/.test(value)}
          feedback="이름을 정확하게 입력해주세요." 
        />
        <FormField 
          type="text"
          name="phone"
          placeholder="Phone (010-0000-0000)"
          validation={(value) => /^\d{3}-\d{3,4}-\d{4}$/.test(value)}
          feedback="휴대폰 번호를 정확하게 입력해주세요." 
        />
        <FormField 
          type="text"
          name="email"
          placeholder="Email" 
          validation={(value) => /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i.test(value)}
          feedback="이메일 주소를 정확하게 입력해주세요." 
        />
        <StyledButton size="sm" color="#ecf0f3">Submit</StyledButton>
      </FormProvider>
    </Section>
  </main>
}

export default Form