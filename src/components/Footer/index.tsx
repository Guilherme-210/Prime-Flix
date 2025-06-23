export default function Footer() {
  return (
    <>
      <footer className="bg-[#111827] text-gray-400 py-8 mt-12">
        <div className="max-w-6xl mx-auto px-4 flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Esquerda */}
          <div className="text-center sm:text-left">
            <h4 className="text-white text-lg font-semibold">PrimeFlix</h4>
            <p className="text-sm">
              © {new Date().getFullYear()} Todos os direitos reservados.
            </p>
          </div>

          {/* Direita */}
          <div className="flex gap-4">
            <a
              href="#"
              className="hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Sobre
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contato
            </a>
            <a
              href="#"
              className="hover:text-white transition duration-200"
              target="_blank"
              rel="noopener noreferrer"
            >
              Termos
            </a>
          </div>
        </div>
      </footer>
    </>
  )
}
