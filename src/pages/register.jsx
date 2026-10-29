import { Link } from 'react-router-dom'
import TextField from '../forms/TextField'
import Button from '../forms/Button'

const secondaryLinkStyle =
  'flex min-h-11 items-center justify-center rounded-full border border-destaque px-3 py-2 text-center text-sm text-texto transition-colors hover:bg-destaque/10 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-destaque'

function Register() {
  return (
    <main className="px-4 py-12 sm:py-20">
      <section
        aria-labelledby="register-title"
        className="mx-auto w-full max-w-xl rounded-2xl border border-texto/50 bg-cartao px-6 py-8 sm:px-12"
      >
        <h1
          id="register-title"
          className="mb-6 text-center text-4xl font-light text-titulo"
        >
          Criar conta
        </h1>

        <form
          className="space-y-6"
          onSubmit={(event) => event.preventDefault()}
        >
          <TextField
            id="register-name"
            label="Nome completo"
            name="name"
            autoComplete="name"
          />

          <TextField
            id="register-email"
            label="Email"
            type="email"
            name="email"
            autoComplete="email"
          />

          <TextField
            id="register-password"
            label="Palavra-passe"
            type="password"
            name="password"
            autoComplete="new-password"
          />

          <TextField
            id="register-confirm-password"
            label="Confirmar palavra-passe"
            type="password"
            name="confirmPassword"
            autoComplete="new-password"
          />

          <div className="flex items-start gap-3">
            <input
              id="register-terms"
              name="terms"
              type="checkbox"
              className="mt-1 h-5 w-5 shrink-0 appearance-none rounded border border-destaque bg-fundo checked:bg-destaque checked:after:block checked:after:text-center checked:after:text-sm checked:after:font-bold checked:after:text-black checked:after:content-['✓'] focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto"
            />

            <div className="text-sm leading-6 text-texto">
              <label htmlFor="register-terms">
                Li e aceito os{' '}
                <span className="sr-only">
                  Termos e Condições e a Política de Privacidade.
                </span>
              </label>

              <a
                href="#"
                className="rounded underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto"
              >
                Termos e Condições
              </a>

              {' e a '}

              <a
                href="#"
                className="rounded underline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-texto"
              >
                Política de Privacidade
              </a>

              .
            </div>
          </div>

          <Button>Criar conta</Button>
        </form>

        <div className="mt-4 grid grid-cols-1 gap-3 sm:grid-cols-2">
          <Link to="/login" className={secondaryLinkStyle}>
            Já tens conta? Entrar
          </Link>

          <Link
            to="/recuperar-palavra-passe"
            className={secondaryLinkStyle}
          >
            Recuperar palavra-passe
          </Link>
        </div>
      </section>
    </main>
  )
}

export default Register