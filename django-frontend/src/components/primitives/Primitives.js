import styled from 'styled-components';

export const AppWrapper = styled.div`
    width: 100vw;
    height: 100vh;
    background: #000428;  /* fallback for old browsers */
    background: -webkit-linear-gradient(to bottom, #004e92, #000428);  /* Chrome 10-25, Safari 5.1-6 */
    background: linear-gradient(to bottom, #004e92, #000428); /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
`

export const MainWrapper = styled.div`
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`

// 

export const Button = styled.button`
    border-radius: 40px;
    border: 3px solid white;
    width: 150px;
    height: 50px;
    font-weight: 900;
    font-size: 1.6rem;
    color: #000428;

    
`
export const ButtonMainWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100px;
    width: 150px;
    
`
export const FieldWrapper = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: column;
    padding: 5px;
`
export const ButtonWrapper = styled.div`
    display: flex;
    justify-content: center;
    padding-top: 10px;
`
export const Label = styled.label`
    color: white;
    font-weight: 900;
`
export const Title = styled.h1`
    color: white;
    font-size: 2.5rem;
`
export const SignInWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`
export const SignUpWrapper = styled.div`
     display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    height: 100%;
`

