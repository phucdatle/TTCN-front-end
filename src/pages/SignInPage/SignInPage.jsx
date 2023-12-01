import React, { useEffect } from 'react'
import { WrapperContainerLeft, WrapperContainerRight, WrapperTextLight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { Button, Image } from 'antd'
import imageLogo from '../../assets/img/login.jpg'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons';
import { useState } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
// import { useMutation } from '@tanstack/react-query'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
// import Loading from '../../components/LoadingComponent/Loading'
// import * as message from '../../components/Message/Message'
import { jwtDecode } from "jwt-decode";
import {useDispatch} from 'react-redux'
import { updateUser } from '../../redux/slides/userSlide';


const SignInPage = () => {
  const [isShowPassword, setIsShowPassword]= useState(false)
  const location = useLocation()
  const dispatch = useDispatch();


  const navigate = useNavigate()

  const mutation = useMutationHooks(
    data => UserService.loginUser(data)
  )
  const{ data, isSuccess} = mutation

  useEffect(()=>{
    if (isSuccess) {
      if(location?.state) {
        navigate(location?.state)
      }else {
        navigate('/')
      }
      localStorage.setItem('access_token', JSON.stringify(data?.access_token))
      if(data?.access_token){
        const decoded = jwtDecode(data?.access_token)
        if(decoded?.id){
        handleGetDetailsUser(decoded?.id, data?.access_token )
        }
      } 
    }
  },[isSuccess])

  const handleGetDetailsUser = async (id, token) =>{
    const res = await UserService.getDetailsUser(id, token)
    dispatch(updateUser({ ...res?.data, access_token: token }))
  }

  const handleNavigateSignUp = () =>{
    navigate('/sign-up')
  }

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleOnchangeEmail = (value) => {
    setEmail(value)

  }
  const handleOnchangePassword = (value) => {
    setPassword(value)
  }
  const handleSignIn = ()=> {
    mutation.mutate({
      email,
      password
    })
  }
  return (
    <div style={{ display:'flex', alignItems:' center', justifyContent:'center', background:'rgba(0, 0, 0, 0.53)', height:'100vh'}}>
      <div style={{width:'800px', height:'450px', borderRadius:'6px', background:'#fff', display:'flex'}}>
        <WrapperContainerLeft>
          <h1>Sign In</h1>
          <p style={{fontSize:'13px'}}>Sign in to start your session </p>
          <InputForm style={{marginBottom:'10px'}} placeholder="Email" value={email} onChange={handleOnchangeEmail}/>
          <div style={{position:'relative'}}>
            <span
            onClick={()=> setIsShowPassword(!isShowPassword) }
             style={{
                    zIndex: 10,
                    position: 'absolute',
                    top:'4px',
                    right: '8px'
            }}  
            >{
              isShowPassword ? (
                <EyeFilled/>
              ) : (
                <EyeInvisibleFilled/>
              )
            }
            </span>
            <InputForm placeholder="password" type={isShowPassword ?"text": "password"} value={password} onChange={handleOnchangePassword}/>
          </div>
          {data?.status === 'ERR' && <span style={{color: 'red'}}>{data?.message}</span>}
          {/* <Loading isLoading={isLoading}> */}
            <Button 
            disabled={!email.length || !password.length }
            onClick={handleSignIn}
            type="primary"
            style={{backgroundColor:'rgb(65,111,248)', height:'35px', margin:'26px 0 10px', width:'100%', fontSize:'15px', fontWeight:'500'}
            }>Logn In</Button>
          {/* </Loading> */}
          <p><WrapperTextLight>Forgot password</WrapperTextLight></p>
          <p style={{fontSize:'13px'}}>Don't have account? <WrapperTextLight onClick={handleNavigateSignUp}>Sign Up</WrapperTextLight></p>
        </WrapperContainerLeft>

        <WrapperContainerRight>
          <Image src={imageLogo} preview={false} alt="image-logo" height='170px' width='270px'/>
          <h4 style={{fontSize:'13px', color:'#fff'}}>Haloo</h4>
        </WrapperContainerRight>
      </div>
    </div>
  )
}

export default SignInPage
