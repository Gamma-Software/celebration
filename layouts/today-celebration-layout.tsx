export default function TodayCelebrationLayout({ children }: { children: React.ReactNode }) {
  return (
    <main className="row-start-2 w-full">
        <div className="flex flex-col gap-8 w-full items-center">
            {children}
        </div>
    </main>
  )
}