import { createContext, useState } from "react";
import styled from "styled-components";
import Form from "../components/Form";

const FormContext = createContext();

export const FormProvider = ({...props}) => {
  const [state, setState] = useState({});
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
      console.log(state);
      return <Component {...props} 
        isValid={isValid}
        setIsValid={setIsValid}
        validation={validation}
        onSubmit={() => console.log('?')} 
      />
    }}
  </FormContext.Consumer>
}