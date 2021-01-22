import { createContext, useState } from "react";

const FormContext = createContext();

export const FormProvider = ({initState, ...props}) => {
  const [state, setState] = useState(initState);
  return <FormContext.Provider {...props}
    value={{
      state,
      setState: (component) => setState(Object.assign(state, component))
    }}
  />
}

export const withFormComponent = Component => props => {
  const [isValid, setIsValid] = useState(false);
  return <FormContext.Consumer>
    {({state, setState}) => {
      const validation = props.validation 
      ? (value) => {
        const getValid = props.validation(value);
        setState({[props.name] : getValid ? true : false});
        return getValid;
      }
      : () => true;

      return <Component {...props} 
        isValid={isValid}
        setIsValid={setIsValid}
        validation={validation}
        onSubmit={() => {
          for (const key in state) {
            state[key] ? console.log('true', key) : console.log('false', key)
          }
        }} 
      />
    }}
  </FormContext.Consumer>
}