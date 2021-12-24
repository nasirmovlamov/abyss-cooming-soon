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
        setemail('')
        if (emailRegex.test(email)) {
            try {
                const response = await axios.post('https://api.abyss.com/subscribe', {email})
                setSubscribe(true)
                setloading('success')
                setemail('')
            } catch (error:any) {
                setSubscribe(false)
                setloading('failed')
                setemail('')
                if(error?.response?.data?.message) {
                    seterror(error.response.data.message)
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