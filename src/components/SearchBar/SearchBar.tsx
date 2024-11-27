import { FormEvent, useEffect, useState } from 'react';
import './search-bar.css'
import { userType } from '../../type/type';

type searchBarProps = {
  saveUserData: (user: userType) => void;
}


const SearchBar = ({ saveUserData }: searchBarProps) => {

  const [user, setUser] = useState('')

  function handleUserChange(event: React.ChangeEvent<HTMLInputElement>) {
    setUser(event.target.value)
  }

  const fetchUser= async (user:string)=>{
    try {
      const res = await fetch(`https://api.github.com/users/${user}`)
      if (!res.ok){
        throw new Error
      }

      const data = await res.json()
      console.log(data)
      saveUserData(data)
    } catch (error) {
      console.error(error)
    }
  }

  useEffect(()=>{
    fetchUser('mskvszkyt')
  },[])

  const handleSubmit=(e:FormEvent) =>{
    e.preventDefault()
    fetchUser(user)
  }

  return (
    <form className='search-form' action="" onSubmit={handleSubmit}>
      <img className='search-icon' src='/images/icon-search.svg' alt='' />
      <input placeholder='Search Github username...' value={user} onChange={handleUserChange} type='text' className='username' />
      <button className='search-button'>Search</button>
    </form>
  )
}

export default SearchBar