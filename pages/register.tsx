import React, { FC,  useContext, useEffect, useReducer } from 'react'
import { EasterContext } from '../context/EasterContext'
import { useRouter } from 'next/router'
import { useInServer } from '../hooks/useInServer'
import { RegisterCont, RegisterPage } from '../styles/styled-components/Register.style'
import styled from 'styled-components'
import Image from 'next/image'
import { validateAll, validator } from '../validation/RegisterValidation'
interface Props {
    
}


interface RegisterInterface {
    name:{
        value:string,
        error:string
        focused:boolean,
        isvalid:boolean
    },
    email:{
        value:string,
        error:string
        focused:boolean,
        isvalid:boolean
    },
    password:{
        value:string,
        error:string
        focused:boolean,
        isvalid:boolean
    },
    password2:{
        value:string,
        error:string
        focused:boolean,
        isvalid:boolean
    },
    isvalid:boolean
};

const registerState:any = {
    name:{
        value:'',
        error:'',
        focused:false,
        isvalid:false
    },
    email:{
        value:'',
        error:'',
        focused:false,
        isvalid:false
    },
    password:{
        value:'',
        error:'',
        focused:false,
        isvalid:false
    },
    password2:{
        value:'',
        error:'',
        focused:false,
        isvalid:false
    },
    isvalid:false
};



function resgisterReducer(state:any, action:any) {
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

    switch (action.type) {
        case 'change':
            return {
                ...state,
                [action.name]:{
                    ...state[action.name],
                    error:validator(state, action.name).error,
                    isvalid:validator(state, action.name).isvalid,
                    value:action.value
                }
            };
        case 'focus':
            return {
                ...state,
                [action.name]:{
                    ...state[action.name],
                    focused:true
                }
            };
        case 'blur':
            return {
                ...state,
                [action.name]:{
                    ...state[action.name],
                    error:validator(state, action.name).error,
                    isvalid:validator(state, action.name).isvalid,
                    focused:false
                }
            };

        case 'submit':
            let {isvalid , stateWithErrors} = validateAll(state);
            return {
                ...stateWithErrors
            }
        default:
            throw new Error();
    }
}

const FormGroup = (props:{name:string , state:any, dispatch:Function})   => {
    const {name , state , dispatch} = props

    const onChange = (e:any) => {
        const {name, value} = e.target;
        dispatch({type:'change', name, value});
    }

    const onFocus = (e:any) => {
        const {name, value} = e.target;
        dispatch({type:'focus', name, value});
    }

    const onBlur = (e:any) => {
        const {name, value} = e.target;
        dispatch({type:'blur', name, value});
    }

    return (
        <div className="form-group">
            <label htmlFor="name">{name}</label>
            <input
                type={name === 'email' && 'email' ||  (name === 'password' || name==='password2') && 'password' || 'text'}
                name={name}
                value={state.value}
                onChange={onChange}
                onFocus={onFocus}
                onBlur={onBlur}
            />
            <span className='error'>{state[name].error}</span>
        </div>
    )
} 


const Register:FC = (props: Props) => {
    const [state, dispatch] = useReducer(resgisterReducer, registerState);
    const {easterFound} = useContext(EasterContext)
    const {inServer} = useInServer()
    const router = useRouter()

    useEffect(() => {
        if(router.isReady){
            if(!inServer){
                if(!easterFound){
                    router.push('/')
                }
            }
        }
    }, [easterFound , inServer])




    const onSubmit = (e:any) => {
        e.preventDefault();
        dispatch({type:'submit'})
    }



    if(easterFound && !inServer){
        return (
            <RegisterPage>
                <RegisterCont onSubmit={onSubmit}>
                    <h1>Early Register</h1>
                    <h3>(easter register)</h3>

                    <FormGroup name={'name'} state={state} dispatch={dispatch}/>

                    <FormGroup name={'email'} state={state} dispatch={dispatch}/>

                    <FormGroup name={'password'} state={state} dispatch={dispatch}/>

                    <FormGroup name={'password2'} state={state} dispatch={dispatch}/>

                    <button className="submit" type='submit'>Submit</button>
                    <button className="submit" type='button'> <Image src="/google.png" width={15} height={15}/> <span>Continue with Google</span></button>
                </RegisterCont>
            </RegisterPage>
        )
    }
    else{

        return (
            <></>
        )
    }
   
}
export default Register


