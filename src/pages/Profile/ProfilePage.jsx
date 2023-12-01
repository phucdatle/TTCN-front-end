import React, { useEffect, useState } from 'react'
import { WrapperContentProfile, WrapperHeader, WrapperInput, WrapperLabel, WrapperUploadFile } from './style'
import InputForm from '../../components/InputForm/InputForm'
import { Button } from 'antd'
import { useDispatch, useSelector } from 'react-redux'
import * as UserService from '../../service/UserService'
import { useMutationHooks } from '../../hooks/useMutationHook'
import Loading from '../../components/LoadingComponent/Loading'
import * as message from '../../components/Message/Message'
import { updateUser } from '../../redux/slides/userSlide'
import { getBase64 } from '../../utils'
import { UploadOutlined} from '@ant-design/icons'

    const ProfilePage = () => {
        const user = useSelector((state) => state.user)
        const [name, setName] = useState('')
        const [email, setEmail] = useState('')
        const [phone, setPhone] = useState('')
        const [address, setAddress] = useState('')
        const [avatar, setAvatar] = useState('')
        const mutation = useMutationHooks(
            (data) => {
                const {id, access_token,  ...rests} = data
                UserService.updateUser(id, rests, access_token)}
          )
          const dispatch = useDispatch()
          const{ data, isLoading, isSuccess, isError } = mutation
          console.log('data', data)

        useEffect(() => {
            setName(user?.name)
            setEmail(user?.email)
            setPhone(user?.phone)
            setAddress(user?.address)
            setAvatar(user?.avatar)
        }, [user])

        useEffect(()=> {
            if (isSuccess) {
                message.success()
                handleGetDetailsUser(user?.id, user?.access_token)
            } else if (isError) {
                message.error()
            }
        }, [isSuccess, isError])

        const handleGetDetailsUser = async (id, token) =>{
            const res = await UserService.getDetailsUser(id, token)
            dispatch(updateUser({ ...res?.data, access_token: token }))
            //  console.log('res', res)
          }
         

        const handleOnchangeName = (value) =>{
            setName(value)
        }
        const handleOnchangeEmail = (value) =>{
            setEmail(value)
        }
        const handleOnchangePhone = (value) =>{
            setPhone(value)
        }
        const handleOnchangeAddress = (value) =>{
            setAddress(value)
        }
        const handleOnchangeAvatar = async ({fileList}) => {
            const file = fileList[0]
            if (!file.url && !file.preview) {
                file.preview = await getBase64(file.originFileObj );
            }
            setAvatar(file.preview)
        }

        const handleUpdate = () => {
            mutation.mutate({ id: user?.id, email, name, phone, address, avatar, access_token: user?.access_token })
    
        }
    return (
        <div style={{ width: '1270px', margin:'0 auto', height:'500px' }}>
        <WrapperHeader>Profile User</WrapperHeader>

            <WrapperContentProfile>
                <WrapperInput>
                    <WrapperLabel htmlFor="name">Name</WrapperLabel>
                    <InputForm style={{width: '500px', border:'none'}} id="name" value={name} onChange={handleOnchangeName}/>
                    <Button
                        onClick={handleUpdate}
                        type="primary">Update</Button>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="email">Email</WrapperLabel>
                    <InputForm style={{width: '500px', border:'none'}} id="email" value={email} onChange={handleOnchangeEmail}/>
                    <Button
                        onClick={handleUpdate}
                        type="primary">Update</Button>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="phone">Phone</WrapperLabel>
                    <InputForm style={{width: '500px', border:'none'}} id="phone" value={phone} onChange={handleOnchangePhone}/>
                    <Button
                        onClick={handleUpdate}
                        type="primary">Update</Button>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="address">Address</WrapperLabel>
                    <InputForm style={{width: '500px', border:'none'}} id="Address" value={address} onChange={handleOnchangeAddress}/>
                    <Button
                        onClick={handleUpdate}
                        type="primary">Update</Button>
                </WrapperInput>
                <WrapperInput>
                    <WrapperLabel htmlFor="avatar">Avatar</WrapperLabel>
                        <WrapperUploadFile onChange={handleOnchangeAvatar} maxCount={1}>
                            <Button icon={<UploadOutlined />}>Select File</Button>
                        </WrapperUploadFile>
                        {avatar && (
                            <img src={avatar} style={{
                                height: '60px',
                                width: '60px',
                                borderRadius: '50%',
                                objectFit: 'cover'
                            }} alt="avatar"/>
                        )}
                    {/* <InputForm style={{width: '500px', border:'none'}} id="avatar" value={avatar} onChange={handleOnchangeAvarta}/> */}
                    <Button
                        onClick={handleUpdate}
                        type="primary">Update</Button>
                </WrapperInput>
            </WrapperContentProfile>
            {isLoading && <Loading />}
        </div>
    )   
    }

export default ProfilePage