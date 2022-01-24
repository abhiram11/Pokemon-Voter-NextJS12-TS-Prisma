import { appRouter } from '@/backend/router';
import * as trpcNext from '@trpc/server/adapters/next';

// export API handler === END POINT of API
export default trpcNext.createNextApiHandler({
    router: appRouter,
    createContext: () => null,
  });
