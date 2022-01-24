import { trpc } from '@/utils/trpc'
import { getOptionsForVote } from 'getRandomPokemon'
import type { NextPage } from 'next'
import { useMemo } from 'react'
// import Head from 'next/head'
// import Image from 'next/image'

const Home: NextPage = () => {
  // const {data, isLoading} = trpc.useQuery(["hello", {text: "abhiram"}])

  // if (isLoading) return <div>Loading...</div>

  // if (data) return <div> {data.greeting}</div>

  const [first, second] = useMemo(() => getOptionsForVote(), [])

  const firstPokemon = trpc.useQuery(['get-pokemon-by-id', { id: first }])
  const secondPokemon = trpc.useQuery(['get-pokemon-by-id', { id: second }])
  console.log(firstPokemon.data);

  if (firstPokemon.isLoading || secondPokemon.isLoading) return null;
   
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center">
      {/* <h1 className="text-2xl text-red-200">Hello</h1> */}
      <h1>Heyyyy !!! Added postCSS support and a global.css for background color and default text color!</h1>
      <div><h1 className="text-2xl text-center pb-4">Which Pokemon is Rounder?</h1></div>
      <div className="border rounded p-8 flex justify-between items-center max-w-2xl">
        <div className="w-64 h-64 flex-col">
          <img src={firstPokemon.data?.sprites.front_default} className="w-full"/>
          <div className="text-xl text-center capitalize mt-[-2rem]">
            {firstPokemon.data?.name}
          </div>
          </div>
        <h2 className="p-8">v/s</h2>
        <div className="w-64 h-64 flex-col">

        <img src={secondPokemon.data?.sprites.front_default}  className="w-full"/>
        <div  className="text-xl text-center capitalize  mt-[-2rem]">
          {secondPokemon.data?.name}
        </div>
        </div>
        </div>
    </div>
  )
}

export default Home