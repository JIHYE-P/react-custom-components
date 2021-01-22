import {FormField} from './FormField';
import { FormProvider, withFormComponent } from '../utils/context';

export default {
  title: "Field Validation",
  component: withFormComponent(FormField)
}

const Template = (args) => <FormProvider>
  <FormField {...args} />
</FormProvider>

export const Input = Template.bind({});
Input.args = {
  type: "text",
  name: "name",
  placeholder: "Name",
  validation: (value) => Boolean(value.length > 0),
  feedback: "please enter name."
}
export const password = Template.bind({});
password.args = {
  type: "password",
  name: "password",
  placeholder: "Password",
  validation: (value) => Boolean(value.length > 5),
  feedback: "please enter password."
}

