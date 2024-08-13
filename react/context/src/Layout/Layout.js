import Header from "./Header"
import Footer from "./Footer"

export default function Layout({ children }) {

  return (
    <div className="min-h-screen flex flex-col justify-between">
      <Header />
      <main className='bg-mainBG h-full flex flex-col gap-20 justify-evenly items-center font-bold text-5xl'>
        {children}
      </main>
      <Footer />
    </div>
  )
}