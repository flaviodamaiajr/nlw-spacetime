export default function Home() {
  return (
    <main className="grid min-h-screen grid-cols-2">
      <div className="flex flex-col items-start justify-between px-28 py-16">
        <div className="absolute right-0 top-1/2 h-[280px] w-[526px]"></div>
      </div>

      {/* Right */}
      <div className="flex flex-col p-16">
        <div className="flex flex-1 items-center justify-center">
          <p className="w-[360px] text-center leading-relaxed">
            Você ainda não criou nenhuma lembrança, comece a{' '}
            <a href="" className="underline hover:text-gray-50">
              criar agora
            </a>
            !
          </p>
        </div>
      </div>
    </main>
  )
}
