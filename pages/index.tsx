import type { NextPage } from 'next'
// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  return (
    <div className="h-screen w-screen flex flex-col justify-center">
      {/* <h1 className="text-2xl text-red-200">Hello</h1> */}
      <h1>Heyyyy !!! Added postCSS support and a global.css for background color and default text color!</h1>
      <div className="bg-red-200">First</div>
      <div className="bg-pink-400">Second</div>
    </div>
  )
}

export default Home