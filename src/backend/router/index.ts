import * as trpc from '@trpc/server';

import { z } from 'zod';
import { PokemonClient } from 'pokenode-ts';

export const appRouter = trpc.router().query("get-pokemon-by-id", {
  input: z.object({id: z.number()}),
  async resolve({input}) {
    const api = new PokemonClient();
    const pokemon = await api.getPokemonById(input.id)
    // return input.id
    return pokemon;
  }
})

//we created a router which has query hello takes in text string and returns a string with the input
// export const appRouter = trpc.router().query('hello', {
//   input: z
//     .object({
//       text: z.string().nullish(),
//     })
//     .nullish(),
//   resolve({ input }) {
//     return {
//       greeting: `hello ${input?.text ?? 'world'}`,
//     };
//   },
// });

// export type definition of API
export type AppRouter = typeof appRouter;
