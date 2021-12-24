import React, { useContext } from 'react'
import { EasterContext } from '../context/EasterContext'
import { useRouter } from 'next/router'
import { useInServer } from '../hooks/useInServer'

interface Props {
    
}

const Register = (props: Props) => {
    const {easterFound} = useContext(EasterContext)
    const {inServer} = useInServer()
    const router = useRouter()
    console.log(easterFound)
    console.log(inServer)
   
        return (
            <div>
                register
            </div>
        )
}

export default Register
