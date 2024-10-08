import React, { useState } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import styled from 'styled-components'

const AuthContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
`

const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 300px;
`

const Input = styled.input`
  margin-bottom: 10px;
  padding: 8px;
  font-size: 16px;
`

const Button = styled.button`
  background-color: #FF6B6B;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #FF5252;
  }
`

interface AuthScreenProps {
  supabase: SupabaseClient
}

const AuthScreen: React.FC<AuthScreenProps> = ({ supabase }) => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [isLogin, setIsLogin] = useState(true)

  const handleAuth = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (isLogin) {
        await supabase.auth.signInWithPassword({ email, password })
      } else {
        await supabase.auth.signUp({ email, password })
      }
    } catch (error) {
      console.error('Error:', error)
    }
  }

  return (
    <AuthContainer>
      <h1>{isLogin ? 'Sign In' : 'Sign Up'}</h1>
      <Form onSubmit={handleAuth}>
        <Input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <Input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <Button type="submit">{isLogin ? 'Sign In' : 'Sign Up'}</Button>
      </Form>
      <p>
        {isLogin ? "Don't have an account? " : "Already have an account? "}
        <a href="#" onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? 'Sign Up' : 'Sign In'}
        </a>
      </p>
    </AuthContainer>
  )
}

export default AuthScreen