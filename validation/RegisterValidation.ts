export const validator = (state:any, name:string) => {
    let isvalid = true;
    let error = '';

    if(name === 'name'){
        if(!(state[name].value.length > 0)){
            return {
                ...state,
                error:'This field is required',
                isvalid:false
            }
        }
        
        if(state[name].value.length < 3){
            return {
                ...state[name],
                error:'Name must be at least 3 characters long',
                isvalid:false
            }
        }

        if(state[name].value.length > 20){
            return {
                ...state[name],
                error:'Name can not be longer than 20 characters',
                isvalid:false
            }
        }

        return {
            ...state[name],
            error:'',
            isvalid:true
        }
    }

    if(name === 'email'){
        if(!(state[name].value.length > 0)){
            return {
                ...state[name],
                error:'Email field is required',
                isvalid:false
            }
        }

        if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state[name].value))){
            return {
                ...state[name],
                error:'Please enter a valid email address',
                isvalid:false
            }
        }

        return {
            ...state[name],
            error:'',
            isvalid:true
        }
    }

    if(name === 'password'){
        if(!(state[name].value.length > 0)){
            return {
                ...state[name],
                error:'Password field is required',
                isvalid:false
            }
        }

        if(state[name].value.length < 8){
            return {
                ...state[name],
                error:'Password must be at least 8 characters long',
                isvalid:false
            }
        }

        return {
            ...state[name],
            error:'',
            isvalid:true
        }
    }

    if(name === 'password2'){
        if(!(state[name].value.length > 0)){
            return {
                ...state[name],
                error:'Password field is required',
                isvalid:false
            }
        }

        if(state[name].value !== state['password'].value){
            return {
                ...state[name],
                error:'Passwords must match',
                isvalid:false
            }
        }

        return {
            ...state[name],
            error:'',
            isvalid:true
        }
    }

}


export const validateAll = (state:any) => {
    let isvalid = true;
    let error = '';
    let stateWithErrors:any = {...state};
    const nameRegex = /^[a-zA-Z0-9]*$/;

    if(!(stateWithErrors['name'].value.length > 0)){
        stateWithErrors =  {
            ...stateWithErrors,
            ['name']:{
                ...stateWithErrors['name'],
                error:'This field is required',
                isvalid:false,
                focused:false
            }
        };
    }
    
    if(stateWithErrors['name'].value.length < 3){
        stateWithErrors=  {
            ...stateWithErrors,
            ['name']:{
                ...stateWithErrors['name'],
                error:'Name must be at least 3 characters long',
                isvalid:false,
                focused:false
            }
        }
    }

    if(stateWithErrors['name'].value.length > 20){
        stateWithErrors=  {
            ...stateWithErrors,
            ['name']:{
                ...stateWithErrors['name'],
                error:'Name can not be longer than 20 characters',
                isvalid:false,
                focused:false
            }
        }
    }

    if(!nameRegex.test(stateWithErrors['name'].value)){
        stateWithErrors=  {
            ...stateWithErrors,
            ['name']:{
                ...stateWithErrors['name'],
                error:'Name can only contain letters and numbers',
                isvalid:false,
                focused:false
            }
        }
    }
    

    if(!(stateWithErrors['email'].value.length > 0)){
        stateWithErrors =  {
            ...stateWithErrors,
            ['email']:{
                ...stateWithErrors['email'],
                error:'Email field is required',
                isvalid:false,
                focused:false
            }
        };
    }

    if(!(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(state['email'].value))){
        stateWithErrors=  {
            ...stateWithErrors,
            ['email']:{
                ...stateWithErrors['email'],
                error:'Please enter a valid email address',
                isvalid:false,
                focused:false
            }
        }
    }

    if(!(stateWithErrors['password'].value.length > 0)){
        stateWithErrors =  {
            ...stateWithErrors,
            ['password']:{
                ...stateWithErrors['password'],
                error:'Password field is required',
                isvalid:false,
                focused:false
            }
        };
    }

    if(stateWithErrors['password'].value.length < 8){
        stateWithErrors=  {
            ...stateWithErrors,
            ['password']:{
                ...stateWithErrors['password'],
                error:'Password must be at least 8 characters long',
                isvalid:false,
                focused:false
            }
        }
    }

    if(!(stateWithErrors['password2'].value.length > 0)){
        stateWithErrors =  {
            ...stateWithErrors,
            ['password2']:{
                ...stateWithErrors['password2'],
                error:'Password field is required',
                isvalid:false,
                focused:false
            }
        };
    }

    if(stateWithErrors['password2'].value !== stateWithErrors['password'].value){
        stateWithErrors=  {
            ...stateWithErrors,
            ['password2']:{
                ...stateWithErrors['password2'],
                error:'Passwords must match',
                isvalid:false,
                focused:false
            }
        }
    }


    for(let key in stateWithErrors){
        if(key === 'isvalid'){
            continue;
        }
        else{
            if(!stateWithErrors[key].isvalid){
                isvalid = false;
            }
        }
    }

    return {
        isvalid,
        stateWithErrors
    }
}