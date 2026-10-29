import { Link } from 'react-router-dom'

function RecoverPassword() {
  return (
    <main className="px-4 py-12 text-center">
      <h1 className="text-3xl font-light text-titulo">
        Recuperar palavra-passe
      </h1>


      <p className="mt-4">
        Esta funcionalidade estará disponível mais tarde.
      </p>

      <Link
        to="/login"
        className="mt-6 inline-block rounded underline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-destaque"
      >
        Voltar a entrar
      </Link>
    </main>
  )

}

export default RecoverPassword