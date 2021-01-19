import RippleButton from './RippleButton';

export default {
  title: "Ripple Button",
  component: RippleButton
}

const Template = (args) => <RippleButton {...args} />
export const Small = Template.bind({});
Small.args = {
  size: 'sm',
  color: '#d50000',
  children: 'Small button'
}
export const Medium = Template.bind({});
Medium.args = {
  size: 'md',
  color: '#1976d2',
  children: 'Medium button'
}
export const Large = Template.bind({});
Large.args = {
  size: 'lg',
  color: '#00796b',
  children: 'Large button'
}
