import { Link, useNavigate } from 'react-router-dom'
import TextField from '../forms/textfield'
import Button from '../forms/button'
import { useState, useContext } from 'react'
import { login } from '../services/api/auth'
import { AuthContext } from '../contexts/AuthProvider'

const secondaryLinkStyle =
  'flex min-h-11 items-center justify-center rounded-full border border-destaque px-3 py-2 text-center text-sm text-texto transition-colors hover:bg-destaque/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destaque'

function Login() {
  const navigate = useNavigate()
  const [error, setError] = useState('')
  const [isSubmitting, setIsSubmitting] = useState(false)

  const { setUser } = useContext(AuthContext)

  const handleSubmit = (event) => {
    event.preventDefault()
    const data = Object.fromEntries(new FormData(event.currentTarget))

    setError('')
    setIsSubmitting(true)

    login(data)
      .then((response) => {
        if (response.auth) {
          setUser(response.user)
          navigate('/')
        } else {
          setError('Email ou palavra-passe incorretos.')
        }
      })
      .catch(() => {
        setError('Não foi possível ligar ao servidor. Tenta novamente.')
      })
      .finally(() => setIsSubmitting(false))
  }

  return (
    <main className="px-4 py-12 sm:py-20">
      <section
        aria-labelledby="login-title"
        className="mx-auto w-full max-w-xl rounded-2xl border border-texto/50 bg-cartao px-6 py-8 sm:px-12"
      >
        <h1
          id="login-title"
          className="mb-6 text-center text-4xl font-light text-titulo"
        >
          Entrar
        </h1>

        <form className="space-y-6" onSubmit={handleSubmit}>
          <TextField
            id="login-email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />

          <TextField
            id="login-password"
            label="Palavra-passe"
            type="password"
            name="password"
            autoComplete="current-password"
          />

          {error && (
            <p role="alert" className="text-center text-sm text-destaque">
              {error}
            </p>
          )}

          <Button disabled={isSubmitting}>Continuar</Button>

        </form>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link
            to="/recuperar-palavra-passe"
            className={secondaryLinkStyle}
          >
            Recuperar palavra-passe
          </Link>

          <Link
            to="/registo"
            className={secondaryLinkStyle}
          >
            Criar conta
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Login