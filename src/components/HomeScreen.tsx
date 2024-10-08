import React, { useState, useEffect } from 'react'
import { SupabaseClient } from '@supabase/supabase-js'
import styled from 'styled-components'
import PostList from './PostList'

const HomeContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: 20px;
`

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`

const Button = styled.button`
  background-color: #4ECDC4;
  color: white;
  border: none;
  padding: 10px;
  font-size: 16px;
  cursor: pointer;
  &:hover {
    background-color: #45B7D1;
  }
`

interface HomeScreenProps {
  supabase: SupabaseClient
}

const HomeScreen: React.FC<HomeScreenProps> = ({ supabase }) => {
  const [user, setUser] = useState<any>(null)

  useEffect(() => {
    const fetchUser = async () => {
      const { data: { user } } = await supabase.auth.getUser()
      setUser(user)
    }
    fetchUser()
  }, [])

  const handleSignOut = async () => {
    await supabase.auth.signOut()
  }

  return (
    <HomeContainer>
      <Header>
        <h1>Clothing Link</h1>
        <Button onClick={handleSignOut}>Sign Out</Button>
      </Header>
      <PostList supabase={supabase} />
    </HomeContainer>
  )
}

export default HomeScreen