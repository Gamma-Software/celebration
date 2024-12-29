"use client"
import Link from 'next/link'

export default function Error() {
  return (
    <main className="grid min-h-screen place-items-center px-6 py-24 sm:py-32 lg:px-8">
      <div className="text-center">
        <p className="text-base font-semibold text-primary">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight sm:text-5xl">Page introuvable</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Désolé, nous n'avons pas trouvé la page que vous recherchez.</p>
      </div>
    </main>
  )
}
