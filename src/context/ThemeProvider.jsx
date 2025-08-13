import React, { createContext, useState } from 'react'

const CreateTheme = createContext(null)


const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState("light")

  function toggleTheme() {
    setTheme((preTheme => preTheme == "light" ? "dark" : "light"))
  }
  return (
    <div>
      <CreateTheme.Provider value={{ theme, toggleTheme }}>
        {children}
      </CreateTheme.Provider>
    </div>
  )
}

export { ThemeProvider, CreateTheme }