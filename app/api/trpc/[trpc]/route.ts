import { fetchRequestHandler } from '@trpc/server/adapters/fetch';
import { createContext } from "@/backend/trpc/init";
import { appRouter } from "@/backend/routers";

function handler(req: Request) {
  return fetchRequestHandler({
    endpoint: '/api/trpc',
    req,
    router: appRouter,
    createContext: createContext,
    onError: (opts) => {
      console.error('Error happened at -->', opts.path)
    }
  });
}

export { handler as GET, handler as POST };
