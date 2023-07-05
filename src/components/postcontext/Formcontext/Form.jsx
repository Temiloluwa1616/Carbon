import { useContext } from "react"
import { createContext, useReducer } from "react"

export const INITS_STATE={
    Surname: '',
    OtherName: '',
    EmailAddress: '',
    PIN: '',
    DateofBirth: '',
    Gender: '',
    Loading: false,
    Error: false
}

export function Form(state,action){
switch(action.type){
    case "START_FETCH":
        return{Loading: true, Error: false, Surname: "", OtherName: "", EmailAddress: '',PIN: '',DateofBirth: '',Gender: ''}
        break;

        case "DATA_FETCHED":
        return{Loading: false, Error: false, Surname: action.payload, OtherName: action.payload, EmailAddress: action.payload,PIN: action.payload,DateofBirth: action.payload,Gender: action.payload}
        break;

        case "ERROR":
        return{Loading: false, Error: true, Surname: "", OtherName: "", EmailAddress: '',PIN: '',DateofBirth: '',Gender: ''}
        break;

        default:
            return state

}

}

export const FormContext = createContext()

export function FormProvider({children}){
    const [state, dispatch] = useReducer(Form, INITS_STATE)
    return(
        <FormContext.Provider value={{ state, dispatch }}>
         {children}
        </FormContext.Provider>
    )
}

export function useForm(){
    return useContext(FormContext)
}

