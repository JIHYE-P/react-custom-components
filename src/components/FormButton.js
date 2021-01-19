import { withFormComponent } from '../utils/context';
import RippleButton from './RippleButton';

const FormButton = ({onSubmit, ...props}) => {
  return <RippleButton {...props} onClick={onSubmit} />
}

export default withFormComponent(FormButton)