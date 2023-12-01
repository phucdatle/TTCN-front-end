import React, { useEffect, useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { Button, Image } from 'antd'
import imageLogo from '../../assets/img/login.jpg'
import { useNavigate } from 'react-router-dom'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import * as message from '../../components/Message/Message'

const SignUPPage = () => {
  const navigate= useNavigate()
  const handleNavigateSignIn = () =>{
    navigate('/sign-in')
  }
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')

  const handleOnchangeEmail = (value) => {
    setEmail(value)
  }
  const mutation = useMutationHooks(
    data => UserService.signupUser(data)
  )
  const{ data, isSuccess, isError } = mutation

  useEffect(()=>{
    if (isSuccess){
      message.success()
      handleNavigateSignIn()
    }else if (isError){
      message.error()
    }
  },[isSuccess, isError] )

  const handleOnchangePassword = (value) => {
    setPassword(value)
  }

  const handleOnchangeConfirmPassword = (value) => {
    setConfirmPassword(value)
  }
  const handleSignUp = ()=> {
    mutation.mutate({
      email,
      password,
      confirmPassword
    })
    console.log('sign-up', email, password, confirmPassword)
  }

  return (
    <div style={{ display:'flex', alignItems:' center', justifyContent:'center', background:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
    <div style={{width:'800px', height:'450px', borderRadius:'6px', background:'#fff', display:'flex'}}>
      <WrapperContainerLeft>
        <h1>Sign Up</h1>
        <p style={{fontSize:'13px'}}>Sign up to start your session </p>
        <InputForm style={{marginBottom:'10px'}} placeholder="Email" value={email} onChange={handleOnchangeEmail} />
        <InputForm style={{marginBottom:'10px'}} placeholder="Pasword" value={password} onChange={handleOnchangePassword} />
        <InputForm placeholder="Retype password" value={confirmPassword} onChange={handleOnchangeConfirmPassword} />

        {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
        <Button
        disabled={!email.length || !password.length ||!confirmPassword.length }
        onClick={handleSignUp}
        type="primary"
        style={{backgroundColor:'rgb(65,111,248)', height:'35px', margin:'26px 0 10px', width:'100%', fontSize:'15px', fontWeight:'500'}
        }>Sign Up</Button>
       

        <p style={{fontSize:'13px'}}>Do you have an account. <WrapperTextLight onClick={handleNavigateSignIn}>Sign In</WrapperTextLight></p>
      </WrapperContainerLeft>

      <WrapperContainerRight>
        <Image src={imageLogo} preview={false} alt="image-logo" height='170px' width='270px'/>
        <h4 style={{fontSize:'13px', color:'#fff'}}>Web service experience</h4>
      </WrapperContainerRight>
    </div>
  </div>
  )
}

export default SignUPPage