//useFetch.js
import axios from 'axios';
import { useState, useEffect } from 'react';



export const useInServer = () =>  {
    const [inServer, setinServer] = useState(true)

   useEffect(() => {
        setinServer(false)
   }, [])

    return {inServer}
}