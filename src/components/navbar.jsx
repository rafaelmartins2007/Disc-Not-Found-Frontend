import { useEffect, useState, useContext } from 'react'
import logo from '../assets/logo.png'
import { Search, Heart, ShoppingBag, Sun, Moon, User } from 'lucide-react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthProvider'

const iconStyle = 'flex h-9 w-9 items-center justify-center rounded-lg border border-texto/20 text-texto transition-colors hover:border-destaque hover:text-destaque'

function Navbar() {

    const { user } = useContext(AuthContext)

    const [theme, setTheme] = useState(
        () => localStorage.getItem('theme') || 'dark'
    )

    useEffect(() => {
        document.documentElement.classList.toggle('dark', theme === 'dark')
        localStorage.setItem('theme', theme)
    }, [theme])

    function changeTheme() {
        setTheme(theme === 'dark' ? 'light' : 'dark')
    }
    return (
        <header className="w-full border-b border-texto/15 bg-fundo">
            <nav className="mx-auto flex h-20 items-center justify-between px-6">
                <Link to="/" className="flex items-center gap-3">
                    <img src={logo} alt="Disc Not Found" className="h-12 w-auto" />
                    <span className="text-3xl font-bold text-titulo">
                        Disc <span className="text-destaque">Not</span> Found
                    </span>
                </Link>

                <div className="flex items-center gap-2">
                    <button type="button" aria-label="Pesquisar" className={iconStyle}>
                        <Search size={18} strokeWidth={1.5} />
                    </button>

                    <Link to="/favoritos" aria-label="Favoritos" className={iconStyle}>
                        <Heart size={18} strokeWidth={1.5} />
                    </Link>

                    <Link to="/carrinho" aria-label="Carrinho" className={iconStyle}>
                        <ShoppingBag size={18} strokeWidth={1.5} />
                    </Link>

                    <button type="button" aria-label="Alternar tema" onClick={changeTheme} className={iconStyle}>
                        {theme === 'dark' ? (
                            <Sun size={18} strokeWidth={1.5} />
                        ) : (
                            <Moon size={18} strokeWidth={1.5} />
                        )}
                    </button>

                    <Link
                        to={user ? '/perfil' : '/login'}
                        className="ml-2 flex h-9 items-center gap-2 rounded-lg border border-texto/20 px-3 text-sm text-texto transition-colors hover:border-destaque hover:text-destaque"
                    >
                        <User size={16} strokeWidth={1.5} />
                        <span className="max-w-32 truncate">{user ? user.name : 'Entrar'}</span>
                    </Link>
                </div>
            </nav>
        </header>
    )
}

export default Navbar

