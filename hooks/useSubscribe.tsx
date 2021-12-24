//useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';



export const useSubscribe = () =>  {
    const [subscribe, setSubscribe] = useState<true | false>(true);
    const [email, setemail] = useState<string>('');
    const [loading, setloading] = useState<'pending' | 'success' | 'failed' | 'idle'>('idle')
    const [error, seterror] = useState('')
    
    const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
    const closeCongrat = () => {
        setloading('idle')
        setSubscribe(false)
        setemail('')
        seterror('')
    }

    const subscribeEmail = async (email: string) => {
        seterror('')
        if (emailRegex.test(email)) {
            try {
                const response = await axios.post('https://demo.abysshub.com/api/subscribe', {email})
                setSubscribe(true)
                setloading('success')
            } catch (error:any) {
                setSubscribe(false)
                setloading('failed')
                if(error?.response?.data) {
                    if(error.response.data.errors.email[0]){
                        seterror(error.response.data.errors.email[0])
                        return
                    }
                    if(error.response.data.errors.message){
                        seterror(error.response.data.errors.message)
                    }
                } else {
                    seterror('Something went wrong , please try again later.')
                }
            }
        }else{
            setSubscribe(false)
            setloading('failed')
            seterror('Please enter a valid email address.')
        }
    }

   

    

    return {email , setemail , loading , subscribe , error , subscribeEmail , setloading , closeCongrat}
}