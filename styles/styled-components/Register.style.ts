import styled from 'styled-components'




export const RegisterPage = styled.div`
    display: flex;
    flex-direction: column;
    height: 100vh;
    box-sizing: border-box;
    align-items: center;
    padding-top: calc(100vh * 0.236 * 0.764);
    width: 100vw;
    background-color: #1c1e20;
    color: #fff;
`


export const RegisterCont = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 450px;
    height: auto;
    padding: 50px;
    background-color: #0f1113;
    border-radius: 15px;
    h1,h3 {
        margin: 0px;
    }

    .form-group{
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        margin-top: 20px;
        input {
            width: 100%;
            height: 40px;
            border-radius: 5px;
            border: 1px solid #1c1e20;
            padding: 0px 10px;
            font-size: 16px;
            color: #fff;
            background-color: #0f1113;
            font-weight: bold;
            margin-top: 4px;
            &:focus {
                outline: none;
            }
        }
        label {
            font-size: 16px;
            width: 100%;
            text-align: start;
            color: #fff;
            margin-bottom: 5px;
            text-transform: capitalize;
        }
        .error {
            color: red;
            font-size: 12px;
            margin-top: 5px;
            width: 100%;
            min-height: 15px;
            text-align: start;
            margin-left: 10px;
        }
        

    }
    .submit {
        margin-top: 20px;
        width: 100%;
        height: 40px;
        border-radius: 5px;
        border: 1px solid #1c1e20;
        background-color: #0f1113;
        color: #fff;
        font-size: 16px;
        display: flex;
        align-items: center;
        justify-content: center;
        column-gap: 10px;
        cursor: pointer;
        transition: 0.2s;
        box-shadow: rgb(0 0 0 / 20%) 1px 1px 5px 0px !important;
        &:hover {
            background-color: #1c1e20;
        }
    }
`