import Navbar from './components/navbar'

function App() {
  return (
    <div className="min-h-screen bg-fundo text-texto">
      <Navbar />
      <div className="min-h-screen bg-fundo p-8">
        <h1 className="text-4xl font-bold text-titulo">Disc Not Found</h1>
        <div className="mt-6 rounded-xl bg-cartao p-6">
          <p className="text-texto">Texto principal dentro de um cartão.</p>
          <button className="mt-4 rounded-lg bg-destaque px-4 py-2 font-semibold text-black">
            Comprar
          </button>
        </div>
      </div>
    </div>



  )
}

export default App