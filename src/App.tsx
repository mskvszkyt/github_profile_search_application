import Header from "./components/Header/Header"
import SearchBar from "./components/SearchBar/SearchBar"
import UserData from "./components/UserData/UserData"
import './app.css'
import { useEffect, useState } from "react"
import { userType } from "./type/type"


function App() {

  const [darkmode, setDarkmode] = useState(true)
  const [user, setUser] = useState<userType>()

  const toggleDarkMode = () => {
    setDarkmode(prev => !prev)
  }

  const handleUser = (user:userType) => {
    setUser(user)
  }

  useEffect(() => {
    document.body.className = `${darkmode ? 'dark' : 'light'}`
  }, [darkmode])

  return (
    <div className="app">
      <div className="container">
        <Header darkmode={darkmode} toggleDarkMode={toggleDarkMode} />
        <SearchBar saveUserData={handleUser}/>
        <UserData />
      </div>
    </div>
  )
}

export default App
