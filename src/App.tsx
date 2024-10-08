import React, { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom'
import { SupabaseClient } from '@supabase/supabase-js'
import styled from 'styled-components'
import AuthScreen from './components/AuthScreen'
import HomeScreen from './components/HomeScreen'

const AppContainer = styled.div`
  font-family: 'Poppins', sans-serif;
  color: #333;
`

interface AppProps {
  supabase: SupabaseClient
}

const App: React.FC<AppProps> = ({ supabase }) => {
  const [session, setSession] = useState<any>(null)

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setSession(session)
    })

    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, [])

  return (
    <AppContainer>
      <Router>
        <Routes>
          <Route path="/auth" element={!session ? <AuthScreen supabase={supabase} /> : <Navigate to="/" />} />
          <Route path="/" element={session ? <HomeScreen supabase={supabase} /> : <Navigate to="/auth" />} />
        </Routes>
      </Router>
    </AppContainer>
  )
}

export default App