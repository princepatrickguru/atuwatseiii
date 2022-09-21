import React from 'react'
import './login.css'

export const Login = () => {
  return (
     <section className='section'>
        <div className='img1'>
        </div>
        <div className='parent-login'>
          <div className='line-height login-section'>
            <Texts className='text' type="h1">Login</Texts>
            <p  className='paragraph' type="p">Your details are kept safe and with it you can always gain access!</p>
            <div className='input'>
            <Input placeholder='    email' className='input-email' type="search"/>
            <Input placeholder='    Password' className='input-password' type="search"/>
            </div>
            <Button className='login-button' onClick={'controlClick'}>
            Login
            </Button>
            <p  className='paragraph1' type="p">Not Registered? Sign up</p>
            <Input className='change-password ' placeholder='                                            change password'type="text" />
            </div>
        </div>
    </section>
  )
}
