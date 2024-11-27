import { userType } from '../../type/type'
import './user-data.css'

type userProps = {
  user:userType
}

const UserData = ({user}:userProps) => {
  return (
    <div className='user-card'>
      <div className="user-top">
        <img src={user.avatar_url} alt="avatar" />
        <div className="user-info">
          <div className="user-info-inner">
            <h2>{user.name? user.name : "The Octocat"}</h2>
            <a href={`https://github.com/${user.login}`}>@{user.login}</a>
          </div>
          {user.created_at}
        </div>
      </div>
      <div className="user-middle">

      </div>
      <div className="user-bottom">

      </div>
    </div>
  )
}

export default UserData