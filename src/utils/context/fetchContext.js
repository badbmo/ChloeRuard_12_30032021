import React, { useState, createContext } from 'react'

export const FetchContext = createContext()

export const FetchProvider = ({ children }) => {
  const [fetch, setFetch] = useState('API')
  const toggleFetch = () => {
    setFetch(fetch === 'API' ? 'Mock' : 'API')
  }

  return (
    <FetchContext.Provider value={{ fetch, toggleFetch }}>
      {children}
    </FetchContext.Provider>
  )
}