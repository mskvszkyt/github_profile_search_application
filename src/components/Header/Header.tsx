import './header.css'
import light from '/images/lightIcon.svg'
import dark from '/images/darkIcon.svg'

type HeaderProps = {
    darkmode: boolean
    toggleDarkMode: () => void
}

const Header = (props: HeaderProps) => {
    return (
        <div className='header'>
            <h1>devfinder</h1>
            <button className='theme-toggle' onClick={props.toggleDarkMode}>
                {props.darkmode ? 'light' : 'dark'}
                {props.darkmode ? <img src={light} alt=''/> : <img src={dark} alt=''/>}
            </button>
        </div>
    )
}

export default Header