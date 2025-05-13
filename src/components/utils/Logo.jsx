import HeaderLogo from '../../assets/lexis-logo.jpeg'
const Logo = () => {
    return (
        <div className="flex items-center gap-2">
            <img src={HeaderLogo} alt="this is lexis logo" className='w-10 h-10 rounded-full object-cover' />
            <p className="dm-sans text-2xl font-bold">Lexis</p>
        </div>
    )
}

export default Logo
